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
                            /* Find name inside "" */
                            let author = item.author.match( /"(.*?)"/ )[1]; 
                            /* Remove last folder of link */ 
                            let tokens = item.link.split('/');
                            tokens.splice(-2,1); 
                            let authorUrl = tokens.join('/');
                            let description = ""; /* Couldn't see anything useful in description */ 
                            
                            return {
                                id: item.link, // No ID in Flickr item but link seems unique
                                title: item.title,
                                thumbnail: item.media.m,
                                author: author,
                                flickrPhotoUrl: item.link,
                                flickrAuthorUrl: authorUrl,
                                description: description,
                                tags: item.tags
                            }
                        });
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

