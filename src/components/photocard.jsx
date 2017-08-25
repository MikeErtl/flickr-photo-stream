import React from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazy-load';

import './photocard.css';

/**
 * A visual element containing a Flickr user's photo and associated metadata. Consists of: 
 *  photo, photoTitle (links to photo on Flickr),  author (links to author's Flickr page),
 *  description,  tags
 */
const Photocard = ({ 
    id, title, thumbnail, flickrPhotoUrl, author, flickrAuthorUrl, description, tags, photoCardInfo}) => {
    return (
        <div className="photocard">
            <div className="photocard__picture-frame">
                 <LazyLoad height={"100%"}> 
                    <img className="photocard__picture" src={ thumbnail } alt = "" />
                 </LazyLoad> 
            </div>
            <div className="photocard__title-author">
                <a href={ flickrPhotoUrl } >
                    { title } 
                </a>
                &nbsp;  by &nbsp;   
                <a href={ flickrAuthorUrl }>
                    { author } 
                </a>
            </div>
            <div className="photocard__description">
                { description }
            </div>
        </div>
    );                    
};

Photocard.propTypes = {
    id: PropTypes.string.isRequired,
    thumbnail: PropTypes.string,
    title: PropTypes.string.isRequired,
    flickrPhotoUrl: PropTypes.string,
    author: PropTypes.string,
    flickrAuthorUrl: PropTypes.string,
    description: PropTypes.string,
    tags: PropTypes.string,
};

export default Photocard;
