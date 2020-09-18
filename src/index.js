import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux";
import createHistory from 'history/createBrowserHistory';
import {Provider} from "react-redux";
import {Switch,Route} from "react-router";
import {ConnectedRouter} from "react-router-redux";
import App from "./components/App";

const store = createStore(
    state => state
);
const history = createHistory();

ReactDOM.render((
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Route path="/" component={App}/>
        </ConnectedRouter>
    </Provider>
), document.getElementById('root'));