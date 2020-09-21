import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from "redux";
import createHistory from 'history/createBrowserHistory';
import {Provider} from "react-redux";
import {Switch,Route} from "react-router";
import {ConnectedRouter} from "react-router-redux";
import App from "./components/App";
import reducer from "./reducer";
import thunkMiddleware from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
const history = createHistory();

ReactDOM.render((
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Route path="/" component={App}/>
        </ConnectedRouter>
    </Provider>
), document.getElementById('root'));