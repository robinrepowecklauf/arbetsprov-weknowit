import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { SearchView } from './views/SearchView';
import { StartView } from './views/StartView';
import { ResultView } from './views/ResultView';

import './css/app.css';

export const App = () => {
	return (
		<Router>
			<h1 className="header">CityPop</h1>
			<Switch>
				<Route path="/" exact render={() => <StartView />} />
				<Route path="/search" exact render={() => <SearchView />} />
				<Route path="/result" exact render={() => <ResultView />} />
			</Switch>
		</Router>
	);
}

