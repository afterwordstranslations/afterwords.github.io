import fs from "fs";
import path from "path";

const POSTS_DIR = path.join(process.cwd(), "src/content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  image?: string;
  author?: string;
}

export interface Author {
  name: string;
  role: string;
  avatar: string;
}

export const AUTHORS: Record<string, Author> = {
  aggeliki: {
    name: "Aggeliki Menegaki",
    role: "Founder & Lead Translator",
    avatar: "/aggeliki.jpg",
  },
  team: {
    name: "Afterwords Team",
    role: "Translation & Localization Experts",
    avatar: "/logo.png",
  },
};

export const DEFAULT_AUTHOR = "team";

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function estimateReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const files = fs.readdirSync(POSTS_DIR);
  const posts = files
    .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"))
    .map((file) => {
      const filePath = path.join(POSTS_DIR, file);
      const content = fs.readFileSync(filePath, "utf-8");
      const { data, content: markdown } = parseFrontmatter(content);

      return {
        slug: file.replace(/\.(mdx|md)$/, ""),
        title: data.title || file.replace(/\.(mdx|md)$/, ""),
        date: data.date || "",
        excerpt: data.excerpt || extractExcerpt(markdown),
        content: markdown,
        image: data.image || undefined,
        author: data.author || undefined,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    // Try .mdx first, then .md
    let filePath = path.join(POSTS_DIR, `${slug}.mdx`);
    if (!fs.existsSync(filePath)) {
      filePath = path.join(POSTS_DIR, `${slug}.md`);
    }

    const content = fs.readFileSync(filePath, "utf-8");
    const { data, content: markdown } = parseFrontmatter(content);

    return {
      slug,
      title: data.title || slug,
      date: data.date || "",
      excerpt: data.excerpt || extractExcerpt(markdown),
      content: markdown,
      image: data.image || undefined,
      author: data.author || undefined,
    };
  } catch {
    return null;
  }
}

function parseFrontmatter(content: string) {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);

  if (!match) {
    return { data: {}, content };
  }

  const frontmatter = match[1];
  const body = match[2];

  const data: Record<string, string> = {};
  frontmatter.split("\n").forEach((line) => {
    const colonIndex = line.indexOf(":");
    if (colonIndex > 0) {
      const key = line.slice(0, colonIndex).trim();
      const value = line.slice(colonIndex + 1).trim().replace(/^"|"$/g, "");
      data[key] = value;
    }
  });

  return { data, content: body };
}

function extractExcerpt(content: string, maxLength = 150): string {
  // Remove markdown syntax for plain text excerpt
  const plainText = content
    .replace(/^#{1,6}\s+/gm, "") // Remove headers
    .replace(/\*\*/g, "") // Remove bold
    .replace(/\*/g, "") // Remove italic
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") // Remove links, keep text
    .replace(/\n+/g, " ") // Replace newlines with spaces
    .trim();

  return plainText.slice(0, maxLength) + (plainText.length > maxLength ? "..." : "");
}
