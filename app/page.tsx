import Image from "next/image";

export default function Home() {
  return (
    <section className="home-hero">
      <div className="hero-copy">
        <div className="hero-main-copy">
          <h1>AFA Mimarlık</h1>
          <div className="hero-line" />
          <p>
            Mimari tasarım, iç mekan ve proje geliştirme
            alanlarında sade, çağdaş ve güçlü çözümler
            üreten bir mimarlık ofisi.
          </p>
        </div>
      </div>

      <div className="hero-art">
        <div className="hero-backplate" />

        <Image
          src="/afa-hero.jpg"
          alt="AFA Mimarlık"
          width={552}
          height={718}
          priority
          className="hero-image"
        />

        <div className="hero-circle">
          <span>YAŞAM<br/>ALANLARI</span>
          <span>DAHA İYİ<br/>BİR YARIN</span>
          <i />
        </div>

        <div className="hero-note">
          MEKANI<br/>
          DAHA İYİ<br/>
          BİR YAŞAM İÇİN<br/>
          TASARLIYORUZ.
        </div>
      </div>

      <div className="home-copyright">Afamimarlık © 2026</div>
    </section>
  );
}