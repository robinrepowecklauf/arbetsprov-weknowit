import { useHistory } from 'react-router-dom';

import '../css/buttons.css';

interface Props {
    text: string;
    path: string;
}

export const RedirectButton = (props: Props) => {
    const history = useHistory();

    return (
        <button className="redirect-button" onClick={() => {
            history.push(props.path)
        }}>{props.text}</button>
    );
}