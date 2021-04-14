import { useHistory } from 'react-router-dom';

import '../css/buttons.css';

interface Props {
    text: string;
    path: string;
    state: string;
}

export const RedirectButton = (props: Props) => {
    const history = useHistory();

    return (
        <button className="redirect-button" onClick={() => {
            history.push({
                pathname: props.path,
                state: props.state
            })
        }}>{props.text}</button>
    );
}