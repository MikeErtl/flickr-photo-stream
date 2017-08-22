import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import store from './state/store'; //MIKE see browse.js 
import { Provider } from 'react-redux'

import BROWSECTRL from './containers/browsecontroller';


import NavBar from './presentation/navbar.jsx';

class App extends Component {
    
    componentDidMount(){
        // Enter the Browse screen
        BROWSECTRL.enter();
    }

  render() {
    return (
        <Provider store={ store }>
        <div className="App">
            <NavBar />
            <div id="screens"></div>
        </div>
        </Provider>
    );
  }
}

export default App;

