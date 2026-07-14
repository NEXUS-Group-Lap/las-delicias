import { en } from "./en.ts";
import { es } from "./es.ts";
import type { Lang } from "./types.ts";

const dictionaries = { en, es };

export function getDictionary(lang: Lang) {
  return dictionaries[lang];
}

// Removes the configured base path (e.g. "/las-delicias") so locale
// detection and path-rewriting logic below can work in "site root" terms
// regardless of the subpath the site is deployed under.
function stripBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  if (base && (path === base || path.startsWith(`${base}/`))) {
    return path.slice(base.length) || "/";
  }
  return path;
}

export function getLangFromUrl(url: URL): Lang {
  return stripBase(url.pathname).startsWith("/es") ? "es" : "en";
}

// Strips a leading /es (and re-adds it) so nav links and the language
// toggle point at the equivalent page in the other locale. Accepts either
// a bare path ("/menu") or a full pathname that already includes the base
// (Astro.url.pathname), and always returns a path prefixed with the base.
export function getLocalizedPath(path: string, lang: Lang): string {
  const withoutBase = stripBase(path);
  const bare =
    withoutBase === "/es" || withoutBase.startsWith("/es/") ? withoutBase.slice(3) || "/" : withoutBase;
  const localized = lang === "es" ? `/es${bare === "/" ? "" : bare}` : bare;
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}${localized === "/" && !base ? "/" : localized}` || "/";
}
