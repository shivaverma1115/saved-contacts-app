import type { Request, Response } from "express";
import { eq, ilike, or, sql } from "drizzle-orm";
import { db } from "../db/index.js";
import { savedContacts } from "../db/schema.js";
import { contactSchema } from "../validations/contact.schema.js";

export const getContacts = async (req: Request, res: Response) => {
    const search = req.query.search as string;
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 5;

    const offset = (page - 1) * limit;

    const condition = search
        ? or(
            ilike(savedContacts.name, `%${search}%`),
            ilike(savedContacts.company, `%${search}%`)
        )
        : undefined;

    // ✅ paginated data
    const contacts = await db
        .select()
        .from(savedContacts)
        .where(condition)
        .limit(limit)
        .offset(offset)
        .orderBy(sql`${savedContacts.id} DESC`);

    // ✅ total count (IMPORTANT — use SQL count instead of fetching all rows)
    const totalResult = await db
        .select({ count: sql<number>`count(*)` })
        .from(savedContacts)
        .where(condition);

    const total = totalResult[0].count;

    res.json({
        data: contacts,
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
    });
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
