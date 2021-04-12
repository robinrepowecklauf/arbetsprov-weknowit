import { RedirectButton } from '../components/RedirectButton';

import '../css/start.css';

export const StartView = () => {
    return (
        <div className="container">
            <div className="start-row-flexbox">
                <RedirectButton text="SEARCH BY CITY" path="/searchbycity" />
                <RedirectButton text="SEARCH BY COUNTRY" path="/searchbycountry" />
            </div>
        </div>
    );
}