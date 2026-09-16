import Image from "next/image";

export default function Hakkimizda(){
  return(
    <section className="page-section about-page">
      <div className="page-heading">
        <h1>Hakkımızda</h1>
      </div>

      <div className="about-layout">
        <div className="about-copy">
          <div className="content-block">
            <p>
              AFA Mimarlık; mimari tasarım, uygulama, iç mekan ve proje geliştirme
              süreçlerinde işlevsel ve estetik çözümler üretmek amacıyla Mimar Ahmet Faruk Arabacı tarafından 2026 yılında kuruldu.
            </p>

            <p>
              Ahmet Faruk Arabacı, 2020 yılında Karabük Üniversitesi Safranbolu Mimarlık
              Fakültesinden, 2021 yılında Atatürk Üniversitesi İş Sağlığı Ve Güvenliği Bölümünden
              mezun oldu. Halen Kütahya Dumlupınar Üniversitesi Arkeoloji Bölümünde yüksek lisans
              eğitimine devam etmektedir. Çeşitli firmalarda mimari proje yürütücülüğü yaptı.
            </p>

            <p>AFA Mimarlık firmasında çalışmalarına devam etmektedir.</p>
          </div>
        </div>

        <div className="about-visual">
          <div className="about-image-frame"/>
          <Image
            src="/about.png"
            alt="AFA Mimarlık"
            width={310}
            height={390}
            className="about-image"
            priority
          />
        </div>
      </div>
    </section>
  );
}