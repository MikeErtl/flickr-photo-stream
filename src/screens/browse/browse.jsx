import React from 'react';
import PropTypes from 'prop-types';

import PhotoCard from './photocard.jsx';


const Browse = () => {
    return (
        <div className="browse">
            Mike Browser Screen
            <PhotoCard 
                title = "mike01"
            />
        </div>
    );
};

Browse.propTypes = {
    //category: PropTypes.instanceOf(Category).isRequired,
    //signUpCb: PropTypes.func.isRequired,
    //signInCb: PropTypes.func.isRequired,
    //mockTitle: PropTypes.string
};

Browse.defaultProps = {
};

export default Browse;
