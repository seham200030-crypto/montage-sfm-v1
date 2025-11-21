import { useState } from "react";

function Studio() {
  const [prompt, setPrompt] = useState(
    "اكتب لي سيناريو إعلان كرتوني مدته 30 ثانية عن تطبيق إعلانات ذكية اسمه Montage SFM، بأسلوب ممتع ومختصر."
  );
  const [script, setScript] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGenerate = async () => {
    if (!prompt.trim()) return;

    setLoading(true);
    setError("");
    setScript("");

    try {
      const res = await fetch("/api/generate-script", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "حدث خطأ أثناء إنشاء السيناريو");
      }

      setScript(data.script || "");
    } catch (err: any) {
      setError(err.message || "خطأ غير معروف");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "24px", maxWidth: 900, margin: "0 auto" }}>
      <h1 style={{ marginBottom: 16 }}>🎬 استديو الإعلانات الذكي</h1>
      <p style={{ marginBottom: 16 }}>
        اكتبي وصف بسيط للإعلان اللي تبينه، والذكاء الاصطناعي راح يكتب لك
        سيناريو كامل للمقطع الكرتوني.
      </p>

      <label style={{ display: "block", marginBottom: 8 }}>
        نص الطلب (Prompt):
      </label>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        rows={5}
        style={{
          width: "100%",
          padding: 12,
          borderRadius: 8,
          border: "1px solid #ccc",
          marginBottom: 12,
        }}
      />

      <button
        onClick={handleGenerate}
        disabled={loading}
        style={{
          padding: "10px 20px",
          borderRadius: 999,
          border: "none",
          cursor: "pointer",
          backgroundColor: "#7c3aed",
          color: "white",
          fontSize: 16,
          marginBottom: 16,
        }}
      >
        {loading ? "جاري إنشاء السيناريو..." : "✨ أنشئ سيناريو الإعلان"}
      </button>

      {error && (
        <p style={{ color: "red", marginTop: 8 }}>❌ {error}</p>
      )}

      {script && (
        <div
          style={{
            marginTop: 24,
            padding: 16,
            borderRadius: 12,
            backgroundColor: "#0f172a",
            color: "white",
            whiteSpace: "pre-wrap",
            lineHeight: 1.7,
          }}
        >
          <h2 style={{ marginTop: 0, marginBottom: 12 }}>📜 السيناريو الناتج:</h2>
          {script}
        </div>
      )}
    </div>
  );
}

export default Studio;
