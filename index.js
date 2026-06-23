import express from "express";
import { chromium } from "playwright";

const app = express();
app.use(express.json());

app.get("/", async (req, res) => {
  try {
    const browser = await chromium.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"]
    });

    await browser.close();

    res.status(200).json({
      ok: true,
      message: "Playwright works in Cloud Run"
    });
  } catch (error) {
    console.error("PLAYWRIGHT ERROR:", error);
    res.status(500).json({
      ok: false,
      error: error.message
    });
  }
});

const port = process.env.PORT || 8080;
app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
});
