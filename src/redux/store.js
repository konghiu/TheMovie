import  { createStore } from 'redux'
import combineStore from './store/combineStore'

const store = createStore(combineStore)

export default store