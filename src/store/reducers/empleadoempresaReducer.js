import { types } from "../types/types";

const initialState = {
  empleadosEmpresa: null,
  activeEmpleado: null,
};

export const empleadoempresaReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.getEmpleadosEmpresa:
      return {
        ...state,
        empleadosEmpresa: action.payload,
      };
    case types.busquedaEmpleadoText:
      return { ...state, empleadosEmpresa: action.payload };
    case types.addUIEmpleado:
      return {
        ...state,
        empleadosEmpresa: [...state.empleadosEmpresa, action.payload],
      };
    case types.removeEmpleado:
      console.log(state.empleadosEmpresa);
      return {
        ...state,
        empleadosEmpresa: state.empleadosEmpresa.filter((e) =>  
            e.user.id !== action.payload.user && e.user.cargo !== action.payload.cargo
          ),
      }; 
    case types.activeEmpleado:
      return {
        ...state,
        activeEmpleado: action.payload
      };
    case types.clearActiveEmpleado:
      return {
        ...state,
        activeEmpleado: null
      };
    default:
      return {
        ...state,
      };
  }
};
