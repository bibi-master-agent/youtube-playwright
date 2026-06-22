import { http } from '@google-cloud/functions-framework';
import { chromium } from 'playwright';

http('helloHttp', async (req, res) => {
  try {
    const browser = await chromium.launch({
      executablePath: '/ms-playwright/chromium-1187/chrome-linux/chrome',
      headless: true,
      args: ['--no-sandbox']
    });

    await browser.close();

    res.status(200).send({
      ok: true,
      message: 'Playwright browser opened successfully'
    });

  } catch (error) {
    console.error(error);

    res.status(500).send({
      ok: false,
      error: error.message
    });
  }
});
