import { useState, useEffect } from "react";

export default function useFetch(url) {
    const [jsonData, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            try {
                const res = await fetch(url);
                const json = await res.json();
                setData(json);
                setLoading(false);
                // console.log(json.data[0].attributes.title);

                // json.data.map((experience) => (
                //     console.log(experience.attributes.title)
                // ));
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }

        fetchData();
    }, [url])

    return { jsonData, error, loading }
}