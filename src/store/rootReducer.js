import { combineReducers } from 'redux'
import { authReducer } from './reducers/authReducer'
<<<<<<< HEAD
import { empresasReducer } from './reducers/empresasReducer'

export const rootReducer = combineReducers({
    auth: authReducer,
    empresas: empresasReducer

})
=======
import { empleadoempresaReducer } from './reducers/empleadoempresaReducer'

export const rootReducer = combineReducers({
    auth: authReducer,
    empleadosEmpresa: empleadoempresaReducer
})
>>>>>>> 509fb66def2058b9caae83ad70e3b9ce4c515695
