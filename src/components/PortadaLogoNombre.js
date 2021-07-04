import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const PortadaLogoNombre = () => {
  const empresa = useSelector(
    (state) => state?.detalleEmpresa?.detallesDeEmpresaActual
  );

  return (
    //gradient : bg-gradient-to-r from-greenBlack1 via-green1 to-greenLight1
    <div className="portada w-full h-1/4 flex items-center justify-start">
      <div className="flex items-center justify-start">
        <img
          className="w-4/12 h-48 md:w-3/12 p-2 md:m-4 object-contain "
          src={empresa?.[0]?.logo_empresa}
        />
        <span className="font-medium m-2 text-2xl p-2 md:m-4 md:text-6xl">
          {empresa?.[0]?.nombre_fantasia}
        </span>
        <div>
          <button className="bg-yellow1 text-white font-bold py-2 px-4 mx-2 rounded">
            Activar
          </button>
           
          <Link to="/admin/infoempresa">
            <button 
              className="bg-green1  text-white font-bold  py-2 px-4 mx-2 rounded"
            >
              Ver empleado
            </button>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default PortadaLogoNombre;
