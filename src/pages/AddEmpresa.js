import React from 'react'
import PortadaAddEmpresa from '../components/PortadaAddEmpresa';
import FormAddEmpresa from '../components/FormAddEmpresa';

const AddEmpresa = () => {
    return (
        <div className="w-full">
            <PortadaAddEmpresa/>
            <FormAddEmpresa InfoPageEmpresa={true}/>
        </div>
    )
}

export default AddEmpresa;