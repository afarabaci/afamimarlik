"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import type { Locale, messages } from "../i18n/messages";

export default function HeaderNavigation({ locale, nav, languageLabel }: {
  locale: Locale;
  nav: typeof messages.tr.nav;
  languageLabel: string;
}) {
  const links = [
    { href: "/", label: nav.home },
    { href: "/hakkimizda", label: nav.about },
    { href: "/projeler", label: nav.projects },
    { href: "/iletisim", label: nav.contact },
  ];
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const toggle = useRef<HTMLButtonElement>(null);

  return (
    <div className="header-right" onKeyDown={(event) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        toggle.current?.focus();
      }
    }}>
      <button
        ref={toggle}
        type="button"
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="site-navigation"
        onClick={() => setOpen(!open)}
      >
        <span aria-hidden="true">{open ? "×" : "☰"}</span>
        {open ? nav.close : nav.menu}
      </button>
      <nav id="site-navigation" className={`site-nav${open ? " is-open" : ""}`} aria-label={nav.label}>
        {links.map(({ href, label }) => (
          <Link key={href} href={href}
            aria-current={(pathname === href || (href !== "/" && pathname.startsWith(`${href}/`))) ? "page" : undefined}
            onClick={() => setOpen(false)}>
            {label}
          </Link>
        ))}
      </nav>
      <div className="header-divider" />
      <LanguageSwitcher locale={locale} label={languageLabel} />
    </div>
  );
}
