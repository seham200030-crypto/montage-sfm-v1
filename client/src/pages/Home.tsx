export default function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome to Smart Ads Studio</h1>
      <p>اختاري واحدة من الأدوات بالأسفل:</p>

      <ul>
        <li><a href="/studio">🎬 صانع المسلسلات الذكي</a></li>
        <li><a href="/avatar">🧑‍🚀 توليد أفاتار يتكلم</a></li>
        <li><a href="/voice">🎤 تحويل نص إلى صوت</a></li>
      </ul>
    </div>
  );
}
