"use client";

import { useFormStatus } from "react-dom";
import { setLanguage } from "../i18n/actions";
import type { Locale } from "../i18n/messages";

function LanguageButtons({ locale }: { locale: Locale }) {
  const { pending } = useFormStatus();
  return (
    <>
      <button type="submit" name="locale" value="tr" lang="tr" aria-label="Türkçe" aria-pressed={locale === "tr"} disabled={pending || locale === "tr"}>TR</button>
      <span aria-hidden="true">/</span>
      <button type="submit" name="locale" value="en" lang="en" aria-label="English" aria-pressed={locale === "en"} disabled={pending || locale === "en"}>EN</button>
    </>
  );
}

export default function LanguageSwitcher({ locale, label }: { locale: Locale; label: string }) {
  return (
    <form action={setLanguage} className="lang-switch" aria-label={label}>
      <LanguageButtons locale={locale} />
    </form>
  );
}
