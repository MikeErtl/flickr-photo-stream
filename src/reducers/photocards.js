import * as types from '../actions/actiontypes';  
import initialState from './initialstate';

export default function photocards(state = initialState.photocards, action) {  
    switch(action.type) {
        case types.LOAD_FEED_SUCCESS:
            return action.photocards

        case types.APPEND_FEED_SUCCESS:
            return action.photocards

        case types.ADD_TO_SAVED:
            return action.photocards; 
            
        case types.REMOVE_FROM_SAVED:
            return action.photocards; 

        default: 
            return state;
  }
}

