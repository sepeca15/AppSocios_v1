import Swal from "sweetalert2";
import { fetchConToken, fetchSinToken } from "./fetch";


export const loadDepartamentos = async (id) => {
    try {
        const resp = await fetchConToken("http://localhost:5000/departamentos/dpto/", { id }, "POST");
        const body = await resp.json();
        console.log(body)
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
export const loadCargos = async () => {
    try {
        const resp = await fetchConToken("http://localhost:5000/cargos");
        const body = await resp.json();
        if (body.ok) {
            return { ok: true, cargos: body.cargos }
        } else {
            return { ok: false, cargos: [] }
        }
    } catch (error) {
        console.log(error);
        Swal.fire("Error", "No se pudo hacer su accion, contacte con el desarrollador [Frontend]", "error");
    }
}

export const insertCargo = async (cargo) => {
    try {
        const resp = await fetchConToken("http://localhost:5000/cargos/", {name:cargo}, "POST");
        const body = await resp.json();
        if (body.ok) {
            Swal.fire({
                title: "Se añadio correctamente",
                text: "El Cargo se agrego correctamente",
                type: "success",
            });
            
        } else {
            Swal.fire("Error Cargo", body.msg, "error");
        }
    } catch (error) {
        console.log(error);
        Swal.fire("Error", "No se pudo hacer su accion, contacte con el desarrollador", "error");
    }
}

export const insertLocalidad = async (localidad,departamento) => {
    try {
        const resp = await fetchConToken("http://localhost:5000/localidades/", {name: localidad, departamento: departamento}, "POST");
        const body = await resp.json();
        if (body.ok) {
            Swal.fire({
                title: "Se añadio correctamente",
                text: "La localidad se agrego correctamente",
                type: "success",
            });
            
        } else {
            Swal.fire("Error Localiada o id Departamento", body.msg, "error");
        }
    } catch (error) {
        console.log(error);
        Swal.fire("Error", "No se pudo hacer su accion, contacte con el desarrollador", "error");
    }
}

export const insertRubro= async (rubro) => {
    try {
        const resp = await fetchConToken("http://localhost:5000/rubroA/", {name:rubro}, "POST");
        const body = await resp.json();
        if (body.ok) {
            Swal.fire({
                title: "Se añadio correctamente",
                text: "El rubro se agrego correctamente",
                type: "success",
            });
            
        } else {
            Swal.fire("Error Rubro", body.msg, "error");
        }
    } catch (error) {
        console.log(error);
        Swal.fire("Error", "No se pudo hacer su accion, contacte con el desarrollador", "error");
    }
}