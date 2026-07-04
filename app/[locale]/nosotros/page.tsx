import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import Timeline from "@/components/sections/Timeline";
import Team from "@/components/sections/Team";
import Values from "@/components/sections/Values";
import FinalCta from "@/components/sections/FinalCta";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: "aboutPage" });
  return { title: `${t("title")} — Global Data 468`, description: t("subtitle") };
}

export default async function AboutPage({
  params,
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale: params.locale, namespace: "aboutPage" });

  return (
    <>
      <PageHero title={t("title")} subtitle={t("subtitle")} />
      <Timeline title={t("timeline.title")} />
      <Team title={t("team.title")} />
      <Values />
      <FinalCta />
    </>
  );
}
