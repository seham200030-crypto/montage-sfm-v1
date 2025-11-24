const express = require("express");
const path = require("path");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// مسار ملفات React بعد build
const clientBuildPath = path.join(__dirname, "..", "client", "dist");
app.use(express.static(clientBuildPath));

// صفحة فحص السيرفر
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// مثال API (لاحقاً نحط فيه ذكاء اصطناعي)
app.post("/api/generate-script", async (req, res) => {
  // TODO: هنا نربط OpenAI + ElevenLabs
  res.json({ script: "هنا يرجع السيناريو من الذكاء الاصطناعي" });
});

// لأي مسار ثاني يرجّع صفحة React
app.get("*", (req, res) => {
  res.sendFile(path.join(clientBuildPath, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
