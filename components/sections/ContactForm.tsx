"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

export default function ContactForm() {
  const t = useTranslations("contactPage.form");
  const [values, setValues] = useState({ name: "", email: "", company: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): Errors => {
    const next: Errors = {};
    if (!values.name.trim()) next.name = "Required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = "Invalid email";
    if (!values.message.trim() || values.message.trim().length < 10) next.message = "Too short";
    return next;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center gap-3 rounded-xl border border-accent/30 bg-accent/5 p-10 text-center"
      >
        <CheckCircle2 className="h-10 w-10 text-accent" />
        <p className="font-heading text-lg font-semibold uppercase tracking-wide">
          {t("success")}
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm text-text-muted">
          {t("name")}
        </label>
        <input
          id="name"
          value={values.name}
          onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
          className="h-12 w-full rounded-md border border-white/10 bg-bg-secondary px-4 text-sm text-text-primary outline-none transition-colors focus:border-accent"
        />
        {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm text-text-muted">
          {t("email")}
        </label>
        <input
          id="email"
          type="email"
          value={values.email}
          onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
          className="h-12 w-full rounded-md border border-white/10 bg-bg-secondary px-4 text-sm text-text-primary outline-none transition-colors focus:border-accent"
        />
        {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="company" className="mb-1.5 block text-sm text-text-muted">
          {t("company")}
        </label>
        <input
          id="company"
          value={values.company}
          onChange={(e) => setValues((v) => ({ ...v, company: e.target.value }))}
          className="h-12 w-full rounded-md border border-white/10 bg-bg-secondary px-4 text-sm text-text-primary outline-none transition-colors focus:border-accent"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm text-text-muted">
          {t("message")}
        </label>
        <textarea
          id="message"
          rows={5}
          value={values.message}
          onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
          className="w-full resize-none rounded-md border border-white/10 bg-bg-secondary px-4 py-3 text-sm text-text-primary outline-none transition-colors focus:border-accent"
        />
        {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
      </div>

      <button
        type="submit"
        className="mt-2 inline-flex h-14 items-center justify-center rounded-md bg-accent font-heading text-sm font-semibold uppercase tracking-wide text-bg-primary transition-transform hover:scale-[1.02]"
      >
        {t("submit")}
      </button>
    </form>
  );
}
