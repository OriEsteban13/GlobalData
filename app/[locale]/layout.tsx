import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import "../globals.css";
import { locales, type Locale } from "@/i18n";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: "meta" });
  const url = `https://www.globaldata468.com/${params.locale}`;

  return {
    title: t("title"),
    description: t("description"),
    metadataBase: new URL("https://www.globaldata468.com"),
    alternates: {
      canonical: url,
      languages: {
        ca: "https://www.globaldata468.com/ca",
        es: "https://www.globaldata468.com/es",
        en: "https://www.globaldata468.com/en",
        fr: "https://www.globaldata468.com/fr",
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url,
      siteName: "Global Data 468",
      locale: params.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(params.locale as Locale)) notFound();

  const messages = await getMessages();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Global Data 468",
    url: "https://www.globaldata468.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Andorra la Vella",
      addressCountry: "AD",
    },
    sameAs: [],
  };

  return (
    <html lang={params.locale} className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} bg-bg-primary font-body text-text-primary antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
