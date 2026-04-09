import { test, expect } from "@playwright/test";

const staticPages = [
  { name: "home", path: "/" },
  { name: "certified-translations", path: "/certified-translations" },
  { name: "interpreting", path: "/interpreting" },
  { name: "audiovisual-translation", path: "/audiovisual-translation" },
  { name: "academic-translation", path: "/academic-translation" },
  { name: "pharmaceutical-translation", path: "/pharmaceutical-translation" },
  { name: "maritime-translation", path: "/maritime-translation" },
  { name: "portfolio", path: "/portfolio" },
  { name: "blog", path: "/blog" },
];

const blogPosts = [
  "apostille-guide",
  "choosing-translation-agency",
  "importance-of-certified-translations",
  "localization-vs-translation",
  "official-translations-guide",
];

const allPages = [
  ...staticPages,
  ...blogPosts.map((slug) => ({ name: `blog-${slug}`, path: `/blog/${slug}` })),
];

for (const page of allPages) {
  test(`${page.name} matches screenshot`, async ({ page: browserPage }) => {
    await browserPage.goto(page.path, { waitUntil: "networkidle" });
    // Wait for fonts and images to load
    await browserPage.waitForTimeout(500);
    await expect(browserPage).toHaveScreenshot(`${page.name}.png`, {
      fullPage: true,
    });
  });
}
