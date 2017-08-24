import jsonp from 'jsonp';

class FlickrApi {  
    static getNewFeed() {

        var requestFeedPromise = new Promise(function(resolve, reject) {
            const flickrFeedApi = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json';
            let flickrFeed = [];

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
                        // console.log("MIKE-A4a fetchPostsRequest newFeed="); console.log(flickrFeed);
                        resolve(flickrFeed);
                    }
                }
            );
        });

        return requestFeedPromise.then(response => {
            return response;
        }).catch(error => {
            return error;
        });
    }
}
export default FlickrApi;  

