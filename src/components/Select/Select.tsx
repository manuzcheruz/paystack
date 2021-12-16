import { useEffect, useState } from "react";

function Select(selectHandler: any, list: any[]) {
    const [value, setValue] = useState('');

    return (
        <div className="select-wrapper">
            <select className="select-input" value={value} onChange={e => selectHandler(e)}>
                <optgroup>
                    {list.map((el:any, i:number) => {
                        return <option key={i} value={el}>el</option>
                    })}
                </optgroup>
            </select>
        </div>
    )
}

export default Select;