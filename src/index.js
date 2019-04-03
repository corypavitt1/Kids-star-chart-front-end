import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './containers/Login.js'
import * as serviceWorker from './serviceWorker';
import {createStore,compose, applyMiddleware} from 'redux'
import reducer from './reducers/reducer.js'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk';
import {BrowserRouter as Router} from 'react-router-dom'


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

ReactDOM.render(
<Provider store={store}>
<Router>
  <App />
</Router>
</Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
