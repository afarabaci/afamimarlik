import type { Metadata } from "next";
import Link from "next/link";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const headingFont = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-heading" });
const bodyFont = Manrope({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-body" });

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
              <img src="/afa-logo.svg" alt="AFA" className="header-logo" />
              <span className="header-logo-text">MİMARLIK</span>
            </Link>
            <nav className="site-nav">
              <Link href="/">Anasayfa</Link>
              <Link href="/hakkimizda">Hakkımızda</Link>
              <Link href="/projeler">Projeler</Link>
              <Link href="/iletisim">İletişim</Link>
            </nav>
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}