import React from "react";
import { Link } from "react-router-dom";
import { getEmpleadosEmpresa } from "../store/actions/empleadosEmpresa";
import { useDispatch, useSelector } from "react-redux";

const PortadaLogoNombre = () => {
  const empresa = useSelector(
    (state) => state?.detalleEmpresa?.detallesDeEmpresaActual
  );
  const empresaAdmin = useSelector((state) => state.auth?.user?.empresaAdmin);
  const state = useSelector((state) => state.auth.user);
  const detalleEmpresaActual = useSelector(
    (state) => state.detalleEmpresa.detallesDeEmpresaActual
  );
  const dispatch = useDispatch();

    const verEmpleados =() =>{
      if (state.rol.id === 1) {
        /* Admin empresa */
          const id = localStorage.getItem("empresaActive");
          dispatch(getEmpleadosEmpresa(id));      
      }
      if (state.rol.id === 3) {
        /* Admin empresa */
        if (detalleEmpresaActual == null) {
          const id = localStorage.getItem("empresaActive");
          dispatch(getEmpleadosEmpresa(empresaAdmin.id));      
        }
      }
    }
  return (
    <div className="portada w-full h-2/4 flex items-center justify-start p-2">
      {/*  */}
      <div className="flex items-center justify-around w-full flex-col sm:flex-row">
        <img
          className=" h-48 p-2 md:m-4 object-contain  "
          src={state.rol.id == 1 ? empresa?.[0]?.logo_empresa : empresaAdmin?.logo_empresa  }
        />
        <span className="font-medium m-2 text-2xl p-2 md:m-4 md:text-6xl">
          {state.rol.id == 1 ? empresa?.[0]?.nombre_fantasia : empresaAdmin?.nombre_fantasia}
        </span>
        <div> 
           
          <Link to="/admin/infoempresa">
            <button 
            onClick={()=>{verEmpleados()}}
              className="bg-green1  text-white font-bold  py-2 px-4 mx-2 rounded"
            >
              Ver empleados
            </button>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default PortadaLogoNombre;
