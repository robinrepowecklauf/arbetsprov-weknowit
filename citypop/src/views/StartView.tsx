import { RedirectButton } from '../components/RedirectButton';

import '../css/start.css';

export const StartView = () => {
    return (
        <div className="container">
            <div className="start-row-flexbox">
                <RedirectButton text="SEARCH BY CITY" path="/search" />
                <RedirectButton text="SEARCH BY COUNTRY" path="/search" />
            </div>
        </div>
    );
}