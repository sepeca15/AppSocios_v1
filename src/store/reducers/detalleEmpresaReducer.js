import { types } from "../types/types"

const initialState = {
    detallesDeEmpresaActual: null,
    departamento: null
}

export const detalleEmpresaReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.detalleEmpresa:
            return {
                ...state,
                detallesDeEmpresaActual: action.payload.empresa,
                departamento: action.payload.departamento
            }
        default:
            return {
                ...state
            }
    }
}