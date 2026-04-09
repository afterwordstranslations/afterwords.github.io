import { chromium } from "@playwright/test";
import * as fs from "fs";
import * as path from "path";

const BASE_URL = process.env.BASE_URL || "http://localhost:3001";
const OUTPUT_DIR = path.join(process.cwd(), "screenshots", "design-qa");

const viewports = [
  { name: "desktop", width: 1280, height: 720 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "mobile", width: 375, height: 812 },
];

const pages = [
  { name: "home", path: "/" },
  { name: "certified-translations", path: "/certified-translations" },
  { name: "interpreting", path: "/interpreting" },
  { name: "audiovisual-translation", path: "/audiovisual-translation" },
  { name: "academic-translation", path: "/academic-translation" },
  { name: "pharmaceutical-translation", path: "/pharmaceutical-translation" },
  { name: "maritime-translation", path: "/maritime-translation" },
  { name: "portfolio", path: "/portfolio" },
  { name: "blog", path: "/blog" },
  { name: "blog-apostille-guide", path: "/blog/apostille-guide" },
  { name: "blog-choosing-translation-agency", path: "/blog/choosing-translation-agency" },
  { name: "blog-importance-of-certified-translations", path: "/blog/importance-of-certified-translations" },
  { name: "blog-localization-vs-translation", path: "/blog/localization-vs-translation" },
  { name: "blog-official-translations-guide", path: "/blog/official-translations-guide" },
];

async function main() {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const browser = await chromium.launch();

  for (const vp of viewports) {
    const vpDir = path.join(OUTPUT_DIR, vp.name);
    fs.mkdirSync(vpDir, { recursive: true });

    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
    });

    for (const pg of pages) {
      const page = await context.newPage();
      console.log(`📸 ${vp.name} → ${pg.name}`);
      await page.goto(`${BASE_URL}${pg.path}`, { waitUntil: "domcontentloaded", timeout: 60000 });
      await page.waitForTimeout(500);
      // Scroll to bottom in steps to trigger all scroll-based animations
      await page.evaluate(async () => {
        const step = window.innerHeight;
        const maxScroll = document.body.scrollHeight;
        for (let y = 0; y <= maxScroll; y += step) {
          window.scrollTo(0, y);
          await new Promise((r) => setTimeout(r, 200));
        }
        // Ensure we hit the very bottom
        window.scrollTo(0, maxScroll);
        await new Promise((r) => setTimeout(r, 300));
        // Scroll back to top for a clean full-page screenshot
        window.scrollTo(0, 0);
        await new Promise((r) => setTimeout(r, 200));
      });
      await page.waitForTimeout(500);
      await page.screenshot({
        path: path.join(vpDir, `${pg.name}.png`),
        fullPage: true,
      });
      await page.close();
    }

    await context.close();
  }

  await browser.close();
  console.log(`\n✅ Screenshots saved to ${OUTPUT_DIR}`);
}

main().catch(console.error);
