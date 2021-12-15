import { useEffect, useState } from "react";

function Select() {
    const [value, setValue] = useState('');
    const [filmList, setFilmList] = useState([]);
    const [error, setError] = useState();

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

    //fetch the list when the app is loading
    useEffect(() => {
        fetchList();
    }, []);

    return (
        <div className="select-wrapper">
            {error && <h5>`There was an error: ${error}`</h5>}
            <select className="select-input" value={value} onChange={e => selectHandler(e)}>
                <optgroup>
                    {filmList.map((el, i) => {
                        return <option key={i} value={el}>el</option>
                    })}
                </optgroup>
            </select>
        </div>
    )
}

export default Select;