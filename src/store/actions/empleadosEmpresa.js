import Swal from "sweetalert2";
import { fetchConToken } from "../../helpers/fetch";
import { types } from "../types/types";


const empleadoEmpresa = (empresas) => {
    return {
        type: types.getEmpleadosEmpresa ,
        payload: empresas
    }
}
const addUIEmpleado = (empleado) => {
    return {
        type: types.addUIEmpleado ,
        payload: empleado
    }
}
const getEmpleadoSearch = (empleadosEmpresa) => {
    return {payload: empleadosEmpresa, type:types.busquedaEmpleadoText}
}

const getbusquedaEmpleadoSearchText = (data) => {
    return async (dispatch) => {
        try {
            const resp = await fetchConToken("http://localhost:5000/user/search/" + data);
            const body = await resp.json();
            if (body.ok) {
                console.log(body);
                dispatch(getEmpleadoSearch(body.usuarios))
                console.log(data);
            } else {
                console.log(body);
            }
        } catch (error) {
            console.log(error);
            Swal.fire("Error", "No se pudo hacer su accion"+ data +", contacte con el desarrollador", "error");
        }

    }
}

const getEmpleadosEmpresa = (idempresa) => {
    return async (dispatch) => {
        try {
            /* Cambiar id */
            const res = await fetchConToken("http://localhost:5000/empleados/"+ idempresa);
            const body = await res.json();
            if (body.ok === true) {
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
             if (body.ok) {
                Swal.fire({
                    title: "Se añadio correctamente",
                    text: "La empresa se agrego "+ form.name +" correctamente",
                    type: "success",
                });
                dispatch(addUIEmpleado(body.user))
            } else {
                Swal.fire("Error Empresas", body.msg, "error");
            }
        } catch (error) {
            console.log(error);
            Swal.fire("Error", "No se pudo hacer su accion, contacte con el desarrollador", "error");
        }

    }
}
const editEmpleadoEmpresa = (userid, form) => {
    return async (dispatch) => {
        try {
            const resp = await fetchConToken("http://localhost:5000/user/"+ userid, form, "PUT");
            const body = await resp.json();
            
            if (body.ok) {
                Swal.fire({
                    title: "Se EDITO",
                    text: "La empresa se EDITO correctamente",
                    type: "success",
                });
            } else {
                Swal.fire("Error edit", body.msg, "error");
            }
        } catch (error) {
            console.log(error);
            Swal.fire("Error", "No se pudo hacer su accion, contacte con el desarrollador", "error");
        }

    }
}
const eliminarEmpleado = (empleado) => {
    return async (dispatch) => {
        try {
            const resp = await fetchConToken("http://localhost:5000/empleados/", {...empleado}, "DELETE");
            const resp2 = await fetchConToken("http://localhost:5000/user/"+ empleado.user, {}, "DELETE");
            const body = await resp.json();
            if (body.ok) {
                Swal.fire({
                    title: "Se elimino correctamente" + body,
                    type: "success",
                });
                dispatch({type: types.removeEmpleado, payload: empleado})
                /* alert(empleado.user) */
            } else {
                Swal.fire("Error Empresas", body.msg, "error");
            }
        } catch (error) {
            console.log(error);
            Swal.fire("Error", "jdsjdjdjNo se pudo hacer su accion, contacte con el desarrollador", "error");
        }

    }
}
 

export { getEmpleadosEmpresa, postempleadoEmpresa, eliminarEmpleado, editEmpleadoEmpresa, getbusquedaEmpleadoSearchText } 