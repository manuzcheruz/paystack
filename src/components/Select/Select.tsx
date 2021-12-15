import { useState } from "react";

function Select() {
    const [value, setValue] = useState('');
    const [filmList, setFilmList] = useState([]);
    const [error, setError] = useState();

    const [characters, setCharacters] = useState([]);
    const [error2, setError2] = useState();

    const selectHandler = (event: any) => {
        setValue(event.target.value);
    }

    /**
     * create a fetch function here
     */
    function fetchList() {
        const url = 'https://swapi.co/api/films';
        fetch(url)
            .then(res => {
                return res.json();
            })
            .then(res => {
                setFilmList(res);
            })
            .catch(err => {
                setError(err.message);
            })
    }

    /**
     * create a fetch characters here
     */
    function fetchCharacters(film: string) {
        const url = 'https://swapi.co/api/films/1';
        fetch(url, {
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(film)
            })
            .then(res => {
                return res.json();
            })
            .then(res => {
                setCharacters(res);
            })
            .catch(err => {
                setError2(err.message);
            })
    }

    console.log(value);

    return (
        <div className="select-wrapper">
            <select className="select-input" value={value} onChange={e => selectHandler(e)}>
                <optgroup>
                    <option value="manuz">testing</option>
                    <option value="cheru">testing</option>
                    <option value="testing">testing</option>
                </optgroup>
            </select>
        </div>
    )
}

export default Select;