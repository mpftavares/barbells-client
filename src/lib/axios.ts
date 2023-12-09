import axios from "axios";

export const api = axios.create({
    baseURL: 'https://barbells-p120.onrender.com/',
    headers: {
        Accept: 'application/json'
    }
})