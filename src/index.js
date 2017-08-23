import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import reducer from './state/reducers'
import { createStore } from 'redux'

const store = createStore(reducer);

render(
    <Provider store={ store }>
        <App />
    </Provider>, 
    document.getElementById('root')
);

registerServiceWorker();
