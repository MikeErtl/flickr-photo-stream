import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import reducer from './reducers';
import { createStore } from 'redux';
import { connect } from 'react-redux'

import registerServiceWorker from './registerServiceWorker';
import App from './components/App';

import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const store = createStore(reducer);

render(
    <Provider store={ store }>
        <App />
    </Provider>, 
    document.getElementById('root')
);


registerServiceWorker();
