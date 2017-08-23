import { combineReducers } from 'redux'
import photocards from './photocards'
import visibilityFilter from './visibilityfilter'

const photocardsApp = combineReducers({
  photocards,
  visibilityFilter
})

export default photocardsApp
