// Renderar OG-bilder (1200 × 630 PNG) från mall.html.
// Användning: node rendera.js <ikon> "<Namn>" <utfil.png>
// Kräver Playwright (npm i playwright).
const path = require("path");
const { chromium } = require("playwright");

(async () => {
  const [ikon = "mall", namn = "Ledfamiljens namn", ut = "mall.png"] = process.argv.slice(2);
  const url = "file://" + path.join(__dirname, "mall.html") +
    "?ikon=" + encodeURIComponent(ikon) + "&namn=" + encodeURIComponent(namn);
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
  await page.goto(url);
  await page.waitForSelector("body[data-klar]");
  await page.screenshot({ path: path.resolve(ut) });
  await browser.close();
  console.log("Klar:", ut);
})();
