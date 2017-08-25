import React from 'react';
import PropTypes from 'prop-types';
import {
    Row
} from 'react-bootstrap';

import Photocard from './photocard.jsx';

import './carousel.css';

/**
 * Carousel of Photocards. This Displays a list of Photocards which can be swiped left and right
 * 
 */

const Carousel = ({ photocards, onTitleClick, onAuthorClick }) => (

    <span>

        <h1> Live Feed </h1> 
        <Row className="photos-carousel">
             <div className="photos-carousel__inner"> 
                {
                    photocards ? 
                    photocards.map(photocard =>
                        <Photocard
                            key={photocard.id}
                            {...photocard}
                            onClick={() => onTitleClick(photocard.id)}
                        />
                    ) : null
                }
             </div> 
        </Row>    

    </span>
);

Carousel.propTypes = {
    photocards: PropTypes.arrayOf(PropTypes.shape({//TODO: make all required
        id: PropTypes.string.isRequired,
        thumbnail: PropTypes.string,
        title: PropTypes.string.isRequired,
        flickrPhotoUrl: PropTypes.string,
        author: PropTypes.string,
        flickrAuthorUrl: PropTypes.string,
        description: PropTypes.string,
        tags: PropTypes.string,
    }).isRequired).isRequired,
    onTitleClick: PropTypes.func,
    onAuthorClick: PropTypes.func
};

export default Carousel;
