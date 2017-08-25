import { combineReducers } from 'redux'
//import oldphotocards from './OLDphotocards'
import photocards from './photocards';
//import visibilityFilter from './visibilityfilter'

const rootReducer = combineReducers({
  //oldphotocards,
  photocards,
  //visibilityFilter
})

export default rootReducer
