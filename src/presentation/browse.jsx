import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PhotoCard from './photocard.jsx';

import { Provider } from 'react-redux'; //MIKE temp get store via Provider to work
import store from '../state/store'; // MIKE temp

import './browse.css';


class Browse extends Component {
    constructor(props) {
        super(props);

        // // TODO: manage state in a redux store; and make this a stateless functional component.
        // this.state = { videos: this.props.videos };
        // this.loadMore = this.loadMore.bind(this);
    }

    render() {
        return (
            <Provider store={ store }>
                <div className="browse">
                    Mike Browser Screen
                    <PhotoCard 
                        title = "mike01"
                    />
                </div>
            </Provider>
        );
    }

}


Browse.propTypes = {
    //category: PropTypes.instanceOf(Category).isRequired,
    //signUpCb: PropTypes.func.isRequired,
    //signInCb: PropTypes.func.isRequired,
    //mockTitle: PropTypes.string
};

Browse.defaultProps = {
};

export default Browse;
