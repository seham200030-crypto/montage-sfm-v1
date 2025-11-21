import React from "react";
import { Link } from "react-router-dom";

export default function Thanks() {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        background:
          "radial-gradient(circle at top, #ffffff 0%, #1f2937 50%, #000000 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "white",
        padding: "20px",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: "700",
          marginBottom: "1rem",
          textShadow: "0 0 20px rgba(255,255,255,0.3)",
        }}
      >
        شكــرًا للمشــاهدة 💛🔥
      </h1>

      <p
        style={{
          fontSize: "1.2rem",
          opacity: 0.9,
          marginBottom: "2rem",
        }}
      >
        لا تنسون اللايك والاشتراك… شغّلكم يحمسّي أكمِّل 💜🎥
      </p>

      <div style={{ display: "flex", gap: "15px", flexWrap: "wrap", justifyContent: "center" }}>
        <a
          href="https://www.youtube.com/"
          target="_blank"
          rel="noreferrer"
          style={{
            padding: "12px 24px",
            borderRadius: "50px",
            background: "#facc15",
            color: "#000",
            fontWeight: "700",
            textDecoration: "none",
            boxShadow: "0 0 20px rgba(250,204,21,0.6)",
          }}
        >
          اشتركوا بالقناة 🎬🔥
        </a>

        <Link
          to="/"
          style={{
            padding: "12px 24px",
            borderRadius: "50px",
            border: "1px solid #fff",
            color: "#fff",
            textDecoration: "none",
            fontWeight: "500",
          }}
        >
          العودة للرئيسية ⬅️
        </Link>

        <Link
          to="/studio"
          style={{
            padding: "12px 24px",
            borderRadius: "50px",
            border: "1px solid #fff",
            color: "#fff",
            textDecoration: "none",
            fontWeight: "500",
          }}
        >
          الاستوديو 🎤
        </Link>

        <Link
          to="/avatar"
          style={{
            padding: "12px 24px",
            borderRadius: "50px",
            border: "1px solid #fff",
            color: "#fff",
            textDecoration: "none",
            fontWeight: "500",
          }}
        >
          صنع شخصيات 🤖
        </Link>

        <Link
          to="/voice"
          style={{
            padding: "12px 24px",
            borderRadius: "50px",
            border: "1px solid #fff",
            color: "#fff",
            textDecoration: "none",
            fontWeight: "500",
          }}
        >
          الذكاء الصوتي 🔊
        </Link>
      </div>

      <p style={{ marginTop: "3rem", opacity: 0.6, fontSize: "0.9rem" }}>
        SFM • Smart Ads & Montage ✨🚀
      </p>
    </div>
  );
}
