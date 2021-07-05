import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fileupload } from "../helpers/fileUpload";
import { postEmpresa, getEmpresaActive, editEmpresa, insertempresaemprendedor } from "../store/actions/empresas";
import { useForm } from "../helpers/useForm";
import { loadDepartamentos, loadLocalidades, loadRubrosA } from "../helpers/loadData";
import { useLocation } from 'react-router-dom'
import Swal from "sweetalert2";
const initialState = {
  nombre_fantasia: '',
  telefono: '',
  nro_referencia: '',
  celular: '',
  direccion: '',
  rut: '',
  email: '',
  razon_social: '',
  nro_bps: '',
  fecha_afiliacion: '',
  fecha_inicio_empresa: '',
  activa: '',
  fecha_baja: '',
  observaciones: '',
  logo_empresa: '',
  localidad: '',
  rubroAP: "",
  rubroAS: ""
}
const FormAddEmpresa = ({ InfoPageEmpresa = true }) => {
  let location = useLocation();
  const state = useSelector((state) => state.auth.user);
  const [editar, setEditar] = useState();
  const [dpto, setDpto] = useState(null);
  const [localidad, setLocalidad] = useState(null)
  const empresaAdmin = useSelector((state) => state.auth?.user?.empresaAdmin)
  const [departamento, setDepartamentos] = useState(null);
  const [rubros, setRubros] = useState(null);
  const [localidades, setLocalidades] = useState(null);
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();

  const detalleEmpresaActual = useSelector(
    (state) => state.detalleEmpresa.detallesDeEmpresaActual
  );
  const dptoEmpresaActual = useSelector(
    (state) => state?.detalleEmpresa?.departamento
  );
  const [form, setCoso] = useState(initialState)
  useEffect(() => {
    if (location.pathname !== "/adminglobal/addempresa") {
      setCoso({
        id: detalleEmpresaActual?.[0]?.id,
        nombre_fantasia: detalleEmpresaActual?.[0]?.nombre_fantasia,
        telefono: detalleEmpresaActual?.[0]?.telefono || "",
        nro_referencia: detalleEmpresaActual?.[0]?.nro_referencia || "",
        celular: detalleEmpresaActual?.[0]?.celular || "",
        direccion: detalleEmpresaActual?.[0]?.direccion || "",
        rut: detalleEmpresaActual?.[0]?.rut || "",
        email: detalleEmpresaActual?.[0]?.email || "",
        razon_social: detalleEmpresaActual?.[0]?.razon_social || "",
        nro_bps: detalleEmpresaActual?.[0]?.nro_bps || "",

        fecha_afiliacion: detalleEmpresaActual?.[0]?.fecha_afiliacion || "",

        fecha_inicio_empresa: detalleEmpresaActual?.[0]?.fecha_inicio_empresa || "",

        activa: detalleEmpresaActual?.[0]?.activa || "",

        fecha_baja: detalleEmpresaActual?.[0]?.fecha_baja || "",

        observaciones: detalleEmpresaActual?.[0]?.observaciones || "",

        logo_empresa: detalleEmpresaActual?.[0]?.logo_empresa || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl8UcJiZxXc_q-Zr-1dohkW5sd8lTxvpPj-g&usqp=CAU",
        localidad: detalleEmpresaActual?.[0]?.localidad?.id,
        rubroAP: detalleEmpresaActual?.[0]?.rubros?.[0]?.rubro_a.id || "ninguno",
        rubroAS: detalleEmpresaActual?.[0]?.rubros?.[1]?.rubro_a.id || "ninguno",
      })
    }
  }, [detalleEmpresaActual?.[0]?.id])
  useEffect(() => {

    try {

      /* empresaadmin */
      switch (state?.rol?.id) {
        case 1:
          if (location.pathname !== "/adminglobal/addempresa") {
            if (state.rol.id === 1) {
              /* Admin global */
              if (detalleEmpresaActual == null) {
                const id = localStorage.getItem("empresaActive");
                dispatch(getEmpresaActive(id));
              }
            }
          } else {
            console.log("jaja")
          }

          break;
        case 3:
          setCoso({
            id: empresaAdmin?.id,
            nombre_fantasia: empresaAdmin?.nombre_fantasia,
            telefono: empresaAdmin?.telefono || "",
            nro_referencia: empresaAdmin?.nro_referencia || "",
            celular: empresaAdmin?.celular || "",
            direccion: empresaAdmin?.direccion || "",
            rut: empresaAdmin?.rut || "",
            email: empresaAdmin?.email || "",
            razon_social: empresaAdmin?.razon_social || "",
            nro_bps: empresaAdmin?.nro_bps || "",
            fecha_afiliacion: empresaAdmin?.fecha_afiliacion || "",
            fecha_inicio_empresa: empresaAdmin?.fecha_inicio_empresa || "",
            activa: empresaAdmin?.activa || "",
            fecha_baja: empresaAdmin?.fecha_baja || "",
            observaciones: empresaAdmin?.observaciones || "",
            logo_empresa: empresaAdmin?.logo_empresa || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl8UcJiZxXc_q-Zr-1dohkW5sd8lTxvpPj-g&usqp=CAU",
            localidad: empresaAdmin?.localidad?.id || dptoEmpresaActual || "",
            rubroAP: empresaAdmin?.rubros?.[0]?.rubro_a.id || "ninguno",
            rubroAS: empresaAdmin?.rubros?.[1]?.rubro_a.id || "ninguno"
          })
          break;
        default:
          break;
      }


      if (InfoPageEmpresa) {
        setEditar(false);
      } else {
        setEditar(true);
      }
      (async function loadInputsDepandLoc() {
        const rubros = await loadRubrosA();
        if (rubros?.ok) {
          setRubros(rubros.rubros)
        }
        const departamentosAll = await loadDepartamentos(state?.id);
        if (departamentosAll?.ok) {
          setDepartamentos(departamentosAll.departamentos);
          if (state?.rol?.id === 1) {
            if (dptoEmpresaActual) {
              setDpto(dptoEmpresaActual?.id)
            }
          } else {
            if (empresaAdmin?.departamento?.id != null) {
              setDpto(empresaAdmin?.departamento?.id)
            }
          }
          if (dptoEmpresaActual !== null || empresaAdmin?.departamento?.id) {
            const localidad = await loadLocalidades(empresaAdmin?.departamento?.id || dptoEmpresaActual);
            if (localidad.ok) {
              setLocalidades(localidad.localidades);
            } else {
              setLocalidades([]);
            }
          }
        } else {
          setDepartamentos([]);
        }
      })();

      return () => {
        setCoso(initialState)
        setDepartamentos(null);
        setLocalidades(null);
        setLocalidad(null);
        setDpto(null);
        /*  setdptoUser(null); */
      };
    } catch (error) {

    }
  }, [state?.rol?.id]);


  const setForm = (e) => {
    setCoso({ ...form, [e.target.name]: e.target.value })
  }

  const changeFile = (file) => {
    const image = file.target.files;
    if (image) {
      setFile(image[0]);
    }
  };
  const addEmpresa = async (e) => {
    e.preventDefault();

    if (form.localidad == "" || (form.rubroAP == form.rubroAS)) {
      Swal.fire("ERROR", "intente seleccionar los rubros y las localidades correctamente", "error")
    } else {

      if (state?.esemprendedor == false) {
        if (!InfoPageEmpresa) {
          if (file) {
            await fileupload(file)
              .then((e) => {
                dispatch(
                  editEmpresa({
                    ...form,
                    logo_empresa: e,
                  })
                );
              })
              .catch((error) => {
                console.log(error);
              });
          } else {
            dispatch(
              editEmpresa({
                ...form,
              })
            );
          }
        } else {
          if (file) {
            await fileupload(file)
              .then((e) => {
                dispatch(
                  postEmpresa({
                    ...form,
                    logo_empresa: e,
                  })
                );
              })
              .catch((error) => {
                console.log(error);
              });
          } else {
            dispatch(
              postEmpresa({
                ...form,
              })
            );
          }
        }
      } else {
        if (file) {
          await fileupload(file)
            .then((e) => {
              dispatch(
                insertempresaemprendedor({ ...form, logo_empresa: e, }, state?.id)
              );
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          dispatch(
            insertempresaemprendedor({ ...form, }, state?.id)
          );
        }
      }
    }




  };

  const changeDepartamento = async ({ target }) => {
    const localidad = await loadLocalidades(target.value);
    if (localidad.ok) {
      setLocalidades(localidad.localidades);
    } else {
      setLocalidades([]);
    }
  };


  if (departamento == null && detalleEmpresaActual?.[0]?.id === localStorage.getItem('empresaActive') && (location.pathname !== "/adminglobal/addempresa" && detalleEmpresaActual?.[0]?.id == null))
    return <div className="text-center ">Espere por favor...</div>;
  return (
    <div className="w-full h-full bg-white">
      {
        console.log(form)
      }
      <form onSubmit={addEmpresa}>
        <div className="w-10/12 flex flex-col items-center my-4 mx-auto">
          <p className="text-gray-800 text-center text-3x1 font-semibold">
            {InfoPageEmpresa
              ? " Rellena los campos para añadir una Empresa"
              : " Datos de " + form?.nombre_fantasia}
          </p>
        </div>
        <div className="md:flex md:flex-row mx-auto">
          <div className="md:w-6/12 h-full flex flex-col items-center px-6 my-4 mx-auto">
            <div className="form-group w-full">
              <label htmlFor="Nombre fantasia">Nombre Fantasía:</label>
              <input
                disabled={editar}
                autoComplete="off"
                type="text"
                className="form-control text-sm my-1 mr-2 p-2 border-2 shadow-md border-gray1 rounded-xl outline-none"
                placeholder="Ingrese un Nombre fantasia"
                name="nombre_fantasia"
                value={form.nombre_fantasia}
                onChange={setForm}
                required
              />
            </div>
            <div className="form-group w-full">
              <label htmlFor="Razón Social">Razón Social:</label>
              <input
                disabled={editar}
                autoComplete="off"
                type="text"
                className="form-control text-sm my-1 mr-2 p-2 border-2 shadow-md border-gray1 rounded-xl outline-none"
                placeholder="Ingrese una Razón Social"
                name="razon_social"
                value={form.razon_social}
                onChange={setForm}
                required
              />
            </div>
            <div className="form-group w-full">
              <label htmlFor="Email">Email:</label>
              <input
                disabled={editar}
                autoComplete="off"
                type="text"
                className="form-control text-sm my-1 mr-2 p-2 border-2 shadow-md border-gray1 rounded-xl outline-none"
                placeholder="Ingrese un Email"
                name="email"
                value={form.email}
                onChange={setForm}
                required
              />
            </div>
            <div className="form-group w-full">
              <label htmlFor="Celular">Celular:</label>
              <input
                disabled={editar}
                autoComplete="off"
                type="text"
                className="form-control text-sm my-1 mr-2 p-2 border-2 shadow-md border-gray1 rounded-xl outline-none"
                placeholder="Ingrese un Celular"
                name="celular"
                value={form.celular}
                onChange={setForm}
                required
              />
            </div>
            <div className="form-group w-full">
              <label htmlFor="Telefono">Telefono:</label>
              <input
                disabled={editar}
                autoComplete="off"
                type="text"
                className="form-control text-sm my-1 mr-2 p-2 border-2 shadow-md border-gray1 rounded-xl outline-none"
                placeholder="Ingrese un Telefono"
                name="telefono"
                value={form.telefono}
                onChange={setForm}
              />
            </div>
            <div className="form-group w-full">
              <label htmlFor="Direccion">Direccion:</label>
              <input
                disabled={editar}
                autoComplete="off"
                type="text"
                className="form-control text-sm my-1 mr-2 p-2 border-2 shadow-md border-gray1 rounded-xl outline-none"
                placeholder="Ingrese un Direccion"
                name="direccion"
                value={form.direccion}
                onChange={setForm}
                required
              />
            </div>
            <div className="form-group w-full">
              <label htmlFor="departamento">Departamento</label>
              <select
                className="form-control text-sm my-1 w-full p-2 border-2 shadow-md border-gray1 rounded-xl outline-none"
                onChange={changeDepartamento}
                required
                vale={dpto}
                name="departamento"
              >
                <option selected={(dpto != null) ? false : true} defaultValue={true} disabled="disable">
                  Seleccione uno
                </option>
                {departamento?.map((e, i) => {
                  return (
                    <option key={e.name + "," + i} value={`${e.id}`}>
                      {e.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="form-group w-full">
              <label htmlFor="Localidad">Localidad:</label>
              <select
                className="form-control text-sm my-1 w-full p-2 border-2 shadow-md border-gray1 rounded-xl outline-none"
                value={form.localidad}
                onChange={setForm}
                required
                name="localidad"
              >
                {localidades?.map((e, i) => {
                  return (
                    <option key={e.name + "," + i} value={`${e.id}`}>
                      {e.name}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="w-full  my-2">
              <input
                disabled={editar}
                type="file"
                onChange={changeFile}
                name="photo"
                className="text-sm my-1 w-full mr-2 p-2 border-2 shadow-md border-gray1 rounded-xl outline-none"
              />
            </div>
          </div>
          <div className="md:w-6/12 h-flex flex flex-col items-center px-6 my-4 mx-auto">
            <div className="form-group w-full">
              <label htmlFor="Número de RUT">Número de RUT:</label>
              <input
                disabled={editar}
                autoComplete="off"
                type="text"
                className="form-control text-sm my-1 mr-2 p-2 border-2 shadow-md border-gray1 rounded-xl outline-none"
                placeholder="Ingrese un Número de RUT"
                name="rut"
                value={form.rut}
                onChange={setForm}
                required
              />
            </div>
            <div className="form-group w-full">
              <label htmlFor="Nro_BPS">Nro_BPS:</label>
              <input
                disabled={editar}
                autoComplete="off"
                type="text"
                className="form-control text-sm my-1 mr-2 p-2 border-2 shadow-md border-gray1 rounded-xl outline-none"
                placeholder="Ingrese un Nro_BPS"
                name="nro_bps"
                value={form.nro_bps}
                onChange={setForm}
                required
              />
            </div>
            <div className="form-group w-full">
              <label htmlFor="Nro_Referencia">Nro_Referencia:</label>
              <input
                disabled={editar}
                autoComplete="off"
                type="text"
                className="form-control text-sm my-1 mr-2 p-2 border-2 shadow-md border-gray1 rounded-xl outline-none"
                placeholder="Ingrese un Nro_Referencia"
                name="nro_referencia"
                value={form.nro_referencia}
                onChange={setForm}
                required
              />
            </div>
            <div className="form-group w-full">
              <label htmlFor="Fecha de inicio de empresa">
                Fecha de inicio de empresa:
              </label>
              <input
                disabled={editar}
                autoComplete="off"
                type="text"
                className="form-control text-sm my-1 mr-2 p-2 border-2 shadow-md border-gray1 rounded-xl outline-none"
                placeholder="Ingrese un Fecha de inicio de empresa"
                name="fecha_inicio_empresa"
                value={form.fecha_inicio_empresa}
                onChange={setForm}
              />
            </div>
            <div className="form-group w-full">
              <label htmlFor="Fecha de Afiliacion">Fecha de Afiliacion:</label>
              <input
                disabled={editar}
                autoComplete="off"
                type="text"
                className="form-control text-sm my-1 mr-2 p-2 border-2 shadow-md border-gray1 rounded-xl outline-none"
                placeholder="Ingrese un Fecha de Afiliacion"
                name="fecha_afiliacion"
                value={form.fecha_afiliacion}
                onChange={setForm}
                required
              />
            </div>
            <div className="form-group w-full">
              <label htmlFor="Fecha de baja">Fecha de baja:</label>
              <input
                disabled={editar}
                autoComplete="off"
                type="text"
                className="form-control text-sm my-1 mr-2 p-2 border-2 shadow-md border-gray1 rounded-xl outline-none"
                placeholder="Ingrese un Fecha de baja"
                name="fecha_baja"
                value={form.fecha_baja}
                onChange={setForm}
              />
            </div>
            <div className="form-group w-full">
              <label htmlFor="Observaciones">Observaciones:</label>
              <input
                disabled={editar}
                autoComplete="off"
                type="text"
                className="form-control text-sm my-1 mr-2 p-2 border-2 shadow-md border-gray1 rounded-xl outline-none"
                placeholder="Ingrese una Observaciones"
                name="observaciones"
                value={form.observaciones}
                onChange={setForm}
              />
            </div>
            <div className="form-group w-full">
              <label htmlFor="Activa">Estado:</label>
              <select
                className="form-control text-sm my-1 w-full p-2 border-2 shadow-md border-gray1 rounded-xl outline-none"
                name="activa"
                required
                onChange={setForm}
                value={form.activa}
              >
                <option disabled={true} value="Estado">
                  Estado?
                </option>
                <option value={1}>Activa</option>
                <option value={0}>Intactiva</option>
              </select>
            </div>
            <div className="form-group w-full">
              <label htmlFor="Activa">Rubro Actividad Primario:</label>
              <select
                className="form-control text-sm my-1 w-full p-2 border-2 shadow-md border-gray1 rounded-xl outline-none"
                name="rubroAP"
                onChange={setForm}
                value={form.rubroAP}
              >
                <option value="">
                  Ninguno
                </option>
                {
                  rubros && rubros.map(e => {
                    return (
                      <option key={new Date(Date.now) + e.id} value={e?.id} >{e.name}</option>
                    )
                  })
                }
              </select>
            </div>
            <div className="form-group w-full">
              <label htmlFor="Activa">Rubro Actividad Secundario:</label>
              <select
                className="form-control text-sm my-1 w-full p-2 border-2 shadow-md border-gray1 rounded-xl outline-none"
                name="rubroAS"
                onChange={setForm}
                value={form.rubroAS}
              >
                <option value="">
                  Ninguno
                </option>
                {
                  rubros && rubros.map(e => {
                    return (
                      <option key={new Date(Date.now) + e.id} value={e?.id} >{e.name}</option>
                    )
                  })
                }
              </select>
            </div>
          </div>
        </div>
        {InfoPageEmpresa ? (
          <div className="flex justify-end content-end py-8 w-full">
            <button className="bg-green1 text-white font-bold py-2 px-4 mx-2 rounded">
              Guardar
            </button>
          </div>
        ) : (
          <div className="flex justify-end content-end py-8 w-full">
            {" "}
            <button onClick={() => {
              if (editar === true) {
                setEditar(false)
              } else {
                setEditar(true)
              }
            }}
              className="bg-green1 text-white font-bold py-2 px-4 mx-2 rounded"
            >
              {(editar == true) ? "Editar" : " Guardar"}
            </button>{" "}
          </div>
        )}
      </form>
    </div>
  );
};
export default FormAddEmpresa;
