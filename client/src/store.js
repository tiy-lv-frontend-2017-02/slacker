import {createStore} from 'redux'
import messagingReducer from './reducers/messaging'

const store = createStore(messagingReducer)

export default store