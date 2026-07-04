import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
import MountainLogo from "@/components/icons/MountainLogo";

export default function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-bg-secondary">
      <div className="container grid gap-10 py-16 md:grid-cols-3">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <MountainLogo className="h-8 w-14" animate={false} />
            <span className="font-heading text-base font-bold uppercase tracking-wide">
              Global Data 468
            </span>
          </Link>
          <p className="mt-3 font-heading text-sm uppercase tracking-widest text-accent">
            {t("tagline")}
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="mb-2 font-heading text-sm font-semibold uppercase tracking-wide text-text-primary">
            {nav("home")}
          </p>
          <Link href="/" className="text-sm text-text-muted transition-colors hover:text-accent">
            {nav("home")}
          </Link>
          <Link href="/servicios" className="text-sm text-text-muted transition-colors hover:text-accent">
            {nav("services")}
          </Link>
          <Link href="/nosotros" className="text-sm text-text-muted transition-colors hover:text-accent">
            {nav("about")}
          </Link>
          <Link href="/casos" className="text-sm text-text-muted transition-colors hover:text-accent">
            {nav("cases")}
          </Link>
          <Link href="/contacto" className="text-sm text-text-muted transition-colors hover:text-accent">
            {nav("contact")}
          </Link>
        </div>

        <div className="flex flex-col gap-2 text-sm text-text-muted">
          <p>{t("location")}</p>
          <div className="mt-4 flex gap-4">
            <a href="#" className="transition-colors hover:text-accent">
              {t("privacy")}
            </a>
            <a href="#" className="transition-colors hover:text-accent">
              {t("gdpr")}
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 py-6">
        <p className="container text-center text-xs text-text-muted">
          © {year} Global Data 468 · {t("rights")}
        </p>
      </div>
    </footer>
  );
}
