import { useEffect, useState } from "react";
import { api } from "../lib/axios.js";

export function useFetch<T>(url: string) {
    const [data, setData] = useState<T>();
    const [error, setError] = useState<Error>()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)

        const controller = new AbortController()

        api
            .get(url, { signal: controller.signal })
            .then(res => {
                setError(undefined)
                setData(res.data)
            })
            .catch(err => {
                setData(undefined)
                setError(err)
            })
            .finally(() => setLoading(false))

        return () => controller.abort()
    }, [url])

    return { data, error, loading }
}