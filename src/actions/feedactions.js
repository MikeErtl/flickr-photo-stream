import FlickrApi from '../api/flickrapi';
import * as types from './actiontypes';

export function loadFeed() {  
    return function(dispatch) {
        return FlickrApi.getNewFeed().then(photocards => {
            dispatch(loadFeedSuccess(photocards));
        }).catch(error => {
            throw(error);
        });
    };
}

export function loadFeedSuccess(photocards) {  
    return {type: types.LOAD_FEED_SUCCESS, photocards};
}
