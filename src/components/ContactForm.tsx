"use client";

import { SERVICES } from "@/lib/constants";
import { useForm, ValidationError } from "@formspree/react";
import { AlertTriangle, CheckCircle2, LoaderCircle } from "lucide-react";

const serviceOptions = [
  ...SERVICES.map((s) => s.name),
  "Power Stroke Bulletproofing",
  "Aftermarket Upgrades",
  "Other",
];

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xgopybdk");

  if (state.succeeded) {
    return (
      <div>
        <h2 className="text-3xl font-black tracking-tight text-slate-900">Send a Message</h2>
        <div className="mt-6 flex items-center gap-2.5 border border-green-200 bg-green-50 p-4 text-sm font-semibold text-green-700">
          <CheckCircle2 size={16} strokeWidth={2.5} />
          Thanks! We&apos;ll get back to you shortly.
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-3xl font-black tracking-tight text-slate-900">Send a Message</h2>
      <p className="mt-1.5 text-sm font-medium text-slate-500">We respond during business hours.</p>

      {state.errors && (
        <div className="mt-5 flex items-center gap-2.5 border border-action/20 bg-action-50 p-4 text-sm font-semibold text-action-dark">
          <AlertTriangle size={16} strokeWidth={2.5} />
          Could not send your message. Please call us directly.
        </div>
      )}

      <form className="mt-7 space-y-5" onSubmit={handleSubmit}>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Name *" id="f-name">
            <input id="f-name" name="name" autoComplete="name" placeholder="John Smith" required className="input-field" />
            <ValidationError field="name" errors={state.errors} className="mt-1.5 text-xs font-semibold text-action" />
          </Field>
          <Field label="Phone *" id="f-phone">
            <input id="f-phone" name="phone" autoComplete="tel" placeholder="(832) 555-0100" required className="input-field" />
            <ValidationError field="phone" errors={state.errors} className="mt-1.5 text-xs font-semibold text-action" />
          </Field>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Email" id="f-email">
            <input id="f-email" name="email" type="email" placeholder="you@email.com" className="input-field" />
            <ValidationError field="email" errors={state.errors} className="mt-1.5 text-xs font-semibold text-action" />
          </Field>
          <Field label="Vehicle (Year/Make/Model)" id="f-vehicle">
            <input id="f-vehicle" name="vehicle" placeholder="2004 Ford F-250" className="input-field" />
            <ValidationError field="vehicle" errors={state.errors} className="mt-1.5 text-xs font-semibold text-action" />
          </Field>
        </div>

        <Field label="Service Needed *" id="f-service">
          <div className="relative">
            <select id="f-service" name="serviceNeeded" required className="input-field-select pr-8">
              <option value="">Select a service…</option>
              {serviceOptions.map((o) => (
                <option key={o} value={o}>{o}</option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">▾</span>
          </div>
          <ValidationError field="serviceNeeded" errors={state.errors} className="mt-1.5 text-xs font-semibold text-action" />
        </Field>

        <Field label="Message *" id="f-message">
          <textarea
            id="f-message"
            name="message"
            rows={5}
            required
            placeholder="Tell us about your vehicle and what's going on…"
            className="input-field resize-none"
          />
          <ValidationError field="message" errors={state.errors} className="mt-1.5 text-xs font-semibold text-action" />
        </Field>

        <button
          type="submit"
          disabled={state.submitting}
          className="btn-navy w-full justify-center disabled:cursor-not-allowed disabled:opacity-60"
        >
          {state.submitting
            ? <><LoaderCircle size={16} className="animate-spin" /> Sending…</>
            : "Send Message"}
        </button>
      </form>
    </div>
  );
}

function Field({ label, id, children }: { label: string; id: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-[11px] font-black uppercase tracking-[0.18em] text-slate-500">
        {label}
      </label>
      {children}
    </div>
  );
}
