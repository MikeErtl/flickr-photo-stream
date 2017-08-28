import React from 'react';  
import PropTypes from 'prop-types';
import {connect} from 'react-redux';  

import Carousel from '../components/carousel.jsx';

class CarouselSaved extends React.Component {  
    render() {
        const onRemoveClick = ()=> {
            console.log("Clicked remove")
        }
        
        const photocards = this.props.photocards;
        return(
            <Carousel 
                title= "Saved Photos"
                photocards={ photocards } 
                onRemoveClick={onRemoveClick }
            />
        )
    }
}

function mapStateToProps(state, ownProps) {
        return { photocards: state.savedPhotocards }
} 

CarouselSaved.propTypes = {  
    photocards: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(CarouselSaved);  