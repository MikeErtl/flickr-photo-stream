import appReducers from './reducers'
import { createStore } from 'redux'

const store = createStore(appReducers);

export default store;

