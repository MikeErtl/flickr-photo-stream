import React from 'react'

import CarouselPage from '../containers/carouselpage.js'; //MIKE this is backward should start container

import NavBar from '../components/navbar.jsx'; //TODO: make a container

//import VisibleCarousel from '../containers/visiblecarousel';
//import LoadFeed from '../containers/loadfeed';

//import './App.css'; TODO: wrap a new app.jsx

const App = () => (
  <div className="App">
    {/* <LoadFeed /> */}
    <NavBar />
    <CarouselPage />
    {/* <VisibleCarousel />     */}
  </div>
)

export default App
