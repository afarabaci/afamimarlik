import { cookies } from "next/headers";
import { cache } from "react";
import { messages, resolveLocale } from "./messages";

export const getLocale = cache(async () => {
  const store = await cookies();
  return resolveLocale(store.get("afa-locale")?.value);
});

export async function getMessages() {
  return messages[await getLocale()];
}
