import Image from "next/image";
import { getMessages } from "./i18n/server";

export default async function Home(){
  const t = await getMessages();
  return(
    <section className="home-hero">
      <div className="hero-copy about-page">
        <div className="hero-line"/>
        <p>{t.home}</p>
      </div>

      <div className="hero-art">
        <div className="hero-backplate"/>
        <Image src="/afa-hero-v2.jpg" alt="Afa Mimarlık" width={538} height={692} priority className="hero-image"/>
      </div>
    </section>
  );
}
