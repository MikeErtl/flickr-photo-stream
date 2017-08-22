const PHOTOCARDINFO = {};

(function() {

    PHOTOCARDINFO.create = (
        title, 
        flickrPhotoUrl,
        thumbnail,
        description,
        author,
        flickrAuthorUrl,
        tags
    ) => {
        return {
            title: title,
            flickrPhotoUrl: flickrPhotoUrl,
            thumbnail: thumbnail,
            description: description,
            author: author,
            flickrAuthorUrl: flickrAuthorUrl,
            tags: tags
        }       
    }
}).apply(PHOTOCARDINFO);

export default PHOTOCARDINFO;