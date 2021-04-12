import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { SearchByCityView } from './views/SearchByCityView';
import { SearchByCountryView } from './views/SearchByCountryView';
import { StartView } from './views/StartView';

export const App = () => {
	return (
		<Router>
			<Switch>
				<Route path="/" exact render={() => <StartView />} />
				<Route path="/searchbycity" exact render={() => <SearchByCityView />} />
				<Route path="/searchbycountry" exact render={() => <SearchByCountryView />} />
			</Switch>
		</Router>
	);
}

