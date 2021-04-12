import '../css/start.css';

export const StartView = () => {
    return (
        <div className="container">
            <div className="start-row-flexbox">
                <button className="search-by-button">SEARCH BY CITY</button>
                <button className="search-by-button">SEARCH BY COUNTRY</button>
            </div>
        </div>
    );
}