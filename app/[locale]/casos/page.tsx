import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import CasesGrid from "@/components/sections/CasesGrid";
import FinalCta from "@/components/sections/FinalCta";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: "casesPage" });
  return { title: `${t("title")} — Global Data 468`, description: t("subtitle") };
}

export default async function CasesPage({
  params,
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale: params.locale, namespace: "casesPage" });

  return (
    <>
      <PageHero title={t("title")} subtitle={t("subtitle")} />
      <CasesGrid />
      <FinalCta />
    </>
  );
}
