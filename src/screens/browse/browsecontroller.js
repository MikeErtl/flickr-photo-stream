import React from 'react';
import ReactDOM from 'react-dom';

//import MOCKPHOTOCARD from './mockphotocard';
import PhotoCardInfo from './photocardinfo';

import Browse from './browse.jsx';

import './browse.css';

const BROWSECTRL = {};

(function() {

    /**
     * Render the feed
     */
    const displayFeed = function () {

        
        let domSlot = document.getElementById('screens');
        let browseScreen = React.createElement(Browse);
        ReactDOM.render(browseScreen, domSlot);
    };

    /**
     * Called to enter the BROWSE screen
     */
    this.enter = function () {
        displayFeed();
    };
}).apply(BROWSECTRL);

export default BROWSECTRL;
