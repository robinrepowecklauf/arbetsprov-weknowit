import '../css/start.css';

export const StartView = () => {
    return (
        <div className="container">
            <div className="start-column-flex">
                <h1>CityPop</h1>
                <div className="start-row-flex">
                    <button className="search-by-button">SEARCH BY CITY</button>
                    <button className="search-by-button">SEARCH BY COUNTRY</button>
                </div>
            </div>
        </div>
    );
}