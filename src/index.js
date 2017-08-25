import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import reducer from './reducers/rootreducer';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import registerServiceWorker from './registerServiceWorker';
import App from './containers/App';
import { loadFeed } from './actions/feedactions';

import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = createStore(
    reducer,
    applyMiddleware(thunk)
);

// Load a page of flickr photos by default at the start
store.dispatch(loadFeed());

render(
    <Provider store={ store }>
        <App />
    </Provider>, 
    document.getElementById('root')
);

registerServiceWorker();
