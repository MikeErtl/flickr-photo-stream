import React, { Component } from 'react';
import PropTypes from 'prop-types';
import store from '../state/store'; // MIKE temp
import { connect } from 'react-redux'
//import { Provider } from 'react-redux'

import PhotoCard from './photocard.jsx';

//import { Provider } from 'react-redux'; //MIKE temp get store via Provider to work

import './browse.css';



const Browse = () => {
    return (
        <div className="browse">
            Mike Browser Screen
            <PhotoCard 
                title = "mike01"
            />
        </div>
    );    
}

export default Browse;

// class Browse extends Component {
//     constructor(props) {
//         super(props);

//         // // TODO: manage state in a redux store; and make this a stateless functional component.
//         // this.state = { videos: this.props.videos };
//         // this.loadMore = this.loadMore.bind(this);
//     }

//     render() {
//         return (
//             <div className="browse">
//                 Mike Browser Screen
//                 <PhotoCard 
//                     title = "mike01"
//                 />
//             </div>
//         );
//     }

// }


// Browse.propTypes = {
//     //category: PropTypes.instanceOf(Category).isRequired,
//     //signUpCb: PropTypes.func.isRequired,
//     //signInCb: PropTypes.func.isRequired,
//     //mockTitle: PropTypes.string
// };

// Browse.defaultProps = {
// };

// const mapStateToProps = state => {
//   return {
//     title : state.title
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     loadMockFeed : () => dispatch({
//       type : 'LOAD_MOCK_FEED'
//     })
//   }
// }

//console.log("MIKE before export in Browse store:"); console.log(store)

// export default connect(
//   mapStateToProps
//   //mapDispatchToProps
// )(Browse)



