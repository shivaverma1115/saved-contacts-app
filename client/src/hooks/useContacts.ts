import { useQuery, useMutation, useQueryClient, keepPreviousData } from "@tanstack/react-query";
import { api } from "../lib/api";

export const useContacts = (search: string, page: number) => {
    return useQuery({
        queryKey: ["contacts", search, page],
        queryFn: async () => {
            const res = await api.get(`/contacts?search=${search}&page=${page}&limit=5`);
            return res.data;
        },
        placeholderData: keepPreviousData
    });
};


export const useAddContact = () => {
    const qc = useQueryClient();

    return useMutation<unknown, Error, any>({
        mutationFn: async (data) => {
            const res = await api.post("/contacts", data);
            return res.data;
        },
        onSuccess: () => qc.invalidateQueries({ queryKey: ["contacts"] })
    });
};


export const useDeleteContact = () => {
    const qc = useQueryClient();

    return useMutation({
        mutationFn: (id: number) => api.delete(`/contacts/${id}`),
        onSuccess: () => qc.invalidateQueries({ queryKey: ["contacts"] })
    });
};
