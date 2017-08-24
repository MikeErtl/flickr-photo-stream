import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import reducer from './reducers';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
//import { connect } from 'react-redux'

import registerServiceWorker from './registerServiceWorker';
import App from './components/App';

import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const store = createStore(
    reducer,
    applyMiddleware(thunk)
);

render(
    <Provider store={ store }>
        <App />
    </Provider>, 
    document.getElementById('root')
);


registerServiceWorker();
