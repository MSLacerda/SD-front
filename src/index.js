import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import App from './containers/App';
import Ta from './containers/Ta';
import Ts from './containers/Ts';
import Tv from './containers/Tv';

import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
        <Route path="/" exact={true} component={App} />
        <Route path="/ta" component={Ta} />
        <Route path="/ts" component={Ts} />
        <Route path="/tv" component={Tv} />
        </Switch>
    </ BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
