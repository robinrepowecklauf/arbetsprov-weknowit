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
				<Route path="/" exact component={StartView}/>
				<Route path="/search-country" exact component={SearchView}/>
				<Route path="/search-city" exact component={SearchView}/>
				<Route path="/result-city" exact component={ResultView}/>
				<Route path="/result-country" exact component={ResultView}/>
			</Switch>
		</Router>
	);
}

