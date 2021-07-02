import { combineReducers } from 'redux'
import { authReducer } from './reducers/authReducer'
import { empresasReducer } from './reducers/empresasReducer'
import { empleadoempresaReducer } from './reducers/empleadoempresaReducer'

export const rootReducer = combineReducers({
    auth: authReducer,
    empresas: empresasReducer,
    empleadosEmpresa: empleadoempresaReducer

})

