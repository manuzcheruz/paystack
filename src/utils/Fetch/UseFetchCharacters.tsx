import { useState } from "react";

/**
 * create a fetch characters data here
 */
 export function UseFetchCharacters(film: string): {data: string[], error: string} {
    const [data, setData] = useState([]); 
    const [error, setError] = useState('');
    const url = 'https://swapi.co/api/films/1';
    fetch(url, {
        headers: {
            'Content-type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(film)
        })
        .then(res => {
            return res.json();
        })
        .then(res => {
            setData(res);
        })
        .catch(err => {
            setError(err.message);
        })

    return {data, error};
}