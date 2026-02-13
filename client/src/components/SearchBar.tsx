"use client";

type Props = {
    onSearch: (value: string) => void;
};

export default function SearchBar({ onSearch }: Props) {
    return (
        <input
            type="text"
            placeholder="Search by name or company..."
            className="border px-3 py-2 w-full rounded-md"
            onChange={(e) => onSearch(e.target.value)}
        />
    );
}
