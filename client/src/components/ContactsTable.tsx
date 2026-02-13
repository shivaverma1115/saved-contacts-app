"use client";

import toast from "react-hot-toast";
import { useDeleteContact } from "../hooks/useContacts";


export default function ContactsTable({ contacts }: any) {
    const deleteMutation = useDeleteContact();

    const handleDelete = (id: number) => {
        const isConfirmed = window.confirm("Are you sure you want to delete this contact?");
        if (!isConfirmed) return;

        deleteMutation.mutate(id,{
            onSuccess: () => {
                toast.success("Contact deleted successfully!");
            }
        });
    };

    return (
        <div className="w-full overflow-x-auto">
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
                        <tr key={c.id} className="border-t text-center" >
                            <td>{c.name}</td>
                            <td>{c.email}</td>
                            <td>{c.company}</td>
                            <td>
                                <button
                                    className="text-red-500"
                                    onClick={() => handleDelete(c.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
