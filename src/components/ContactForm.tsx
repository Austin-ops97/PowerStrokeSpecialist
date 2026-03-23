"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { SERVICES } from "@/lib/constants";
import { contactSchema, type ContactFormValues } from "@/lib/contact-schema";
import { AlertTriangle, CheckCircle2, LoaderCircle } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const serviceOptions = [
  ...SERVICES.map((s) => s.name),
  "Power Stroke Bulletproofing",
  "Aftermarket Upgrades",
  "Other",
];

export default function ContactForm() {
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", phone: "", email: "", vehicle: "", serviceNeeded: "", message: "" },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setSubmitError(null);
    setIsSubmitted(false);
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    if (!res.ok) {
      setSubmitError("Could not send your message. Please call us directly.");
      return;
    }
    setIsSubmitted(true);
    reset();
  };

  return (
    <div>
      <h2 className="text-3xl font-black tracking-tight text-slate-900">Send a Message</h2>
      <p className="mt-1.5 text-sm font-medium text-slate-500">We respond during business hours.</p>

      {isSubmitted && (
        <div className="mt-5 flex items-center gap-2.5 border border-green-200 bg-green-50 p-4 text-sm font-semibold text-green-700">
          <CheckCircle2 size={16} strokeWidth={2.5} />
          Thanks! We&apos;ll get back to you shortly.
        </div>
      )}
      {submitError && (
        <div className="mt-5 flex items-center gap-2.5 border border-action/20 bg-action-50 p-4 text-sm font-semibold text-action-dark">
          <AlertTriangle size={16} strokeWidth={2.5} />
          {submitError}
        </div>
      )}

      <form className="mt-7 space-y-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Name *" id="f-name" error={errors.name?.message}>
            <input id="f-name" autoComplete="name" placeholder="John Smith" {...register("name")} className="input-field" />
          </Field>
          <Field label="Phone *" id="f-phone" error={errors.phone?.message}>
            <input id="f-phone" autoComplete="tel" placeholder="(832) 555-0100" {...register("phone")} className="input-field" />
          </Field>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Email" id="f-email" error={errors.email?.message}>
            <input id="f-email" type="email" placeholder="you@email.com" {...register("email")} className="input-field" />
          </Field>
          <Field label="Vehicle (Year/Make/Model)" id="f-vehicle" error={errors.vehicle?.message}>
            <input id="f-vehicle" placeholder="2004 Ford F-250" {...register("vehicle")} className="input-field" />
          </Field>
        </div>

        <Field label="Service Needed *" id="f-service" error={errors.serviceNeeded?.message}>
          <div className="relative">
            <select id="f-service" {...register("serviceNeeded")} className="input-field-select pr-8">
              <option value="">Select a service…</option>
              {serviceOptions.map((o) => (
                <option key={o} value={o}>{o}</option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">▾</span>
          </div>
        </Field>

        <Field label="Message *" id="f-message" error={errors.message?.message}>
          <textarea
            id="f-message"
            {...register("message")}
            rows={5}
            placeholder="Tell us about your vehicle and what's going on…"
            className="input-field resize-none"
          />
        </Field>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-navy w-full justify-center disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting
            ? <><LoaderCircle size={16} className="animate-spin" /> Sending…</>
            : "Send Message"}
        </button>
      </form>
    </div>
  );
}

function Field({ label, id, error, children }: { label: string; id: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-[11px] font-black uppercase tracking-[0.18em] text-slate-500">
        {label}
      </label>
      {children}
      {error && <p className="mt-1.5 text-xs font-semibold text-action">{error}</p>}
    </div>
  );
}
