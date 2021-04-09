import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import catsReducer from './reducers/catsReducer.js';
import thunk from 'redux-thunk'

const store = createStore(catsReducer, applyMiddleware(thunk))

ReactDOM.render(
    <Provider>
        <App store={store}/>
    </Provider>
    ,
    document.getElementById('root')
);
