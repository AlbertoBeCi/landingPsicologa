const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const url = process.argv[2] || 'http://localhost:8080/index.html';
  const outDir = path.join(__dirname, '..', 'screenshots');
  const browser = await chromium.launch();

  const desktop = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await desktop.goto(url, { waitUntil: 'networkidle' });
  await desktop.screenshot({ path: path.join(outDir, 'desktop.png'), fullPage: true });

  const mobile = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await mobile.goto(url, { waitUntil: 'networkidle' });
  await mobile.screenshot({ path: path.join(outDir, 'mobile.png'), fullPage: true });

  await browser.close();
  console.log('Screenshots saved to', outDir);
})();
