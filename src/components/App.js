import React from 'react'

import NavBar from './navbar.jsx';
import Carousel from './carousel.jsx';

import './App.css';

const App = () => (
  <div className="App">
    <NavBar />
    <Carousel 
        photocards={[{id:1, title:"Apple"},{id:2, title:"Banana"}]}
    />
  </div>
)

export default App
