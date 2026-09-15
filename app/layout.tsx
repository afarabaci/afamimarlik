import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "AFA Mimarlık",
  description: "AFA Mimarlık",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body>
        <header>
          <Link href="/" className="logo">AFA MİMARLIK</Link>
          <nav>
            <Link href="/">Ana Sayfa</Link>
            <Link href="/hakkimizda">Hakkımızda</Link>
            <Link href="/iletisim">İletişim</Link>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}