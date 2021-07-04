import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import * as Icon from "react-feather";
import { elimiarEmpresa, getEmpresaActive } from "../store/actions/empresas";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { types } from "../store/types/types";
import { getEmpleadosEmpresa } from "../store/actions/empleadosEmpresa";

const AddInfoEmpresa = ({
  nombre_fantasia,
  email,
  celular,
  telefono,
  razon_social,
  rut,
  activa,
  direccion,
  fecha_inicio_empresa,
  fecha_afiliacion,
  nro_bps,
  nro_referencia,
  logo_empresa,
  num,
  fecha_baja,
  observaciones,
  id,
}) => {
  const dispatch = useDispatch();
  const eliminarEmpresa = () => {
    dispatch(elimiarEmpresa(id));
  };
  const state = useSelector((state) => state.auth.user);
  const detalleEmpresaActual = useSelector(
    (state) => state.detalleEmpresa.detallesDeEmpresaActual
  );
  const rotuer = useHistory();
  const dataUnaEmpresa = () => {
    localStorage.setItem("empresaActive", id);
    dispatch(getEmpresaActive(id));
    console.log("paso 1");
    if (state.rol.id === 1) {
      dispatch({
        type: types.detalleEmpresa,
        payload: {
          nombre_fantasia: nombre_fantasia,
          email: email, 
          telefono: telefono, 
          celular: celular,
          razon_social: razon_social,
          rut: rut,
          nro_bps: nro_bps,
          fecha_afiliacion: fecha_afiliacion,
          fecha_inicio_empresa:fecha_inicio_empresa,
          activa: activa,
          nro_referencia: nro_referencia,
          fecha_baja: fecha_baja,
          direccion: direccion,
          observaciones:observaciones,
          logo_empresa: logo_empresa,
          id: id
        },
      });
    dispatch(getEmpleadosEmpresa(id));
    }
  };
  return (
    <>
      <div
        className={
          num % 2 === 1
            ? "bg-gray-200 md:w-full inline-block md:flex justify-between px-2 py-1 itemRow md:px-10 flex-col md:flex-row shadow-md"
            : "bg-white md:w-full inline-block md:flex justify-between px-2 py-1 itemRow md:px-10 flex-col md:flex-row shadow-md"
        }
      >
        <div className="flex my-3 md:my-0 lg:w-1/12 justify-around items-center">
          <img
            className=" inline object-cover w-12 h-12 border-2 border-white rounded-full"
            src={logo_empresa}
            alt="Profile"
          />
          <label>{nombre_fantasia}</label>
        </div>
        {/* js */}
        <div className="flex my-2 md:my-0 lg:w-2/12 justify-start md:justify-center items-center">
          <label className="text-xs">
            {email}
            <br /> {celular}
          </label>
        </div>
        <div className="flex my-3 md:my-0 lg:w-1/12 justify-start md:justify-center items-center">
          <label className="text-xs">{direccion}</label>
        </div>
        <div className="flex my-3 md:my-0 lg:w-1/12 justify-start md:justify-center items-center">
          <label className="text-xs">100</label>
        </div>
        <div className="flex my-3 md:my-0 lg:w-1/12 justify-start md:justify-center items-center">
          <label className="text-xs">{razon_social}</label>
        </div>
        <div className="flex my-3 md:my-0 lg:w-2/12 justify-start md:justify-center items-center">
          <label className="text-xs">{rut}</label>
        </div>
        <div className="flex my-3 md:my-0 lg:w-1/12 justify-start md:justify-center items-center">
          {activa ? (
            <label className="text-xs">
              <Icon.CheckCircle className="text-green1" />
            </label>
          ) : (
            <label className="text-xs">
              <Icon.XCircle className="text-red1" />
            </label>
          )}
        </div>
        <div className="flex my-3 md:my-0 lg:w-2/12 justify-start md:justify-center items-center">
          <button
            onClick={() => {
              Swal.fire({
                title: "¿Está seguro que desea eliminar este empleado?",
                text: "¡No podrás recuperar los datos!",
                type: "warning",
                showCloseButton: true,
                showCancelButton: true,
                confirmButtonColor: "#F64E60",
                cancelButtonColor: "#C4C4C4",
                confirmButtonText: "Sí, eliminarlo!",
                cancelButtonText: "Cancelar",
              }).then((result) => {
                if (result.isConfirmed) {
                  eliminarEmpresa();
                  rotuer.push("/inicio");
                } else if (result.isDenied) {
                  Swal.fire("Changes are not saved", "", "info");
                }
              });
            }}
            className="bg-danger text-xs mr-1 text-white font-bold p-2 rounded"
          >
            <Icon.Delete className="ml-2" />
            Eliminar
          </button>

          <Link to="/adminglobal/infoempresa/">
            <button
              onClick={() => {
                dataUnaEmpresa();
              }}
              className="bg-green1 text-xs ml-1 text-white font-bold p-2 rounded"
            >
              <Icon.Search className="ml-2" />
              Ver más
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default AddInfoEmpresa;
