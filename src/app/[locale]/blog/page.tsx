import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { getAllPosts } from "~/lib/blog";
import { BlogCard, FeaturedBlogCard } from "~/components/BlogCard";
import { PageHero } from "~/components/PageHero";
import { Footer } from "~/components/Footer";
import { JsonLd, breadcrumbJsonLd } from "~/lib/seo";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://afterwords.gr";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Blog" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      url: `${BASE_URL}/${locale}/blog`,
      images: [{ url: "/bg.jpg", width: 1200, height: 630, alt: t("ogImageAlt") }],
    },
    alternates: {
      canonical: `${BASE_URL}/${locale}/blog`,
      languages: {
        en: `${BASE_URL}/en/blog`,
        el: `${BASE_URL}/el/blog`,
        "x-default": `${BASE_URL}/en/blog`,
      },
    },
  };
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Blog" });
  const tSEO = await getTranslations({ locale, namespace: "SEO" });

  const posts = await getAllPosts(locale);
  const [featured, ...rest] = posts;

  return (
    <>
    <JsonLd
      data={breadcrumbJsonLd([
        { name: tSEO("home"), url: `${BASE_URL}/${locale}` },
        { name: t("breadcrumbName"), url: `${BASE_URL}/${locale}/blog` },
      ])}
    />
    <div className="w-full bg-base-100 text-base-content">
      <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <PageHero
          badge={t("badge")}
          title={t("title")}
          subtitle=""
          backgroundElement={<div />}
        />
        <div className="relative z-10 -mt-8 px-8 lg:px-24 pb-16">
          <p className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed">
            {t("subtitle")}
          </p>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="py-16 md:py-24">
        {posts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-xl text-base-content/60">{t("noPosts")}</p>
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
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-warm-dark mb-4">{t("keepReading")}</p>
                <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-base-content mb-12">
                  {t("moreFromBlog")}
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
