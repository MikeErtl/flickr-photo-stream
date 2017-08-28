import * as types from '../actions/actiontypes';  
import initialState from './initialstate';

export default function savedPhotocards(state = initialState.savedPhotocards, action) {  
    switch(action.type) {
        case types.ADD_TO_SAVED:
            return action.savedPhotocards;

        case types.REMOVE_FROM_SAVED:
            return action.savedPhotocards

        default: 
            return state;
  }
}