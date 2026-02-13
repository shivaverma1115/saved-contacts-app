import { z } from "zod";

export const contactSchema = z.object({
    name: z.string().min(1),
    email: z.string().email().optional(),
    phone: z.string().optional(),
    company: z.string().optional()
});

export type Contact = z.infer<typeof contactSchema>;