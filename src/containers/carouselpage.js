import React from 'react';  
import PropTypes from 'prop-types';
import {connect} from 'react-redux';  

import Carousel from '../components/carousel.jsx';

class CarouselPage extends React.Component {  
    scrolledToEnd = () => {
        console.log("Callback scrolled to end ");
    }
     
    render() {
        const photocards = this.props.photocards;
        //console.log("render this:"); console.log(this.scrolledToEnd)
        return(
            <Carousel 
                photocards={ photocards } 
                scrolledToEnd={ this.scrolledToEnd }
            />
        )
    }
}

function mapStateToProps(state, ownProps) {
        return { photocards: state.photocards }
} 

CarouselPage.propTypes = {  
    photocards: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(CarouselPage);  