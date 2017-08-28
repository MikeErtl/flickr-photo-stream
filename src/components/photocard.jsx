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
                 <LazyLoad 
                    height={"100%"}
                    offset={1500}
                > 
                    <img 
                        className="photocard__picture" 
                        src={ thumbnail } 
                        alt = "" />
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
            { tags ? 
            <div className="photocard__tags">
                <span className="photocard__tags_title"> Tags: </span> 
                { tags }
            </div>
            : null }
            
        </div>
    );                    
};

Photocard.propTypes = {
    id: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    flickrPhotoUrl: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    flickrAuthorUrl: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
};

export default Photocard;
