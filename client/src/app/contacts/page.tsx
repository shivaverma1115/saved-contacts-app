"use client";

import ContactsTable from "@/src/components/ContactsTable";
import SearchBar from "@/src/components/SearchBar";
import { useContacts } from "@/src/hooks/useContacts";
import { useState } from "react";

export default function ContactsPage() {
    const [search, setSearch] = useState("");
    const { data, isLoading } = useContacts(search);
    console.log(data);
    console.log(isLoading);

    return (
        <div className="p-10">
            <h1 className="text-2xl font-bold mb-4">Saved Contacts</h1>

            <SearchBar onSearch={setSearch} />

            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <ContactsTable contacts={data} />
            )}
        </div>
    );
}
