import React from 'react';
import { useDispatch, useSelector } from "react-redux";

const PortadaLogoNombre = () => {
  const empresa = useSelector((state) => state?.detalleEmpresa?.detallesDeEmpresaActual)

    return (
        //gradient : bg-gradient-to-r from-greenBlack1 via-green1 to-greenLight1
        <div className="portada w-full h-1/4 flex items-center justify-start">
            <div className="flex items-center justify-start">  
                <img className="w-4/12 h-48 md:w-3/12 p-2 md:m-4 object-contain " src={empresa.logo_empresa} />
                <span className="font-medium m-2 text-2xl p-2 md:m-4 md:text-6xl">{empresa.nombre_fantasia}</span>
            </div>
        </div>
    );
};

export default PortadaLogoNombre;