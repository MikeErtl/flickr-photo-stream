
import jsonp from 'jsonp';

const photocards = (state = [], action) => {

    const appendFlickrFeed = () => {

        const flickrFeedApi = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json';
        let newState = [];

        let cancelRequest = jsonp(
            flickrFeedApi,
            { name: 'jsonFlickrFeed' },
            (err, json) => {
                if (err) {
                    alert("Flickr API returned error: " + err.message);
                }
                else {
                    console.log("MIKE json.items "); console.log(json.items);
                    newState = [ ...state, json.items.map( (flickrItem) => {
                        return {
                            id: flickrItem.link, // No ID in Flickr item but link seems unique
                            title: flickrItem.title
                        }
                    })];
                }
            }
        );

        //newState = [...state, {id: 10, title: "Flickr10"}, {id: 11, title: "Flickr11"} ];
        console.log ("MIKE newState="); console.log("newState")
        return newState;
    }

    switch (action.type) {

    case 'LOAD_MOCK_FEED':
        console.log("MIKE in reducers/photocards switch statement for LOAD_MOCK_FEED state="); console.log(state);
        return [{id: 1, title: "Mock1"}, {id: 2, title: "Mock2"} ];

        case 'LOAD_FLICKR_FEED':
        return appendFlickrFeed();

    default:
        return state;
    }
}

export default photocards
