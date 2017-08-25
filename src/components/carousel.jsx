import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';  

import { loadFeed } from '../actions/feedactions';
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
        //console.log("Scroll event detected: " + e.target.scrollLeft + " out of " + e.target.scrollWidth + " and " + e.target.clientWidth);
        if ( e.target.scrollLeft >= (e.target.scrollWidth - e.target.clientWidth)) {
            console.log("BANG!");
            console.log(e);
            store.dispatch(loadFeed());
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

// function mapStateToProps(state, ownProps) {
//         return { scrolledToEnd: state.scrolledToEnd }
// } 

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
    //scrolledToEnd: PropTypes.func
};

export default Carousel;
//export default connect(mapStateToProps)(Carousel);  
