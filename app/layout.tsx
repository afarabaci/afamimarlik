import type { Metadata } from "next";
import Link from "next/link";
import localFont from "next/font/local";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import PageNavigation from "./components/PageNavigation";
import SiteIntro from "./components/SiteIntro";
import HeaderNavigation from "./components/HeaderNavigation";
import { getLocale, getMessages } from "./i18n/server";

const headingFont = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-heading" });
const bodyFont = localFont({ src: "./fonts/FogtwoNo5.otf", variable: "--font-body", display: "swap" });

export async function generateMetadata(): Promise<Metadata> {
  const t = await getMessages();
  return {
    metadataBase: new URL("https://www.afamimarlik.com"),

    title: {
      default: `${t.nav.home} | Afa Mimarlık`,
      template: "%s | Afa Mimarlık"
    },

    description:
      t.metadata.description,

    applicationName: "Afa Mimarlık",

    openGraph: {
      title: "Afa Mimarlık",
      description:
        t.metadata.socialDescription,
      url: "https://www.afamimarlik.com",
      siteName: "Afa Mimarlık",
      images: [
        {
          url: "https://www.afamimarlik.com/og-image.png",
          width: 1200,
          height: 630,
          alt: "Afa Mimarlık"
        }
      ],
      locale: t.metadata.locale,
      type: "website"
    }
  };
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale();
  const t = await getMessages();
  return (
    <html lang={locale}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "AFA Mimarlık",
            alternateName: "AFA",
            inLanguage: locale,
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

            <HeaderNavigation locale={locale} nav={t.nav} languageLabel={t.language} />
          </header>

          <div className="global-eyebrow">{t.eyebrow}</div>

          <main>{children}</main>

          <PageNavigation previousLabel={t.previous} nextLabel={t.next} />
          <div className="site-copyright">
            Afa Mimarlık © 2026 | {t.copyright}
          </div>
        </div>
      </body>
    </html>
  );
}
