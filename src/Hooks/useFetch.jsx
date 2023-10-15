import { useState } from "react"

const useFetch = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function request(url, options) {
        let response;
        let json;

        try {
            setError(null);
            setLoading(true);
            response = await fetch(url, options);
            json = await response.json();
        } catch (err) {
            setError(err);
            json = null;
        } finally {
            setData(json)
            setLoading(false);
        }
    }

    return {
    data,
    loading,
    error,
    request
    }
}

export default useFetch