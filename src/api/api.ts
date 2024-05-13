import axios from 'axios';

const createApiClient = () => {

    const baseURL = import.meta.env.VITE_BASE_URL
    const api_key = import.meta.env.VITE_API_KEY

 
    const client = axios.create({
        baseURL,
        headers: {
            Authorization : `Bearer ${api_key}`
        }
    })

    return client;
}

export function api() {
    const api = createApiClient();
    return api;
}