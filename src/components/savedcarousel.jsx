import React from 'react';
import PropTypes from 'prop-types';
//import ReactDOM from 'react-dom';

//import { appendFeed } from '../actions/feedactions';
//import store from '../store/store';

import Photocard from './photocard.jsx';

import './carousel.css';

/**
 * Carousel of Photocards. This Displays a list of Photocards which can be swiped left and right
 * Due to the need to catch end of scroll events, this is not a stateless component.
 * 
 */
class SavedCarousel extends React.Component {  
    render() {
        return(
            <span>
                <h3 className="photos-carousel__h3"> 
                    { this.props.title }
                </h3> 
                <div className="photos-carousel" ref="carousel">
                    <div className="photos-carousel__inner"> 
                        {
                            this.props.savedPhotocards ? 
                            this.props.savedPhotocards.map(savedPhotocard =>
                                <Photocard
                                    key={ savedPhotocard.id }
                                    {...savedPhotocard}
                                    onRemoveClick ={ this.props.onRemoveClick } 
                                />
                            ) : null
                        }
                    </div> 
                </div>    
            </span>
        );
    }
};

SavedCarousel.propTypes = {
    savedPhotocards: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        thumbnail: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        flickrPhotoUrl: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        flickrAuthorUrl: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired,
    }).isRequired).isRequired,
    
    title: PropTypes.string
};

export default SavedCarousel;
