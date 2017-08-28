import React from 'react';  
import PropTypes from 'prop-types';
import {connect} from 'react-redux';  

import { addToSaved } from '../actions/feedactions';
import store from '../store/store';

import Carousel from '../components/carousel.jsx';

class CarouselLive extends React.Component {
    

    render() {
        const onSaveClick = (card)=> {
            console.log("Clicked save, this="); console.log(card);
            store.dispatch(addToSaved(card));
        }
        const photocards = this.props.photocards;
        return(
            <Carousel 
                title = "Live Feed"
                photocards={ photocards } 
                scrolledToEnd={ this.scrolledToEnd }
                onSaveClick={ onSaveClick }
                
            />
        )
    }
}

function mapStateToProps(state, ownProps) {
        return { 
            photocards: state.photocards 
        }
} 

CarouselLive.propTypes = {  
    photocards: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(CarouselLive);  