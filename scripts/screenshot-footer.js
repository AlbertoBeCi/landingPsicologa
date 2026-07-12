const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const url = process.argv[2] || 'http://localhost:8080/index.html';
  const outDir = path.join(__dirname, '..', 'screenshots');
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.locator('.footer').screenshot({ path: path.join(outDir, 'footer-desktop.png') });
  await browser.close();
})();
