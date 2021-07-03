import React from "react";
import PortadaLogoNombre from "../components/PortadaLogoNombre";
import FormAddEmpresa from "../components/FormAddEmpresa";

const InfoPageEmpresa = () => { 
  return (
    <>
      <PortadaLogoNombre />
      <FormAddEmpresa InfoPageEmpresa={false} />
    </>
  );
};

export default InfoPageEmpresa;
