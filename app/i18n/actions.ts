"use server";

import { cookies } from "next/headers";

export async function setLanguage(formData: FormData) {
  const locale = formData.get("locale");
  if (locale !== "tr" && locale !== "en") return;

  const store = await cookies();
  store.set("afa-locale", locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  });
}
