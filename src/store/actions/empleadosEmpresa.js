import Swal from "sweetalert2";
import { fetchConToken } from "../../helpers/fetch";
import { types } from "../types/types";


const empleadoEmpresa = (empresas) => {
    return {
        type: types.getEmpleadosEmpresa,
        payload: empresas
    }
}
const addUIEmpleado = (empleado) => {
    return {
        type: types.addUIEmpleado,
        payload: empleado
    }
}
const getEmpleadoSearch = (empleadosEmpresa) => {
    return { payload: empleadosEmpresa, type: types.busquedaEmpleadoText }
}

const getbusquedaEmpleadoSearchText = (data, id) => 
{
   if(localStorage.getItem('empresaActive')){
    id = localStorage.getItem('empresaActive')
   }
    return async (dispatch) => {
        try {
            const resp = await fetchConToken("http://localhost:5000/empleados/search/", {text: data, empresa: id} , "POST");
            const body = await resp.json();
            if (body.ok) {
                dispatch(getEmpleadoSearch(body.empleados))
            } else {
                console.log(body);
            }
        } catch (error) {
            Swal.fire("Error", "No se pudo hacer su accion "+ data +", contacte con el desarrollador", "error");
        }

    }
}

const getEmpleadosEmpresa = (idempresa) => {
    if(!idempresa){
        idempresa = localStorage.getItem('empresaActive')
    }
    return async (dispatch) => {
        try {
            /* Cambiar id */
            const res = await fetchConToken("http://localhost:5000/empleados/" + idempresa);
            const body = await res.json();
            if (body.ok === true) {
                dispatch(empleadoEmpresa(body.empleados))
            } else {
                Swal.fire("No hay usuarios", "No se pudo insertar el usuario", "error");
            }
        } catch (error) {
            Swal.fire("Error", "No se pudo hacer su accion, contacte con el desarrollador", "error");
        }
    }
}
const postempleadoEmpresa = (form) => {
    return async (dispatch, getState) => {
        var { id } = getState().auth?.user?.empresaAdmin;
        if (!id) {
            id = localStorage.getItem("empresaActive")
        }
        try {
            const resp = await fetchConToken("http://localhost:5000/empleados/newempleado", { ...form, empresa: id }, "POST");
            const body = await resp.json();
            if (body.ok) {
                Swal.fire({
                    title: "Se a??adio correctamente",
                    text: "La empresa se agrego " + form.name + " correctamente",
                    type: "success",
                });
                dispatch(addUIEmpleado(body.user))
            } else {
                Swal.fire("Error al agregar ", body.msg, "error");
            }
        } catch (error) {
            Swal.fire("Error", "No se pudo hacer su accion, contacte con el desarrollador", "error");
        }


    }
}
const editEmpleadoEmpresa = (form) => {
    return async (dispatch) => {
        try {
            const resp = await fetchConToken("http://localhost:5000/empleados/updateempleado", { cargo: form.cargo, empresa: form.empresa, user: form.id, estado: form.estado }, "PUT");
            const body = await resp.json();
            if (body.ok) {
                const carg = form.cargo;
                const emp = form.empresa;
                delete form.cargo
                delete form.empresa
                const resp1 = await fetchConToken("http://localhost:5000/user/" + form.id, { ...form }, "PUT");
                const body1 = await resp1.json();
                if (body1.ok) {
                    Swal.fire({
                        title: "Datos editados",
                        text: "El empleado fue editado correctamente",
                        type: "success",
                    });
                    dispatch({ type: types.putEmpleadosEmpresa, payload: { ...form, empresa: emp, cargo: carg } })
                } else {
                    Swal.fire("No se pudo editar", body.msg, "error");
                }
            } else {
                Swal.fire("Error", body.msg, "error");
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
            const resp = await fetchConToken("http://localhost:5000/empleados/", { ...empleado }, "DELETE");
            const resp2 = await fetchConToken("http://localhost:5000/user/" + empleado.user, {}, "DELETE");
            const body = await resp.json();
            const body1 = await resp2.json();
            if (body.ok) {
                Swal.fire({
                    title: "Se elimino correctamente",
                    type: "success",
                });
                dispatch({ type: types.removeEmpleado, payload: empleado })
                /* alert(empleado.user) */
            } else {
                Swal.fire("No se pudo eliminar", body.msg, "error");
            }
        } catch (error) {
            Swal.fire("Error", "No se pudo hacer su accion, contacte con el desarrollador", "error");
        }

    }
}


export { getEmpleadosEmpresa, postempleadoEmpresa, eliminarEmpleado, editEmpleadoEmpresa, getbusquedaEmpleadoSearchText }