import { types } from "../types/types"


const initialState = {
    user: null,
    empresaData: null,
    modalOpen: false,
    modalData: null

}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.setUser:
            (action.payload.token) && localStorage.setItem("token", action.payload.token)
            return {
                ...state,
                user: action.payload
            }
        case types.setIsEmpresa:
            return {
                ...state,
                empresaData: action.payload
            }
        case types.loggout:
            return {
                ...state,
                user: null
            }
        case types.ModalOpen:
            return {
                ...state,
                modalOpen: action.payload.open,
                modalData: action.payload.data
            }
        default:
            return {
                ...state
            }
    }
}