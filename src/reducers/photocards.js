import jsonp from 'jsonp';
import { connect } from 'react-redux';

const photocards = (state = [], action) => {

    const requestPosts = () => {
        console.log("MIKE-A4 requestPosts")

        const flickrFeedApi = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json';
        //let newState = [ ...state ];
        let flickrFeed = [];

        var requestPromise = new Promise(function(resolve, reject) {
            let cancelRequest = jsonp(
                flickrFeedApi,
                { name: 'jsonFlickrFeed' },
                (err, json) => {
                    if (err) {
                        reject(Error("Flickr API returned error: " + err.message));
                    }
                    else {
                        flickrFeed = json.items.map((item)=>{
                            return {
                                id: item.link, // No ID in Flickr item but link seems unique
                                title: item.title
                            }
                        });
                        console.log("MIKE-A4a fetchPostsRequest newFeed="); console.log(flickrFeed);
                        resolve(flickrFeed);
                    }
                }
            );
        });
        //newState = [...state, {id: 10, title: "Flickr10"}, {id: 11, title: "Flickr11"} ];
        //console.log ("MIKE newState="); console.log("newState")

        // return (dispatch) => {
        //     console.log("MIKE-A4b")
        //     return requestPromise.then(
        //         flickrFeed => dispatch(receivePostsSuccess(flickrFeed))
        //     );
        // };

        return requestPromise;
    }

    const receivePostsSuccess = (flickrFeed) => {
        console.log("MIKE-A5 receivePostsSuccess: "); console.log(flickrFeed)
    }

    switch (action.type) {

    case 'LOAD_MOCK_FEED':
        console.log("MIKE in reducers/photocards switch statement for LOAD_MOCK_FEED state="); console.log(state);
        return [{id: 1, title: "Mock1"}, {id: 2, title: "Mock2"} ];

        case 'REQUEST_POSTS':
        console.log("MIKE-A3 REDUCERS-photocards switch REQUEST_POSTS")
        requestPosts().then((json) => {
            console.log("MIKE-05"); console.log(json)
            //dispatch(receivePostsSuccess(json)); 
        });
        
        //return [{id: 1, title: "Mock1"}, {id: 2, title: "Mock2"} ];

        //requestPosts();

        // requestPosts().then((feed) => {
        //     console.log("MIKE-05"); console.log(feed);
        //     dispatch(receivePostsSuccess(feed));
        // })
        return state;


        case 'RECEIVE_POSTS_SUCCESS':
        return receivePostsSuccess();

    default:
        return state;
    }
}

export default photocards
