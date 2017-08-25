import FlickrApi from '../api/flickrapi';
import * as types from './actiontypes';

export function loadFeed() {  
    return function(dispatch) {
        return FlickrApi.getNewFeed().then(photocards => {
            //console.log("MIKE-B1 feed dispatch to success..."); console.log(photocards)
            dispatch(loadFeedSuccess(photocards));
        }).catch(error => {
            throw(error);
        });
    };
}

export function loadFeedSuccess(photocards) {  
    console.log("MIKE-C1 success"); console.log(photocards);
    return {type: types.LOAD_FEED_SUCCESS, photocards};
}
