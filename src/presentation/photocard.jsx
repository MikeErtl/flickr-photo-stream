import React from 'react';
import PropTypes from 'prop-types';

//import PhotoCardInfo from './photocardinfo'; 

/**
 * A visual element containing a Flickr user's photo and associated metadata. Consists of: 
 *  photo, photoTitle (links to photo on Flickr),  author (links to author's Flickr page),
 *  description,  tags
 */
const PhotoCard = ({ 
    title, thumbnail, flickrPhotoUrl, author, flickrAuthorUrl, descriptionHtml, tags, photoCardInfo}) => {
    return (
        <div className="photo-card">
            - In PhotoCard -
            Title: {title}
        </div>
    );                    
};

PhotoCard.propTypes = {
   thumbnail: PropTypes.string,
    title: PropTypes.string,
    flickrPhotoUrl: PropTypes.string,
    author: PropTypes.string,
    flickrAuthorUrl: PropTypes.string,
    descriptionHtml: PropTypes.string,
    tags: PropTypes.string,
    //photoCardInfo: PropTypes.instanceOf(PhotoCardInfo)
};

export default PhotoCard;
