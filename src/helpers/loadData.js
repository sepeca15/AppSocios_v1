import Swal from "sweetalert2";
import { fetchConToken } from "./fetch";


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

export const loadAlllocalidades = async (idD) => {
    try {
        const resp = await fetchConToken("http://localhost:5000/localidades/");
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

export const loadLocalidadescombobox = async () => {
    try {
        const resp = await fetchConToken("http://localhost:5000/localidades/");
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

export const loadRubrosA = async () => {
    try {
        const resp = await fetchConToken("http://localhost:5000/rubroA");
        const body = await resp.json();
        console.log(body)
        if (body.ok) {
            return { ok: true, rubros: body.rubros }
        } else {
            return { ok: false, rubros: [] }
        }
    } catch (error) {
        console.log(error);
        Swal.fire("Error", "No se pudo hacer su accion, contacte con el desarrollador [Frontend]", "error");
    }
}



export const searchEmpresaPa = async (text, uid) => {
    try {
        const resp = await fetchConToken("http://localhost:5000/empresas/searchandempl/" + text, { uid }, "POST");
        const body = await resp.json();
        if (body.ok) {
            return { ok: true, empresas: body.empresaEstado }
        } else {
            return { ok: false, empresas: [] }
        }
    } catch (error) {
        console.log(error);
        Swal.fire("Error", "No se pudo hacer su accion, contacte con el desarrollador [Frontend]", "error");
    }
}


export const loadEmpleosXUser = async (userId) => {
    try {
        const resp = await fetchConToken("http://localhost:5000/empleados/empleos/" + userId);
        const body = await resp.json();
        if (body.ok) {
            return { ok: true, empleos: body.empleos }
        } else {
            return { ok: false, empleos: [] }
        }
    } catch (error) {
        console.log(error);
        Swal.fire("Error", "No se pudo hacer su accion, contacte con el desarrollador [Frontend]", "error");
    }
}



export const sendSolicitud = async (user, empresa) => {
    try {
        const resp = await fetchConToken("http://localhost:5000/empleados/", { user, empresa, cargo: 1, estado: 0 }, "POST");
        const body = await resp.json();
        if (body.ok) {
            Swal.fire("Solicitud enviada", "Se envio correctamente la solicitud para unirte  a esta empresa");
            return { ok: true }
        } else {
            return { ok: false }
        }
    } catch (error) {
        console.log(error);
        Swal.fire("Error", "No se pudo hacer su accion, contacte con el desarrollador [Frontend]", "error");
    }
}



export const loadNotifications = async (empresa) => {
    try {
        const resp = await fetchConToken((empresa != null ? "http://localhost:5000/notificaciones/empresa/" + empresa : "http://localhost:5000/notificaciones/"));
        const body = await resp.json();
        console.log(body)
        if (body.ok) {
            return { ok: true, notificaciones: body.notificaciones, notificacionesEmprendedor: body?.empEmpresa }
        } else {
            return { ok: false }
        }
    } catch (error) {
        console.log(error);
        Swal.fire("Error", "No se pudo hacer su accion, contacte con el desarrollador [Frontend]", "error");
    }
}


export const allowEmployed = async (data) => {
    console.log(data)
    try {
        const resp = await fetchConToken("http://localhost:5000/empleados/allowemployed", data, "PUT");
        const body = await resp.json();
        console.log(body)
        if (body.ok) {
            return { ok: true }
        } else {
            return { ok: false }
        }
    } catch (error) {
        console.log(error);
        Swal.fire("Error", "No se pudo hacer su accion, contacte con el desarrollador [Frontend]", "error");
    }
}

export const deniedEmployed = async (data) => {
    try {
        const resp = await fetchConToken("http://localhost:5000/empleados/", { ...data }, "DELETE");
        const body = await resp.json();
        if (body.ok) {
            return { ok: true }
        } else {
            return { ok: false }
        }
    } catch (error) {
        console.log(error);
        Swal.fire("Error", "No se pudo hacer su accion, contacte con el desarrollador [Frontend]", "error");
    }
}


export const insertCargo = async (cargo) => {
    try {
        const resp = await fetchConToken("http://localhost:5000/cargos/", { name: cargo }, "POST");
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

export const insertLocalidad = async (localidad, departamento) => {
    try {
        const resp = await fetchConToken("http://localhost:5000/localidades/", { name: localidad, departamento: departamento }, "POST");
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

export const insertRubro = async (rubro) => {
    try {
        const resp = await fetchConToken("http://localhost:5000/rubroA/", { name: rubro }, "POST");
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



export const allowEmpresaEmprendedor = async (data) => {
    try {
        const resp = await fetchConToken("http://localhost:5000/empresas/allowempresaemprendedor/", { ...data }, "POST");
        const body = await resp.json();
        console.log(body)
        if (body.ok) {
            return { ok: true }
        } else {
            return { ok: false }
        }
    } catch (error) {
        console.log(error);
        Swal.fire("Error", "No se pudo hacer su accion, contacte con el desarrollador [Frontend]", "error");
    }
}
export const deniedEmpresaEmprendedor = async (data) => {
    try {
        const resp = await fetchConToken("http://localhost:5000/empresas/deniedempresaemprendedor/", { ...data }, "POST");
        const body = await resp.json();
        console.log(body)
        if (body.ok) {
            return { ok: true }
        } else {
            return { ok: false }
        }
    } catch (error) {
        console.log(error);
        Swal.fire("Error", "No se pudo hacer su accion, contacte con el desarrollador [Frontend]", "error");
    }
}



export const sendEmail = async (data) => {
    try {
        const resp = await fetchConToken("http://localhost:5000/sendemail/", { ...data }, "POST");
        const body = await resp.json();
        console.log(body)
        if (body.ok) {
            return { ok: true }
        } else {
            return { ok: false }
        }
    } catch (error) {
        console.log(error);
        Swal.fire("Error", "No se pudo hacer su accion, contacte con el desarrollador [Frontend]", "error");
    }
}
