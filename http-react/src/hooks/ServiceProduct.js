import { useState, useEffect } from "react";

export const useFetch = (url) => {

    const [data, setData] = useState(null);    
    const [config, setConfig] = useState(null);
    const [method, setMethod] = useState(null);
    const [callFetch, setCallFetch] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const httpConfig = (data, method, id = null) => {
        let fetchUrl = url; 

        if(id) {
            fetchUrl = `${url}/${id}`;
        }

        const configObj = {
            method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };

        setConfig(configObj);
        setMethod(method);
    }; 

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await fetch(url);
                const json = await res.json();
                setData(json);
            } catch (error) {
                console.log(error.message)
                setError(`Erro ao carregar os dados: ${error}`);
            }
            setLoading(false);
        }
        fetchData();
    }, [url, callFetch]);

    useEffect(() => {

        const httpRequest = async () => {
            if(config && (method === 'POST' || method === 'PUT' || method === 'DELETE')) {
                let fetchOptions = [url, config];
                const res = await fetch(...fetchOptions);
                const json = await res.json();
                setCallFetch(json);
            }
        };    

        httpRequest();

     }, [config, method, url]);

     return { data, httpConfig, loading, error };
}; 