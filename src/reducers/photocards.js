import * as types from '../actions/actiontypes';  
import initialState from './initialstate';

// TODO rename photocards
export default function photocards(state = initialState.photocards, action) {  
    switch(action.type) {
        case types.LOAD_FEED_SUCCESS:
            console.log("MIKE photocards reducer action LOAD_FEED_SUCCESS action.photocards="); console.log(action.photocards)
            return action.photocards

        default: 
            return state;
  }
}