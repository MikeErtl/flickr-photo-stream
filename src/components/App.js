import React from 'react'

import NavBar from './navbar.jsx'; //TODO: make a container
import Carousel from './carousel.jsx'; //MIKE remove

import VisibleCarousel from '../containers/visiblecarousel';
import LoadFeed from '../containers/loadfeed';

import './App.css';

const App = () => (
  <div className="App">
    <LoadFeed />
    <NavBar />
    <VisibleCarousel />    
  </div>
)

export default App
