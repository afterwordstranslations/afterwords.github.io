import { getPostBySlug, getAllPosts, formatDate, estimateReadingTime, AUTHORS, DEFAULT_AUTHOR } from "~/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "~/components/MdxComponents";
import { BlogCard } from "~/components/BlogCard";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Header } from "~/components/Header";
import { Footer } from "~/components/Footer";
import { JsonLd, blogPostingJsonLd, breadcrumbJsonLd } from "~/lib/seo";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://afterwords.gr";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  const postUrl = `${BASE_URL}/blog/${slug}`;
  const postImage = post.image || "/bg.jpg";

  return {
    title: `${post.title} | Afterwords Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: postUrl,
      type: "article",
      publishedTime: post.date,
      authors: [AUTHORS[post.author || DEFAULT_AUTHOR]?.name || "Afterwords Team"],
      images: [{ url: postImage, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [postImage],
    },
    alternates: {
      canonical: postUrl,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const author = AUTHORS[post.author || DEFAULT_AUTHOR];
  const readingTime = estimateReadingTime(post.content);
  const heroImage = post.image || "/bg.jpg";

  // Get related posts (other posts, max 3)
  const allPosts = await getAllPosts();
  const relatedPosts = allPosts
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  return (
    <>
    <JsonLd
      data={blogPostingJsonLd({
        title: post.title,
        excerpt: post.excerpt,
        date: post.date,
        slug,
        image: post.image,
        authorName: author?.name,
      })}
    />
    <JsonLd
      data={breadcrumbJsonLd([
        { name: "Home", url: BASE_URL },
        { name: "Blog", url: `${BASE_URL}/blog` },
        { name: post.title, url: `${BASE_URL}/blog/${slug}` },
      ])}
    />
    <div className="w-full bg-base-100 text-base-content">
      {/* Hero Section */}
      <section className="relative w-full bg-slate-900">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={heroImage}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            fill
            sizes="100vw"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

        <div className="relative z-10 px-8 lg:px-24">
          <Header />

          <div className="max-w-3xl pb-16 pt-4 md:pb-20 md:pt-8">
            {/* Back to blog pill */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-white/20 hover:bg-white/25 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5" />
                <path d="m12 19-7-7 7-7" />
              </svg>
              Read our blog
            </Link>

            {/* Date & reading time */}
            <div className="flex items-center gap-3 text-sm text-white/60 mb-4">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span className="w-1 h-1 rounded-full bg-white/40" />
              <span>{readingTime} min read</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.1] font-bold text-white mb-8">
              {post.title}
            </h1>

            {/* Author */}
            {author && (
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white/30">
                  <Image
                    src={author.avatar}
                    alt={author.name}
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{author.name}</p>
                  <p className="text-white/50 text-xs">{author.role}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Blog Post Content */}
      <article className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto py-12 md:py-16">
          <div className="prose prose-lg max-w-none">
            <MDXRemote source={post.content} components={mdxComponents} />
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="border-t border-base-300">
          <div className="container mx-auto px-4 md:px-8 py-12 md:py-16">
            <h2 className="text-2xl font-bold mb-8 text-base-content/80">Keep reading</h2>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <BlogCard
                  key={relatedPost.slug}
                  title={relatedPost.title}
                  excerpt={relatedPost.excerpt}
                  date={relatedPost.date}
                  slug={relatedPost.slug}
                  image={relatedPost.image}
                  content={relatedPost.content}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
    </>
  );
}
