import React from 'react';  
import PropTypes from 'prop-types';
import {connect} from 'react-redux';  

import Carousel from '../components/carousel.jsx';

class CarouselPage extends React.Component {  
    render() {
        const photocards = this.props.photocards;
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