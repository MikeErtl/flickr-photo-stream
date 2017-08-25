import * as types from '../actions/actiontypes';  
import initialState from './initialstate';

// TODO rename photocards
export default function photocards(state = initialState.photocards, action) {  
    switch(action.type) {
        case types.LOAD_FEED_SUCCESS:
            return action.photocards

        default: 
            return state;
  }
}