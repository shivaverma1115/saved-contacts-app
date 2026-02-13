"use client";

import { useDeleteContact } from "../hooks/useContacts";


export default function ContactsTable({ contacts }: any) {
    const deleteMutation = useDeleteContact();

    return (
        <table className="w-full border mt-4">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Company</th>
                    <th>Action</th>
                </tr>
            </thead>

            <tbody>
                {contacts?.map((c: any) => (
                    <tr key={c.id}>
                        <td>{c.name}</td>
                        <td>{c.email}</td>
                        <td>{c.company}</td>
                        <td>
                            <button
                                className="text-red-500"
                                onClick={() => deleteMutation.mutate(c.id)}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
