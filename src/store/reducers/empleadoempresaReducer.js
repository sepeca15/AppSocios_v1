import { types } from "../types/types"

const initialState = {
    empleadosEmpresa: null,
    activeUser: null
}

export const empleadoempresaReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.getEmpleadosEmpresa:
        return {
                ...state,
                empleadosEmpresa: action.payload
            }
        default:
            return {
                ...state
            }
    }
}