import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'

import store from '../state/store'

import Browse from '../presentation/browse.jsx';


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
        console.log("MIKE State entering Browse screen..."); console.log(store.getState());
        displayFeed();
    };
}).apply(BROWSECTRL);

export default BROWSECTRL;
