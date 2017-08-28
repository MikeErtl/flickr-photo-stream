import { combineReducers } from 'redux'
import photocards from './photocards';
import savedPhotocards from './savedphotocards';

const rootReducer = combineReducers({
  photocards,
  savedPhotocards 
})

export default rootReducer
