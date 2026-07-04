import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { Check } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import FinalCta from "@/components/sections/FinalCta";
import AnalyticsVisual from "@/components/visuals/AnalyticsVisual";
import ExtractionVisual from "@/components/visuals/ExtractionVisual";
import SponsorshipVisual from "@/components/visuals/SponsorshipVisual";
import FormationVisual from "@/components/visuals/FormationVisual";
import MarketVisual from "@/components/visuals/MarketVisual";
import StrategyVisual from "@/components/visuals/StrategyVisual";

const VISUALS = {
  analytics: AnalyticsVisual,
  extraction: ExtractionVisual,
  sponsorship: SponsorshipVisual,
  formation: FormationVisual,
  market: MarketVisual,
  strategy: StrategyVisual,
} as const;

const SERVICE_KEYS = ["analytics", "extraction", "sponsorship", "formation", "market", "strategy"] as const;

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: "servicesPage" });
  return { title: `${t("title")} — Global Data 468`, description: t("subtitle") };
}

export default async function ServicesPage({
  params,
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale: params.locale, namespace: "servicesPage" });

  return (
    <>
      <PageHero title={t("title")} subtitle={t("subtitle")} />

      <section className="bg-bg-primary py-20">
        <div className="container flex flex-col gap-20">
          {SERVICE_KEYS.map((key, i) => {
            const Visual = VISUALS[key];
            const items = t.raw(`${key}.items`) as string[];
            return (
              <div
                key={key}
                className={`grid items-center gap-10 md:grid-cols-2 ${
                  i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <Visual />
                <div>
                  <h2 className="font-heading text-2xl font-bold uppercase tracking-tight md:text-3xl">
                    {t(`${key}.title`)}
                  </h2>
                  <p className="mt-3 text-text-muted">{t(`${key}.description`)}</p>
                  <ul className="mt-6 flex flex-col gap-3">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-text-primary">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <FinalCta />
    </>
  );
}
