import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import store from './store';
import {Router, Route, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import  {Switch,} from 'react-router-dom';
import './css/bootstrap.css'
import Home from './component/Home';
import Hero from './component/Hero';
import Subject from './component/Subject';

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Route exact path = "/" component={Home}/>
                <Route exact path = "/hero" component={Hero}/>
                <Route exact path = "/items" component={Subject}/>
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
