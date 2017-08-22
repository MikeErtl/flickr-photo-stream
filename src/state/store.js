import appReducers from './reducers'
import { createStore } from 'redux'

let store = createStore(appReducers);

export default store;
