import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../lib/api";

export const useContacts = (search: string) => {
    return useQuery({
        queryKey: ["contacts", search],
        queryFn: async () => {
            const res = await api.get(`/contacts?search=${search}`);
            return res.data;
        }
    });
};

export const useAddContact = () => {
    const qc = useQueryClient();

    return useMutation({
        mutationFn: (data) => api.post("/contacts", data),
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
