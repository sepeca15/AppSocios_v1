import { types } from "../types/types"


const initialState = {
    user: null,
    esEmpresa: false,
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.setUser:
            (action.payload.token) && localStorage.setItem("token", action.payload.token)
            return {
                ...state,
                user: action.payload
            }
        case types.loggout:
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