import { z } from "zod";

export const contactSchema = z.object({
    name: z.string().min(1),
    email: z.string().email().optional().or(z.literal("")),
    phone: z.string().optional().or(z.literal("")),
    company: z.string().optional().or(z.literal(""))
});

export type Contact = z.infer<typeof contactSchema>;