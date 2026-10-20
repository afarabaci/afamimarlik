"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";

const links = [
  { href: "/", label: "Anasayfa" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/projeler", label: "Projeler" },
  { href: "/iletisim", label: "İletişim" },
];

export default function HeaderNavigation() {
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
        {open ? "Kapat" : "Menü"}
      </button>
      <nav id="site-navigation" className={`site-nav${open ? " is-open" : ""}`} aria-label="Ana menü">
        {links.map(({ href, label }) => (
          <Link key={href} href={href}
            aria-current={(pathname === href || (href !== "/" && pathname.startsWith(`${href}/`))) ? "page" : undefined}
            onClick={() => setOpen(false)}>
            {label}
          </Link>
        ))}
      </nav>
      <div className="header-divider" />
      <span className="lang-switch">TR/EN</span>
    </div>
  );
}
