import FlickrApi from '../api/flickrapi';
import * as types from './actiontypes';
import store from '../store/store';

const MAX_NUM_ITEMS_IN_FEED_DISPLAY = 100;

export function loadFeed() {  
    return function(dispatch) {
        return FlickrApi.getNewFeed().then(photocards => {
            dispatch(loadFeedSuccess(photocards));
        }).catch(error => {
            throw(error);
        });
    };
}

export function appendFeed() {  
    return function(dispatch) {
        return FlickrApi.getNewFeed().then(photocards => {
            dispatch(appendFeedSuccess(photocards));
        }).catch(error => {
            throw(error);
        });
    };
}

export function appendFeedSuccess(photocards) { 
    let newLastItemId = photocards[photocards.length-1].id;
    let oldLastItemId = store.getState().photocards[store.getState().photocards.length-1].id;
    let combined;
    
    if (newLastItemId != oldLastItemId){
        // Different set so combine them
        combined = store.getState().photocards.concat(photocards);
        if (combined.length > MAX_NUM_ITEMS_IN_FEED_DISPLAY) {
            // Limit the feed on show
            combined = combined.slice(0,100);
        }
    } else {
        // Same stuff came back
        console.log("SAME STUFF")
        combined = photocards;
    }

    console.log("NEW SIZE=" + combined.length)
    //console.log("appedFeedSuccess "); console.log(combined); 
    return {type: types.APPEND_FEED_SUCCESS, photocards: combined};
}

export function loadFeedSuccess(photocards) { 
    return {type: types.LOAD_FEED_SUCCESS, photocards: photocards};
}
