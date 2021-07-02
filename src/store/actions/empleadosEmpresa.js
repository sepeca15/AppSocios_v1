import Swal from "sweetalert2";
import { fetchConToken } from "../../helpers/fetch";
import { types } from "../types/types";


const empleadoEmpresa = (empresas) => {
    return {
        type: types.getEmpleadosEmpresa ,
        payload: empresas
    }
}
/* const postempleadoEmpresa = (empresas) => {
    return {
        type: types.postempleadoEmpresa ,
        payload: empresas
    }
}
 */

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
const postempleadoEmpresa = (form) => {
    return async (dispatch) => {
        try {
            const resp = await fetchConToken("http://localhost:5000/empleados/newempleado", {...form}, "POST");
            const body = await resp.json();
            /* falta empresa 1 */
            /* const resp2 = await fetchConToken("http://localhost:5000/empleados/newempleado", {...form, resp.user.id}, "POST"); */
            
            if (body.ok) {
                Swal.fire({
                    title: "Se añadio correctamente",
                    text: "La empresa se agrego "+ form.name +" correctamente",
                    type: "success",
                });
                console.log(body.NewUserCreated);
            } else {
                Swal.fire("Error Empresas", body.msg, "error");
            }
        } catch (error) {
            console.log(error);
            Swal.fire("Error", "No se pudo hacer su accion, contacte con el desarrollador", "error");
        }

    }
}

export { getEmpleadosEmpresa, postempleadoEmpresa } 