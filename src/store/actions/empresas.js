import { fetchConToken } from "../../helpers/fetch"
import { types } from "../types/types"
import Swal from "sweetalert"

const getEmpresas = (empresas) => {
    return {payload: empresas, type:types.getEmpresas}
}

/* const createEmpresas = (empresas) => {
    return {payload: empresas, type:types.getEmpresas}
} */

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

export { getAllEmpresas }