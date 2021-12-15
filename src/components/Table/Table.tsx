import { useState } from "react";
import { Aux } from "../../hoc/Aux";

/**
 * render the characters in table format
 * @param props 
 * @returns 
 */
function Table(props: string[]) {
    const [sortDirection, setSortDirection] = useState(true);
    const [data, setData] = useState(props);
    //tasks
    //1. map the props onto the table ...done
    //2. impliment the double clicking to toggle between ascending and descending order
    const toggleHandler = () => {
        setSortDirection(!sortDirection);
    }
    //3. impliment the single click sorting function .sort((a,b) => a - b) || .sort((a,b) => b - a)
    const sorter = (props: string[]) => {
        if (sortDirection) {
            return setData(data.sort());
        } else return setData(data.sort().reverse());
    }
    //4. sum the heights => .reduce ...done
    const sum = (props: any) => {
        //do a conversion from cm to ft and return both of them
        return props.reduce((a: string, b: string) => +a + +b, 0);
    }
    //5. sum the total number of characters => .length ...done
    const totalChars = props.length;
    //6. two check buttons to display either male or female

    return (
        <div className="table-wrapper">
            {props ?
            <table>
                <thead>
                    <th onClick={() => sorter(props)} onDoubleClick={toggleHandler}>name</th>
                    <th onClick={() => sorter(props)}>height</th>
                    <th>gender</th>
                </thead>
                <tbody>
                    {props.map((el: any, i: number) => {
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
            :
            ''}
        </div>
    )
}

export default Table;