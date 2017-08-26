import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import { appendFeed } from '../actions/feedactions';
import store from '../store/store';

import Photocard from './photocard.jsx';

import './carousel.css';

/**
 * Carousel of Photocards. This Displays a list of Photocards which can be swiped left and right
 * Due to the need to catch end of scroll events, this is not a stateless component.
 * 
 */
class Carousel extends React.Component {  

    componentDidMount() {
        ReactDOM.findDOMNode(this.refs.carousel).addEventListener('scroll', this.listenScrollEvent);
    }

    componentWillUnmount() {
        ReactDOM.findDOMNode(this.refs.carousel).removeEventListener('scroll', this.listenScrollEvent);
    }

    listenScrollEvent(e) {
        if ( e.target.scrollLeft >= (e.target.scrollWidth - e.target.clientWidth)) {
            store.dispatch(appendFeed());
        }
    }

    render() {
        return(
            <span>
                <h1> Live Feed </h1> 
                <div className="photos-carousel" ref="carousel">
                    <div className="photos-carousel__inner"> 
                        {
                            this.props.photocards ? 
                            this.props.photocards.map(photocard =>
                                <Photocard
                                    key={photocard.id}
                                    {...photocard}
                                    onClick={() => this.props.onTitleClick(photocard.id)}
                                />
                            ) : null
                        }
                    </div> 
                </div>    
            </span>
        );
    }
};

Carousel.propTypes = {
    photocards: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        thumbnail: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        flickrPhotoUrl: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        flickrAuthorUrl: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired,
    }).isRequired).isRequired,
    onTitleClick: PropTypes.func,
    onAuthorClick: PropTypes.func
};

export default Carousel;
