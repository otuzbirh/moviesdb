import { api } from "./api";
import { AxiosResponse } from "axios";

interface Request {
    topRated: (type: string) => Promise<AxiosResponse<any>>;
    search: (type: string, query: string) => Promise<AxiosResponse<any>>;
    getDetails: (type: string, id: string) => Promise<AxiosResponse<any>>;
}

export default function request(): Request {
    return {
        topRated: async (type: string) =>
            api().get(`${type}/top_rated?limit=10`),
        search: async (type: string, query: string) =>
            api().get(`search/${type}?query=${query}`),
        getDetails: async (type: string, id: string) =>
            api().get(`${type}/${id}`),
    };
}
