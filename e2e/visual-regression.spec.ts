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

/**
 * Disable CSS and JS animations for deterministic screenshots.
 */
async function disableAnimations(page: import("@playwright/test").Page) {
  await page.addStyleTag({
    content: `
      *, *::before, *::after {
        animation-duration: 0s !important;
        animation-delay: 0s !important;
        transition-duration: 0s !important;
        transition-delay: 0s !important;
      }
    `,
  });
  // Force all framer-motion elements to their final state
  await page.evaluate(() => {
    document.querySelectorAll("[style]").forEach((el) => {
      const htmlEl = el as HTMLElement;
      htmlEl.style.opacity = htmlEl.style.opacity || "";
      htmlEl.style.transform = htmlEl.style.transform || "";
    });
  });
}

/**
 * Scroll through the entire page to trigger scroll-based animations,
 * then scroll back to top for a clean full-page screenshot.
 */
async function triggerAnimations(page: import("@playwright/test").Page) {
  await page.evaluate(async () => {
    const step = window.innerHeight;
    const maxScroll = document.body.scrollHeight;
    for (let y = 0; y <= maxScroll; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 200));
    }
    window.scrollTo(0, maxScroll);
    await new Promise((r) => setTimeout(r, 300));
    window.scrollTo(0, 0);
    await new Promise((r) => setTimeout(r, 200));
  });
}

for (const page of allPages) {
  test(`${page.name} matches screenshot`, async ({ page: browserPage }) => {
    await browserPage.goto(page.path, { waitUntil: "domcontentloaded", timeout: 60000 });
    await browserPage.waitForTimeout(500);
    await triggerAnimations(browserPage);
    await disableAnimations(browserPage);
    await browserPage.waitForTimeout(1000);
    await expect(browserPage).toHaveScreenshot(`${page.name}.png`, {
      fullPage: true,
    });
  });
}
