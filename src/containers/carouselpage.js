import React from 'react';  
import PropTypes from 'prop-types';

import {connect} from 'react-redux';  

import Carousel from '../components/carousel.jsx';

class CarouselPage extends React.Component {  

    render() {
        const photocards = this.props.photocards;
        console.log("render in CarouselPage this.props:"); console.log(this.props)
        return(
            <Carousel photocards={ photocards } />
        )
    }
}

function mapStateToProps(state, ownProps) {
    console.log("MIKE mapStateToProps state,ownProps"); console.log(state); console.log(ownProps);
    if (state.photocards){
        return { photocards: state.photocards }
    }
    else {
        return {photocards : [{id:0, title:"DEFAULT"}]};
    }
} 

CarouselPage.propTypes = {  
    photocards: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(CarouselPage);  