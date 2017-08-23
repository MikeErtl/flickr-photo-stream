import React from 'react';
import { connect } from 'react-redux';
import { loadMockFeed } from '../actions/actions';

/**
 * Loads photocards from the Flickr API
 * 
 */
let LoadFeed = ({ dispatch }) => {

    console.log("MIKE in LoadFeed dispatch(loadMockFeed)")
    dispatch(loadMockFeed());

    return null;
}
LoadFeed = connect()(LoadFeed)

export default LoadFeed
