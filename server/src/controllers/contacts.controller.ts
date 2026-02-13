import type { Request, Response } from "express";
import { eq, ilike, or } from "drizzle-orm";
import { db } from "../db/index.js";
import { savedContacts } from "../db/schema.js";
import { contactSchema } from "../validations/contact.schema.js";

export const getContacts = async (req: Request, res: Response) => {
    const search = req.query.search;

    let contacts;

    if (search) {
        contacts = await db.select().from(savedContacts).where(
            or(
                ilike(savedContacts.name, `%${search}%`),
                ilike(savedContacts.company, `%${search}%`)
            )
        );
    } else {
        contacts = await db.select().from(savedContacts);
    }

    res.json(contacts);
};

export const addContact = async (req: Request, res: Response) => {
    const parsed = contactSchema.safeParse(req.body);
    if (!parsed.success) return res.status(400).json(parsed.error);

    const contact = await db.insert(savedContacts).values(parsed.data).returning();
    res.json(contact);
};

export const deleteContact = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    await db.delete(savedContacts).where(eq(savedContacts.id, id));
    res.json({ success: true });
};
