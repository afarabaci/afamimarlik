import Image from "next/image";

export default function Home(){
  return(
    <section className="home-hero">
      <div className="hero-copy about-page">
        <div className="hero-line"/>
        <p>Mimari tasarım, iç mekan ve proje geliştirme alanlarında sade, çağdaş ve güçlü çözümler üreten bir mimarlık ofisi.</p>
      </div>

      <div className="hero-art">
        <div className="hero-backplate"/>
        <Image src="/afa-hero-v2.jpg" alt="AFA Mimarlık" width={538} height={692} priority className="hero-image"/>
      </div>
    </section>
  );
}