import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { getCityPopulation } from '../data/FetchData';


export const ResultView = () => {
    const location = useLocation<string>();
    const searchedFor = location.state;
    const [result, setResult] = useState(0);

    /**
     * TODO:
     *  Kolla om det är en stad eller ett land
     */
    useEffect(() => {
        
        getCityPopulation(searchedFor).then(
            (res: number) => {
                setResult(res);
            }
        )

    }, [location]);

    return (
        <div>
            <h1>{result}</h1>
        </div>
    );
}