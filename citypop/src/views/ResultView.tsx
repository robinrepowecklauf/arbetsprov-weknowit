import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { getCityPopulation, getMostPopulatedCities } from '../data/FetchData';
import { RedirectButton } from '../components/RedirectButton';
import ClipLoader from "react-spinners/ClipLoader";

import '../css/result.css'

export const ResultView = () => {
    const location = useLocation<string>();

    const [result, setResult]: [string[], Function] = useState([]);
    const [search, setSearch] = useState(location.state);
    const [type, setType] = useState(location.pathname.split('-')[1])
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        setType(location.pathname.split('-')[1]);
        setSearch(location.state);
    }, [location]);

    useEffect(() => {

        if (type === 'city')
            getCityPopulation(search).then(
                (res) => {
                    setResult(res);
                }
            );
        else
            getMostPopulatedCities(search).then(
                (res) => {
                    setResult(res);
                }
            );

    }, [search]);


    useEffect(() => {
        setLoading(false);
    }, [result]);

    return (
        <div className="result-container">
            {loading ?
                <ClipLoader color={"#000000"} loading={loading} size={100} />
                :
                <div className="result-column-flexbox">
                    <p>{search.toUpperCase()}</p>
                    <div className="display-result">
                        {!Array.isArray(result) ?
                            <div className="display-city-result">
                                <p>POPULATION</p>
                                <h2>{result}</h2>
                            </div>
                            :
                            result.map((city: string, index: number) => {
                                return (
                                    <RedirectButton key={index} text={city} path="/result-city" state={city} />
                                );
                            })
                        }
                    </div>
                </div>
            }
        </div>
    );
}