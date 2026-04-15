import type { Metadata } from "next";
import { getAllPosts } from "~/lib/blog";
import { BlogCard, FeaturedBlogCard } from "~/components/BlogCard";
import { PageHero } from "~/components/PageHero";
import { Footer } from "~/components/Footer";
import { JsonLd, breadcrumbJsonLd } from "~/lib/seo";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://afterwords.gr";

export const metadata: Metadata = {
  title: "Blog - Translation Insights",
  description:
    "Insights on translation, localization, and language services. Tips on certified translations, choosing agencies, and understanding the translation industry.",
  openGraph: {
    title: "Blog - Translation Insights | Afterwords",
    description:
      "Where we unpack what gets lost — and found — in translation. Insights on certified translations, localization, and the language industry.",
    url: `${BASE_URL}/blog`,
    images: [{ url: "/bg.jpg", width: 1200, height: 630, alt: "Afterwords Blog" }],
  },
  alternates: {
    canonical: `${BASE_URL}/blog`,
  },
};

export default async function BlogPage() {
  const posts = await getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <>
    <JsonLd
      data={breadcrumbJsonLd([
        { name: "Home", url: BASE_URL },
        { name: "Blog", url: `${BASE_URL}/blog` },
      ])}
    />
    <div className="w-full bg-base-100 text-base-content">
      <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <PageHero
          badge="The Afterwords Blog"
          title="The stories behind the words"
          subtitle=""
          backgroundElement={<div />}
        />
        <div className="relative z-10 -mt-8 px-8 lg:px-24 pb-16">
          <p className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed">
            Where we unpack what gets lost — and found — in translation.
          </p>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="py-16 md:py-24">
        {posts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-xl text-base-content/60">No blog posts yet. Check back soon!</p>
          </div>
        ) : (
          <>
            {/* Featured Post */}
            {featured && (
              <section className="container mx-auto px-4 md:px-8 mb-20 md:mb-28">
                <FeaturedBlogCard
                  title={featured.title}
                  excerpt={featured.excerpt}
                  date={featured.date}
                  slug={featured.slug}
                  image={featured.image}
                  content={featured.content}
                />
              </section>
            )}

            {/* More Articles */}
            {rest.length > 0 && (
              <section className="container mx-auto px-4 md:px-8">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-warm-dark mb-4">Keep reading</p>
                <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-base-content mb-12">
                  More from the blog
                </h2>
                <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  {rest.map((post) => (
                    <BlogCard
                      key={post.slug}
                      title={post.title}
                      excerpt={post.excerpt}
                      date={post.date}
                      slug={post.slug}
                      image={post.image}
                      content={post.content}
                    />
                  ))}
                </div>
              </section>
            )}
          </>
        )}
      </div>

      <Footer />
    </div>
    </>
  );
}
