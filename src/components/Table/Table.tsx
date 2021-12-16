import { useState } from "react";
import { Aux } from "../../hoc/Aux";

/**
 * render the characters in table format
 * @param props 
 * @returns 
 */
function Table(charData: CharacterData[]) {
    const [sortDirection, setSortDirection] = useState(true);
    const [data, setData] = useState(charData);
    const [checkboxVal, setCheckboxVal] = useState('');
    //tasks
    //1. map the props onto the table ...done
    //2. impliment the double clicking to toggle between ascending and descending order
    const toggleHandler = () => {
        setSortDirection(!sortDirection);
    }
    //3. impliment the single click sorting function .sort((a,b) => a - b) || .sort((a,b) => b - a)
    const sorter = (data: any[]) => {
        if (sortDirection) {
            return setData(data.sort());
        } else return setData(data.sort().reverse());
    }
    //4. sum the heights => .reduce ...done
    const sum = (data: any) => {
        //do a conversion from cm to ft and return both of them
        return data.reduce((a: string, b: string) => +a + +b, 0);
    }
    //5. sum the total number of characters => .length ...done
    const totalChars = data.length;
    //6. two check buttons to display either male or female
    const genderBox = [
        {
            name: 'male',
            value: 'male'
        },
        {
            name: 'female',
            value: 'female'
        }
    ]

    const genderFilterHandler = () => {
        return setData(data.filter((el: any) => el.gender === checkboxVal));
    }

    return (
        <div className="table-wrapper">
            <Aux>
                <form className="gender-form" onSubmit={genderFilterHandler}>
                    {genderBox.map((el: any, i: number) => {
                        return (
                            <Aux key={i}>
                                <input type="checkbox" name={el.name} onChange={() => setCheckboxVal(el.value)} />
                                <label htmlFor={el.name}>{el.name}</label><br />
                            </Aux>
                        )
                    })}
                    <input type="submit" value="Submit">Filter</input>
                </form>
                <table>
                    <thead>
                        <th onClick={() => sorter(data)} onDoubleClick={toggleHandler}>name</th>
                        <th onClick={() => sorter(data)}>height</th>
                        <th>gender</th>
                    </thead>
                    <tbody>
                        {data.map((el: any, i: number) => {
                            return (
                                <Aux>
                                    <tr>
                                        <td>{el.name}</td>
                                        <td>{el.height}</td>
                                        <td>{el.gender}</td>
                                    </tr>
                                </Aux>
                            )
                        })}
                    </tbody>
                    <tfoot>
                        <td>total</td>
                        <td>xyz</td>
                    </tfoot>
                </table>
            </Aux>
        </div>
    )
}

export default Table;