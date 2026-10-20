import Image from "next/image";
import { getMessages } from "../i18n/server";

export async function generateMetadata() {
  const t = await getMessages();
  return { title: t.nav.about };
}

export default async function Hakkimizda(){
  const t = await getMessages();
  return(
    <section className="page-section about-page">
      <div className="page-heading">
        <h1>{t.nav.about}</h1>
      </div>

      <div className="about-layout">
        <div className="about-copy">
          <div className="content-block">
            {t.about.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
          </div>
        </div>

        <div className="about-visual">
          <div className="about-image-frame"/>
          <Image
            src="/about.png"
            alt="Afa Mimarlık"
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
