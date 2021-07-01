import { types } from "../types/types"

const initialState = {
    user: null,
    esEmpresa: false
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.setUser:
            return {
                ...state,
                user: action.payload
            }
        case types.clearUser:
            return {
                ...state,
                user: null
            }
        default:
            return {
                ...state
            }
    }
}