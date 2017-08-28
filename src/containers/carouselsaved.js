import React from 'react';  
import PropTypes from 'prop-types';
import {connect} from 'react-redux';  

import { removeFromSaved } from '../actions/feedactions';
import store from '../store/store';

import SavedCarousel from '../components/savedcarousel.jsx';

class CarouselSaved extends React.Component {  
    render() {
        const onRemoveClick = (card)=> {
            store.dispatch(removeFromSaved(card));
        }
        
        const savedPhotocards = this.props.savedPhotocards;
        return(
            <SavedCarousel 
                title= "Saved Photos"
                savedPhotocards={ savedPhotocards } 
                onRemoveClick={onRemoveClick }
            />
        )
    }
}

function mapStateToProps(state, ownProps) {
        return { 
            savedPhotocards: state.savedPhotocards 
        }
} 

CarouselSaved.propTypes = {  
    savedPhotocards: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(CarouselSaved);  