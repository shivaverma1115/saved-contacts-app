import express from "express";
import { addContact, deleteContact, getContacts } from "../controllers/contacts.controller.js";

const router = express.Router();

router.get("/", getContacts);
router.post("/", addContact);
router.delete("/:id", deleteContact);

export default router;
