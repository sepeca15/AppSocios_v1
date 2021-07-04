import { fetchConToken } from "../../helpers/fetch"
import { types } from "../types/types"
import Swal from "sweetalert2"

const getEmpresas = (empresas) => {
    return { payload: empresas, type: types.getEmpresas }
}
const getEmpresasSearch = (empresas) => {
    return { payload: empresas, type: types.busquedaEmpresaText }
}

const getEmpresaActive = (idempresa) => {
    return async (dispatch) => {
        try {
            const res = await fetchConToken("http://localhost:5000/empresas/getdataEmpresa/" + idempresa);
            const body = await res.json();
            if (body.ok === true) {
                dispatch({
                    type: types.detalleEmpresa,
                    payload: body
                })
            } else {
                Swal.fire("Empresaseleccionada", "No se pudo insertar la empresa", "error");
                console.log(body.empresa);
            }
        } catch (error) {
            console.log(error);
            Swal.fire("Error", "No se pudo hacer su accion, contacte con el desarrollador", "error");
        }
    }
}

/* load data fecht */
const getAllEmpresas = () => {
    return async (dispatch) => {
        try {
            const resp = await fetchConToken("http://localhost:5000/empresas/");
            const body = await resp.json();
            if (body.ok) {
                dispatch(getEmpresas(body.empresas))
            } else {
                Swal.fire("Error Empresas", body.msg, "error");
            }
        } catch (error) {
            console.log(error);
            Swal.fire("Error", "No se pudo hacer su accion, contacte con el desarrollador", "error");
        }

    }
}
/* load data fecht */
const getbusquedaEmpresaText = (data) => {
    return async (dispatch) => {
        try {
            const resp = await fetchConToken("http://localhost:5000/empresas/search/" + data);
            const body = await resp.json();
            if (body.ok) {
                dispatch(getEmpresasSearch(body.empresas))
            } else {
                /*  console.log(body); */
            }
        } catch (error) {
            /* console.log(error);
            Swal.fire("Error", "No se pudo hacer su accion, contacte con el desarrollador", "error"); */
        }

    }
}

const postEmpresa = (form) => {
    return async (dispatch) => {
        try {
            const resp = await fetchConToken("http://localhost:5000/empresas/", { ...form }, "POST");
            const body = await resp.json();
            if (body.ok) {
                /* dispatch(createEmpresa(body.empresas)) */
                Swal.fire({
                    title: "Se añadio correctamente",
                    text: "La empresa se agrego " + form.name + " correctamente",
                    type: "success",
                });

            } else {
                Swal.fire("Error Empresas", body.msg, "error");
            }
        } catch (error) {
            console.log(error);
            Swal.fire("Error", "No se pudo hacer su accion, contacte con el desarrollador", "error");
        }

    }
}

const elimiarEmpresa = (id) => {
    return async (dispatch) => {
        try {
            const resp = await fetchConToken("http://localhost:5000/empresas/" + id, {}, "DELETE");
            const body = await resp.json();
            if (body.ok) {
                /* dispatch(createEmpresa(body.empresas)) */
                Swal.fire({
                    title: "Se elimino correctamente",
                    type: "success",
                });

            } else {
                Swal.fire("Error Empresas", body.msg, "error");
            }
        } catch (error) {
            console.log(error);
            Swal.fire("Error", "No se pudo hacer su accion, contacte con el desarrollador", "error");
        }

    }
}


export { getAllEmpresas, postEmpresa, elimiarEmpresa, getbusquedaEmpresaText, getEmpresaActive }