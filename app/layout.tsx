import type { Metadata } from "next";
import Link from "next/link";
import localFont from "next/font/local";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import PageNavigation from "./components/PageNavigation";
import SiteIntro from "./components/SiteIntro";

const headingFont = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-heading" });
const bodyFont = localFont({ src: "./fonts/FogtwoNo5.otf", variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.afamimarlik.com"),

  title: {
    default: "Afa Mimarlık",
    template: "%s | Afa Mimarlık"
  },

  description:
    "Afa Mimarlık; mimari tasarım, iç mekan, uygulama ve proje geliştirme alanlarında çağdaş ve işlevsel çözümler sunan mimarlık ofisidir.",

  applicationName: "Afa Mimarlık",

  openGraph: {
    title: "Afa Mimarlık",
    description:
      "Mimari tasarım, iç mekan, uygulama ve proje geliştirme.",
    url: "https://www.afamimarlik.com",
    siteName: "Afa Mimarlık",
    images: [
      {
        url: "https://www.afamimarlik.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Afa Mimarlık"
      }
    ],
    locale: "tr_TR",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "AFA Mimarlık",
            alternateName: "AFA",
            url: "https://www.afamimarlik.com/"
          })
        }}
      />
      <body className={`${headingFont.variable} ${bodyFont.variable}`}>
        <SiteIntro />
        <div className="site-shell">
          <header className="site-header">
            <Link href="/" className="brand">
              <img src="/afa-logo.svg" alt="Afa Mimarlık" className="header-logo" />
              <span className="header-logo-text">MİMARLIK</span>
            </Link>

            <div className="header-right">
              <nav className="site-nav">
                <Link href="/">Anasayfa</Link>
                <Link href="/hakkimizda">Hakkımızda</Link>
                <Link href="/projeler">Projeler</Link>
                <Link href="/iletisim">İletişim</Link>
              </nav>

              <div className="header-divider" />
              <span className="lang-switch">TR/EN</span>
            </div>
          </header>

          <div className="global-eyebrow">PROJE · TASARIM · UYGULAMA</div>

          <main>{children}</main>

          <PageNavigation />
          <div className="site-copyright">
            Afa Mimarlık © 2026 | Tüm hakları saklıdır.
          </div>
        </div>
      </body>
    </html>
  );
}