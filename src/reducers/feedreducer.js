import * as types from '../actions/actiontypes';  
import initialState from './initialstate';

export default function feedReducer(state = initialState.photocards, action) {  
    switch(action.type) {
        case types.LOAD_FEED_SUCCESS:
            console.log("MIKE feedreducer action LOAD_FEED_SUCCESS action.photocards="); console.log(action.photocards)
            return action.photocards

        default: 
            return state;
  }
}