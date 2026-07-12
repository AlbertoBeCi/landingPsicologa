const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const url = process.argv[2] || 'http://localhost:8080/index.html';
  const outDir = path.join(__dirname, '..', 'screenshots');
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.click('#navToggle');
  await page.waitForTimeout(300);
  await page.screenshot({ path: path.join(outDir, 'mobile-menu-open.png') });

  const errors = [];
  page.on('console', (msg) => { if (msg.type() === 'error') errors.push(msg.text()); });

  await browser.close();
  console.log('Menu screenshot saved. Console errors:', errors);
})();
