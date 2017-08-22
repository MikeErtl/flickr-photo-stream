import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import BROWSECTRL from './containers/browsecontroller';

import NavBar from './presentation/navbar.jsx';

class App extends Component {
    
    componentDidMount(){
        // Enter the Browse screen
        BROWSECTRL.enter();
    }

  render() {
    return (
      <div className="App">
          <NavBar />
          <div id="screens"></div>
      </div>
    );
  }
}

export default App;
