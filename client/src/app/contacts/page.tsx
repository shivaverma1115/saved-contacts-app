"use client";

import AddContactModal from "@/src/components/AddContactModal";
import ContactsTable from "@/src/components/ContactsTable";
import SearchBar from "@/src/components/SearchBar";
import { useContacts } from "@/src/hooks/useContacts";
import Loading from "@/src/ui/loading/Loading";
import { useState } from "react";

export default function ContactsPage() {
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const { data, isLoading } = useContacts(search, page);
    console.log(data)
    return (
        <div className="py-10 px-4 max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold mb-4 text-center text-gray-800 underline underline-offset-8">Contact Management Feature</h1>
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold text-gray-800">Saved Contacts</h2>

                <AddContactModal />
            </div>

            <SearchBar onSearch={(value) => {
                setSearch(value);
                setPage(1);
            }} />

            {isLoading ? (
                <Loading />
            ) : (
                <>
                    <ContactsTable contacts={data} />
                    <div className="flex justify-center items-center gap-4 mt-4 border border-dotted rounded">
                        <button
                            disabled={page === 1}
                            onClick={() => setPage(prev => prev - 1)}
                            className="px-3 py-1 border"
                        >
                            Prev
                        </button>

                        <span>Page {data?.page} of {data?.totalPages}</span>

                        <button
                            disabled={page === data?.totalPages}
                            onClick={() => setPage(prev => prev + 1)}
                            className="px-3 py-1 border"
                        >
                            Next
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}
