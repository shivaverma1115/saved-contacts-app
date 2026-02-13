"use client";

import AddContactModal from "@/src/components/AddContactModal";
import ContactsTable from "@/src/components/ContactsTable";
import SearchBar from "@/src/components/SearchBar";
import { useContacts } from "@/src/hooks/useContacts";
import { useState } from "react";

export default function ContactsPage() {
    const [search, setSearch] = useState("");
    const { data, isLoading } = useContacts(search);

    return (
        <div className="py-10 px-4 max-w-3xl mx-auto">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Saved Contacts</h1>

                <AddContactModal />
            </div>

            <SearchBar onSearch={setSearch} />

            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <ContactsTable contacts={data} />
            )}
        </div>
    );
}
