import React from 'react'

import CarouselLive from '../containers/carousellive.js';
import CarouselSaved from '../containers/carouselsaved.js';

import NavBar from '../components/navbar.jsx';

const App = () => (
  <div>
    <NavBar />
    <CarouselLive /> 
    <CarouselSaved />  
  </div>
)

export default App
