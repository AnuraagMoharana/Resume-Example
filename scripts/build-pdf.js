const puppeteer = require("puppeteer");
const path = require("path");

async function buildPdf() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
  });

  try {
    const page = await browser.newPage();

    const resumePath = path.resolve(
      __dirname,
      "../resume/resume.html"
    );

    await page.goto(`file://${resumePath}`, {
      waitUntil: "networkidle0"
    });

    await page.pdf({
      path: path.resolve(__dirname, "../resume.pdf"),
      format: "A4",
      printBackground: true,
      preferCSSPageSize: true,
      margin: {
        top: "12mm",
        right: "12mm",
        bottom: "12mm",
        left: "12mm"
      }
    });

    console.log("ATS resume PDF generated successfully.");
  } finally {
    await browser.close();
  }
}

buildPdf().catch((error) => {
  console.error(error);
  process.exit(1);
});
