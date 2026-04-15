import fs from "fs";
import path from "path";

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

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

export function formatDate(dateStr: string, locale: string = "en"): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString(locale === "el" ? "el-GR" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function estimateReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

function getPostsDir(locale: string): string {
  if (locale === "en") return BLOG_DIR;
  const localeDir = path.join(BLOG_DIR, locale);
  if (fs.existsSync(localeDir)) return localeDir;
  return BLOG_DIR;
}

export async function getAllPosts(locale: string = "en"): Promise<BlogPost[]> {
  const postsDir = getPostsDir(locale);
  const files = fs.readdirSync(postsDir);
  const posts = files
    .filter((file) => (file.endsWith(".mdx") || file.endsWith(".md")) && !fs.statSync(path.join(postsDir, file)).isDirectory())
    .map((file) => {
      const filePath = path.join(postsDir, file);
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

export async function getPostBySlug(slug: string, locale: string = "en"): Promise<BlogPost | null> {
  try {
    const postsDir = getPostsDir(locale);
    let filePath = path.join(postsDir, `${slug}.mdx`);
    if (!fs.existsSync(filePath)) {
      filePath = path.join(postsDir, `${slug}.md`);
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
  const plainText = content
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/\*\*/g, "")
    .replace(/\*/g, "")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\n+/g, " ")
    .trim();

  return plainText.slice(0, maxLength) + (plainText.length > maxLength ? "..." : "");
}
