import React from 'react';
import ReactDOM from 'react-dom';
//import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import appReducers from './state/reducers'
//import { createStore } from 'redux'

//let store = createStore(appReducers);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
