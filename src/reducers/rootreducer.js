import { combineReducers } from 'redux'
//import photocards from './photocards'
import feedReducer from './feedreducer';
//import visibilityFilter from './visibilityfilter'

const rootReducer = combineReducers({
  //photocards,
  feedReducer,
  //visibilityFilter
})

export default rootReducer
