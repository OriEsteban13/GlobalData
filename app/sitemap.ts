import type { MetadataRoute } from "next";
import { locales } from "@/i18n";

const PATHS = ["", "/servicios", "/nosotros", "/casos", "/contacto"];
const BASE_URL = "https://www.globaldata468.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    PATHS.map((path) => ({
      url: `${BASE_URL}/${locale}${path}`,
      lastModified: new Date(),
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${BASE_URL}/${l}${path}`])
        ),
      },
    }))
  );
}
