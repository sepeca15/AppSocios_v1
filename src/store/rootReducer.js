import { combineReducers } from 'redux'
import { authReducer } from './reducers/authReducer'
import { empresasReducer } from './reducers/empresasReducer'

export const rootReducer = combineReducers({
    auth: authReducer,
    empresas: empresasReducer

})