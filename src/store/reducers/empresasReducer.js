import { types } from "../types/types"

const initialState = {
    empresas: null,
    activeEmpresa: null
}

export const empresasReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.getactiveEmpresa:

            return {}
        case types.getEmpresas:

            return { ...state, empresas: action.payload }
        case types.createEmpresas:

            return { ...state, }
        case types.updateEmpresas:

            return { ...state, }
        case types.deletEmpresas:

            return { ...state, }
        default:
            return {
                ...state
            }
    }
}