import { useState, useEffect } from "react";

//post request


export const useFetch = (url) => {
    // const [url, setUrl] = useState(url);
    const [data, setData] = useState(null);

    const [config, setConfig] = useState(null);
    const [method, setMethod] = useState(null);
    const [callFetch, setCallFetch] = useState(false);

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState(null);

    const httpConfig = (data, method, id=null) => {
        if(method === 'POST' || method === 'PUT') {
            setConfig({
                method: method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });            
        } else if(method === 'DELETE') {           
            setConfig({
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });            
        }
        setMethod(method);
    }; 
    
    useEffect(() => {
        const fetchData = async () => {
            
            setLoading(true);

            try {
                const res = await fetch(url);
                const json = await res.json();
                console.log(json)
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
            if(method === 'POST') {        
               let fetchOptions = [url, config];

                const res = await fetch(...fetchOptions);
                const json = await res.json();

                setCallFetch(json);
            } else if (method === 'DELETE') {
                let productId = JSON.parse(config.body); 
               
                let fetchOptions = [`${url}/${productId}`, config];
                const res = await fetch(...fetchOptions);
                const json = await res.json();
                setCallFetch(json);
            } else if(method === 'PUT') {
                let objParse = JSON.parse(config.body);

                let productId = objParse.id;
                
                let fetchOptions = [`${url}/${productId}`, config];
                const res = await fetch(...fetchOptions);
                const json = await res.json();
                setCallFetch(json);
            }
        }; 

        httpRequest();   
    }, [config, method, url]);

    return { data, httpConfig, loading };
}