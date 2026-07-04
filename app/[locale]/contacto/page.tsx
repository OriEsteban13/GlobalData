import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { MapPin, Phone, Mail } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import ContactForm from "@/components/sections/ContactForm";
import AndorraMap from "@/components/icons/AndorraMap";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: "contactPage" });
  return { title: `${t("title")} — Global Data 468`, description: t("subtitle") };
}

export default async function ContactPage({
  params,
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale: params.locale, namespace: "contactPage" });

  return (
    <>
      <PageHero title={t("title")} subtitle={t("subtitle")} />

      <section className="bg-bg-primary py-20">
        <div className="container grid gap-12 lg:grid-cols-2">
          <ContactForm />

          <div className="flex flex-col gap-8">
            <div className="overflow-hidden rounded-xl border border-white/5 bg-bg-secondary">
              <AndorraMap className="h-64 w-full" />
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-accent" />
                <div>
                  <p className="text-sm text-text-muted">{t("info.address")}</p>
                  <p className="text-text-primary">
                    Av. del Fener, 24B 3r 6a · AD700 Escaldes-Engordany, Andorra
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-accent" />
                <div>
                  <p className="text-sm text-text-muted">{t("info.phone")}</p>
                  <p className="text-text-primary">+376 661 244</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="mt-1 h-5 w-5 shrink-0 text-accent" />
                <div>
                  <p className="text-sm text-text-muted">{t("info.email")}</p>
                  <p className="text-text-primary">hola@globaldata468.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
