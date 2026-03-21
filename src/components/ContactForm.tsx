"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { SERVICES } from "@/lib/constants";
import { contactSchema, type ContactFormValues } from "@/lib/contact-schema";
import { CheckCircle2, LoaderCircle } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const serviceOptions = [
  ...SERVICES.map((service) => service.name),
  "Power Stroke Bulletproofing",
  "Aftermarket Upgrades",
  "Other",
];

export default function ContactForm() {
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
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    if (!response.ok) {
      throw new Error("Failed to submit form");
    }

    setIsSubmitted(true);
    reset();
  };

  return (
    <div className="card-base">
      <h2 className="font-display text-3xl uppercase tracking-wide">Send Us a Message</h2>

      {isSubmitted && (
        <div className="mt-5 flex items-center gap-2 rounded-lg border border-emerald-500/40 bg-emerald-500/10 p-3 text-emerald-300">
          <CheckCircle2 size={18} />
          <p>Thanks! We&apos;ll get back to you shortly.</p>
        </div>
      )}

      <form className="mt-6 space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <InputField label="Name" error={errors.name?.message}>
          <input {...register("name")} className="input-field" required />
        </InputField>

        <InputField label="Phone Number" error={errors.phone?.message}>
          <input {...register("phone")} className="input-field" required />
        </InputField>

        <InputField label="Email (optional)" error={errors.email?.message}>
          <input type="email" {...register("email")} className="input-field" />
        </InputField>

        <InputField label="Vehicle Year / Make / Model (optional)" error={errors.vehicle?.message}>
          <input {...register("vehicle")} className="input-field" />
        </InputField>

        <InputField label="Service Needed" error={errors.serviceNeeded?.message}>
          <select {...register("serviceNeeded")} className="input-field" required>
            <option value="">Select a service</option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </InputField>

        <InputField label="Message" error={errors.message?.message}>
          <textarea {...register("message")} className="input-field min-h-32" required />
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
  error?: string;
  children: React.ReactNode;
};

function InputField({ label, error, children }: InputFieldProps) {
  return (
    <label className="block text-sm font-medium text-text-primary">
      <span>{label}</span>
      <div className="mt-1">{children}</div>
      {error ? <span className="mt-1 block text-xs text-red-300">{error}</span> : null}
    </label>
  );
}
