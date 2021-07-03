import { types } from "../types/types"

const initialState = {
   detallesDeEmpresaActual: null
}

export const detalleEmpresaReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.detalleEmpresa:
            return {
                ...state,
                detallesDeEmpresaActual: action.payload
            }
        default:
            return {
                ...state
            }
    }
}