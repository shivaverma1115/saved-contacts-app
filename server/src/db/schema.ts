import { pgTable, serial, varchar, timestamp } from "drizzle-orm/pg-core";

export const savedContacts = pgTable("saved_contacts", {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 255 }).notNull(),
    email: varchar("email", { length: 255 }),
    phone: varchar("phone", { length: 20 }),
    company: varchar("company", { length: 255 }),
    createdAt: timestamp("created_at").defaultNow()
});
