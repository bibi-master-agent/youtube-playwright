import { http } from '@google-cloud/functions-framework';
import { chromium } from 'playwright';

http('helloHttp', async (req, res) => {
  res.set('Content-Type', 'application/json');

  const uploadId =
    req.body?.uploadId ||
    req.query?.uploadId ||
    null;

  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox']
  });

  await browser.close();

  res.status(200).send({
    ok: true,
    message: 'Playwright browser opened successfully',
    uploadId
  });
});
