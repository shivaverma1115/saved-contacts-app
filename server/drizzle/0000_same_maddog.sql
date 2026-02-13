CREATE TABLE "saved_contacts" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"email" varchar(255),
	"phone" varchar(20),
	"company" varchar(255),
	"created_at" timestamp DEFAULT now()
);
