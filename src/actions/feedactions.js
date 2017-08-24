import FlickrApi from '../api/flickrapi';
import * as types from './actiontypes';

export function loadFeed() {  
    return function(dispatch) {
        return FlickrApi.getNewFeed().then(feed => {
            console.log("MIKE-B1 feed dispatch to success..."); console.log(feed)
            dispatch(loadFeedSuccess(feed));
        }).catch(error => {
            throw(error);
        });
    };
}

export function loadFeedSuccess(feed) {  
  return {type: types.LOAD_FEED_SUCCESS, feed};
}
