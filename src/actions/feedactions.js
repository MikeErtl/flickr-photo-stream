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

export function appendFeedSuccess(newPhotocards) { 

    let oldPhotocards = store.getState().photocards;
    let combinedPhotocards;
    let filteredNewPhotocards;

    const isUnique = (item, arr) =>{
        let unique = true;
        for (let i = 0; i< arr.length; i++){
            if (arr[i].id === item.id){
                unique = false;
                break;
            }
        }
        return unique;
    };

    const filterDuplicates = (photocard) => {
        return isUnique(photocard, oldPhotocards)
    };

    filteredNewPhotocards = newPhotocards.filter(filterDuplicates);
    combinedPhotocards = oldPhotocards.concat(filteredNewPhotocards);
    // Keep size down to max limit
    if (combinedPhotocards.length > MAX_NUM_ITEMS_IN_FEED_DISPLAY) {
        combinedPhotocards = combinedPhotocards.slice(0, MAX_NUM_ITEMS_IN_FEED_DISPLAY);
    }
    
    return {type: types.APPEND_FEED_SUCCESS, photocards: combinedPhotocards};
}

export function loadFeedSuccess(photocards) {     
    return {type: types.LOAD_FEED_SUCCESS, photocards: photocards};
}

export function addToSaved(photocard) { 
    let savedPhotocards = store.getState().savedPhotocards.concat([photocard]);

    return {type: types.ADD_TO_SAVED, savedPhotocards: savedPhotocards};
}

export function removeFromSaved(photocard) { 
    // The concat is to ensure a new array is returned
    let savedPhotocards = store.getState().savedPhotocards.concat([]);
    let i;

    for (i=0; i<savedPhotocards.length; i++){
        if (savedPhotocards[i].id === photocard.id) {
            savedPhotocards.splice(i, 1);
            break;
        }
    }

    return {type: types.REMOVE_FROM_SAVED, savedPhotocards: savedPhotocards};
}
