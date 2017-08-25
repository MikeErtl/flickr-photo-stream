import React, {PropTypes} from 'react';  
import {connect} from 'react-redux';  
import * as feedActions from '../actions/feedactions';

import Carousel from '../components/carousel.jsx';

class CarouselPage extends React.Component {  

//    componentWillMount() {
//        if (this.props.photocards[0].id == '') {
//            this.props.actions.loadFeed();
//        }
//    }
    

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
        return { photocards: state.feedReducer }
    }
    else {
        return {photocards : [{id:0, title:"DEFAULT"}]};
    }
} 

CarouselPage.propTypes = {  
    photocards: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(CarouselPage);  