import axios from "axios";

export const api = axios.create({
    baseURL: 'https://barbells-p120.onrender.com/',
    headers: {
        Accept: 'application/json',
    }
})

api.interceptors.request.use(options => {

    const token = localStorage.getItem("@barbells:token-1.0.0")

    if (token) {
        options.headers.Authorization = `Bearer ${token}`
    }

    return options
})