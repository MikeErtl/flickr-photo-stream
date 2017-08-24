
const photocards = (state = [], action) => {



    const appendFlickrFeed = () => {

        //const flickrFeedApi = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json';
        // var xhr = new XMLHttpRequest();
        // xhr.open('GET', flickrFeedApi);
        // xhr.onload = function() {
        //     if (xhr.status === 200) {
        //         alert('good status 200 ' + xhr.responseText);
        //     }
        //     else {
        //         alert('Request failed.  Returned status of ' + xhr.status);
        //     }
        // };
        // xhr.send();

        console.log("MIKE call createCrossDomainRequest")

        let newState = [...state, {id: 10, title: "Flickr10"}, {id: 11, title: "Flickr11"} ];
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
