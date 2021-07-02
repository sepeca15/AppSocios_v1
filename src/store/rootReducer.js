import { combineReducers } from 'redux'
import { authReducer } from './reducers/authReducer'
import { empleadoempresaReducer } from './reducers/empleadoempresaReducer'

export const rootReducer = combineReducers({
    auth: authReducer,
    empleadosEmpresa: empleadoempresaReducer
})
