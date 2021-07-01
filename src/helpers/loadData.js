import Swal from "sweetalert2";
import { fetchConToken, fetchSinToken } from "./fetch";


export const loadDepartamentos = async () => {
    try {
        const resp = await fetchConToken("http://localhost:5000/departamentos/");
        const body = await resp.json();
        if (body.ok) {
            return { ok: true, departamentos: body.departamentos, dptoUser: body?.departamentoUser }
        } else {
            return { ok: false, departamentos: [] }
        }
    } catch (error) {
        console.log(error);
        Swal.fire("Error", "No se pudo hacer su accion, contacte con el desarrollador [Frontend]", "error");
    }

}



export const loadLocalidades = async (idD) => {
    try {
        const resp = await fetchConToken("http://localhost:5000/localidades/departamento/" + idD);
        const body = await resp.json();
        if (body.ok) {
            return { ok: true, localidades: body.localidades }
        } else {
            return { ok: false, localidades: [] }
        }
    } catch (error) {
        console.log(error);
        Swal.fire("Error", "No se pudo hacer su accion, contacte con el desarrollador [Frontend]", "error");
    }
}