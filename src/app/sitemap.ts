import type { MetadataRoute } from "next";
import { getAllPosts } from "~/lib/blog";
import { routing } from "~/i18n/routing";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://afterwords.gr";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts();
  const { locales } = routing;

  const staticPaths = [
    "",
    "/certified-translations",
    "/interpreting",
    "/audiovisual-translation",
    "/academic-translation",
    "/pharmaceutical-translation",
    "/maritime-translation",
    "/get-a-quote",
    "/portfolio",
    "/blog",
  ];

  const staticPages: MetadataRoute.Sitemap = staticPaths.flatMap((path) =>
    locales.map((locale) => ({
      url: `${BASE_URL}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency:
        path === "" || path === "/blog"
          ? ("weekly" as const)
          : ("monthly" as const),
      priority: path === "" ? 1 : path === "/blog" ? 0.8 : 0.9,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${BASE_URL}/${l}${path}`])
        ),
      },
    }))
  );

  const blogPages: MetadataRoute.Sitemap = posts.flatMap((post) =>
    locales.map((locale) => ({
      url: `${BASE_URL}/${locale}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${BASE_URL}/${l}/blog/${post.slug}`])
        ),
      },
    }))
  );

  return [...staticPages, ...blogPages];
}
