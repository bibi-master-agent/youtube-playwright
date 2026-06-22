import { http } from '@google-cloud/functions-framework';

http('helloHttp', async (req, res) => {
  res.set('Content-Type', 'application/json');

  const uploadId =
    req.body?.uploadId ||
    req.query?.uploadId ||
    null;

  res.status(200).send({
    ok: true,
    message: 'Playwright service ready',
    uploadId
  });
});
