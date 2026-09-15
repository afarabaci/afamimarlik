import Link from "next/link";

export default function Home() {
  return (
    <section className="hero">
      <div className="eyebrow">MİMARLIK · TASARIM · MEKAN</div>
      <div className="hero-grid">
        <div className="hero-content">
          <h1>AFA Mimarlık</h1>
          <p>
            Mimari tasarım, iç mekan ve proje geliştirme alanlarında sade, çağdaş
            ve güçlü çözümler üreten bir mimarlık ofisi.
          </p>
          <div className="hero-actions">
            <Link href="/hakkimizda" className="button-primary">Hakkımızda</Link>
            <Link href="/iletisim" className="button-secondary">İletişim</Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-card">
            <div className="hero-card-inner">
              <span className="visual-label">PORTFOLYO</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}