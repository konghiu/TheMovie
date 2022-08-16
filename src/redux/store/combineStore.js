import { combineReducers } from 'redux'
import storeAccount from './storeAccount/storeAccount'
import storeGetData from './storeGetData/storeGetData'
import storeRouter from './storeRouter/storeRouter'
import storeInfoTicket from './storeStickets/storeInfoTicket'

const combineStore = combineReducers({
     storeRouter: storeRouter,
     storeGetData: storeGetData,
     storeInfoTicket: storeInfoTicket,
     storeAccount: storeAccount
})

export default combineStore
