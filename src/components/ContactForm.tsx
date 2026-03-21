"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { SERVICES } from "@/lib/constants";
import { contactSchema, type ContactFormValues } from "@/lib/contact-schema";
import { AlertTriangle, CheckCircle2, LoaderCircle } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const serviceOptions = [
  ...SERVICES.map((service) => service.name),
  "Power Stroke Bulletproofing",
  "Aftermarket Upgrades",
  "Other",
];

export default function ContactForm() {
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      vehicle: "",
      serviceNeeded: "",
      message: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setSubmitError(null);
    setIsSubmitted(false);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    if (!response.ok) {
      setSubmitError("We could not send your message right now. Please call us directly.");
      return;
    }

    setIsSubmitted(true);
    reset();
  };

  return (
    <div className="card-base">
      <h2 className="font-display text-3xl font-bold tracking-tight text-text-white sm:text-4xl">Send a message</h2>

      {isSubmitted ? (
        <div className="mt-5 flex items-center gap-2 rounded-md border border-success/40 bg-success/10 p-3 text-success">
          <CheckCircle2 size={18} />
          <p>Thanks! We&apos;ll get back to you shortly.</p>
        </div>
      ) : null}

      {submitError ? (
        <div className="mt-5 flex items-center gap-2 rounded-md border border-red-500/40 bg-red-500/10 p-3 text-red-300">
          <AlertTriangle size={18} />
          <p>{submitError}</p>
        </div>
      ) : null}

      <form className="mt-6 space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <InputField label="Name" id="contact-name" error={errors.name?.message}>
          <input id="contact-name" autoComplete="name" {...register("name")} className="input-field" required />
        </InputField>

        <InputField label="Phone Number" id="contact-phone" error={errors.phone?.message}>
          <input id="contact-phone" autoComplete="tel" {...register("phone")} className="input-field" required />
        </InputField>

        <InputField label="Email (optional)" id="contact-email" error={errors.email?.message}>
          <input id="contact-email" type="email" autoComplete="email" {...register("email")} className="input-field" />
        </InputField>

        <InputField label="Vehicle Year / Make / Model (optional)" id="contact-vehicle" error={errors.vehicle?.message}>
          <input id="contact-vehicle" autoComplete="off" {...register("vehicle")} className="input-field" />
        </InputField>

        <InputField label="Service Needed" id="contact-service" error={errors.serviceNeeded?.message}>
          <select id="contact-service" {...register("serviceNeeded")} className="input-field" required>
            <option value="">Select a service</option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </InputField>

        <InputField label="Message" id="contact-message" error={errors.message?.message}>
          <textarea id="contact-message" {...register("message")} className="input-field min-h-32" required />
        </InputField>

        <button type="submit" className="btn-primary w-full gap-2 disabled:cursor-not-allowed disabled:opacity-70" disabled={isSubmitting}>
          {isSubmitting ? <LoaderCircle size={18} className="animate-spin" /> : null}
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}

type InputFieldProps = {
  label: string;
  id: string;
  error?: string;
  children: React.ReactNode;
};

function InputField({ label, id, error, children }: InputFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-text-white">
        {label}
      </label>
      <div className="mt-1">{children}</div>
      {error ? <span className="mt-1 block text-xs text-red-300">{error}</span> : null}
    </div>
  );
}
