import type { Metadata } from "next";
import Link from "next/link";
import localFont from "next/font/local";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import PageNavigation from "./components/PageNavigation";

const headingFont = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-heading" });
const bodyFont = localFont({ src: "./fonts/FogtwoNo5.otf", variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  title: "AFA Mimarlık",
  description: "AFA Mimarlık resmi web sitesi",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className={`${headingFont.variable} ${bodyFont.variable}`}>
        <div className="site-shell">
          <header className="site-header">
            <Link href="/" className="brand">
              <img src="/afa-logo.svg" alt="AFA Mimarlık" className="header-logo" />
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
            AFA Mimarlık © 2026 | Tüm hakları saklıdır.
          </div>
        </div>
      </body>
    </html>
  );
}