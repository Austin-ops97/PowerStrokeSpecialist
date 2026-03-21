import { z } from "zod";

export const phoneRegex = /^(?:\+1\s?)?(?:\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$/;

export const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().regex(phoneRegex, "Enter a valid US phone number"),
  email: z
    .string()
    .trim()
    .optional()
    .transform((val) => (val ? val : undefined))
    .refine((val) => !val || z.string().email().safeParse(val).success, {
      message: "Enter a valid email",
    }),
  vehicle: z.string().optional(),
  serviceNeeded: z.string().min(1, "Please select a service"),
  message: z.string().min(8, "Message is required"),
});

export type ContactFormValues = z.input<typeof contactSchema>;
export type ContactPayload = z.output<typeof contactSchema>;
