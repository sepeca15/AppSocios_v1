import Swal from "sweetalert2";
import { fetchConToken } from "../../helpers/fetch";
import { types } from "../types/types";

const getEmpleadosEmpresa = (idempresa) => {
    return async (dispatch) => {
        try {
            /* Cambiar id */
            const res = await fetchConToken("http://localhost:5000/empleados/1");
            const body = await res.json();
            if (body.ok == true) {
                /* Si la respuesta es positiva */
                /* body.empleados */
                dispatch(empleadoEmpresa(body.empleados))
            } else {
                Swal.fire("No hay usuarios", "No se pudo insertar el usuario", "error");
            }
        } catch (error) {
            console.log(error);
            Swal.fire("Error", "No se pudo hacer su accion, contacte con el desarrollador", "error");
        }
    }
}

const empleadoEmpresa = (empresas) => {
    return {
        type: types.getEmpleadosEmpresa ,
        payload: empresas
    }
}

export { getEmpleadosEmpresa } 