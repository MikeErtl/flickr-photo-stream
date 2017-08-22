import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'

import store from '../state/store'
import {
  LOAD_LIVE_FEED,
  SET_VISIBILITY_FILTER,
  VisibilityFilters
} from '../state/actions'


import Browse from '../presentation/browse.jsx';


const BROWSECTRL = {};

(function() {

    /**
     * Render the feed
     */
    const displayLiveFeed = function () {

        //store.dispatch(loadLiveFeed());
        console.log("MIKE dispatched LOAD_LIVE_FEED..."); console.log(store.getState());
        
        let domSlot = document.getElementById('screens');
        let browseScreen = React.createElement(Browse);
        ReactDOM.render(browseScreen, domSlot);
    };

    /**
     * Called to enter the BROWSE screen
     */
    this.enter = function () {
        //console.log("MIKE State entering Browse screen..."); console.log(store.getState());
        displayLiveFeed();
    };
}).apply(BROWSECTRL);

export default BROWSECTRL;
