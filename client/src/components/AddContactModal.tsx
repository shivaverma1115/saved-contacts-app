"use client";

import { useState } from "react";
import { useAddContact } from "@/src/hooks/useContacts";
import toast from "react-hot-toast";

export default function AddContactModal() {
    const [open, setOpen] = useState(false);

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        company: ""
    });

    const addContact = useAddContact();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(form)
        addContact.mutate(form, {
            onSuccess: () => {
                setOpen(false);
                setForm({
                    name: "",
                    email: "",
                    phone: "",
                    company: ""
                });
                toast.success("Contact added successfully!");
            }
        });
    };

    return (
        <>
            {/* Button */}
            <button
                onClick={() => setOpen(true)}
                className="bg-black text-white px-4 py-2 rounded mb-4"
            >
                + Add Contact
            </button>

            {/* Modal */}
            {open && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded w-[400px] shadow-lg">

                        <h2 className="text-xl font-bold mb-4">Add Contact</h2>

                        <form onSubmit={handleSubmit} className="space-y-3">

                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={form.name}
                                onChange={handleChange}
                                className="border p-2 w-full"
                                required
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={form.email}
                                onChange={handleChange}
                                className="border p-2 w-full"
                            />

                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone"
                                value={form.phone}
                                onChange={handleChange}
                                className="border p-2 w-full"
                                minLength={10}
                                maxLength={10}
                            />

                            <input
                                type="text"
                                name="company"
                                placeholder="Company"
                                value={form.company}
                                onChange={handleChange}
                                className="border p-2 w-full"
                            />

                            <div className="flex justify-end gap-2 pt-2">
                                <button
                                    type="button"
                                    onClick={() => setOpen(false)}
                                    className="px-4 py-2 border"
                                >
                                    Cancel
                                </button>

                                <button
                                    type="submit"
                                    className="bg-blue-600 text-white px-4 py-2"
                                    disabled={addContact.isPending}
                                >
                                    {addContact.isPending ? "Saving..." : "Save"}
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            )}
        </>
    );
}
