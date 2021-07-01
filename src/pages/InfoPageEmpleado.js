import React, { useState } from 'react'
import PortadaLogoNombre from '../components/PortadaLogoNombre'
import * as Icon from 'react-feather';
import AddInfoEmpleado from '../components/AddInfoEmpleado'
import AddEmpleadoModal from '../components/AddEmpleadoModal'
import EditEmpleadoModal from '../components/EditEmpleadoModal';

const InfoPageEmpleado = () => {

    /* AddEmpleadoModal */
    const [modalAddEmpleadoIsOpen, setIsAddEmpleadoOpen] = useState(false);

    function openModalAddEmpleado() {
        setIsAddEmpleadoOpen(true);
    }

    function closeModalAddEmpleado() {
        setIsAddEmpleadoOpen(false);
    }
    /* AddEmpleadoModal */


    const [modalEditEmpresaIsOpen, setIsEditEmpresaOpen] = useState(false);

    function openModalEditEmpresa() {
        setIsEditEmpresaOpen(true);
    }

    function closeModalEditEmpresa() {
        setIsEditEmpresaOpen(false);
    }

    return (
        <>
            <AddEmpleadoModal modalIsOpen={modalAddEmpleadoIsOpen} closeModal={closeModalAddEmpleado} />
            <EditEmpleadoModal modalIsOpen={modalEditEmpresaIsOpen} closeModal={closeModalEditEmpresa} />
            <PortadaLogoNombre />

            <div className="w-full h-full">
                <div className="flex justify-around flex-col text-center bg-gray-100 md:flex-row mb-2 ">
                    <div className="max-w-full lg:w-3/12 xl:w-2/12 flex items-center justify-center text-lg lg:text-left sm:text-base">
                        <label>Centro comercial San Jose <br /> <span className="text-gray">Datos de las empresas </span></label>
                    </div>
                    <div className="max-w-full lg:w-5/12 xl:w-6/12 my-3 md:my-0 flex items-center justify-center">
                        <input className="shadow appearance-none border rounded w-4/6 md:w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="¿Estás buscando algún empleado?" />
                    </div>
                    <div className="max-w-full lg:w-4/12 xl:w-3/12 flex items-center  justify-center">
                        <button className="bg-blue1 text-white font-bold ml-3 py-2 px-4 rounded" onClick={openModalAddEmpleado}>
                            Agregar un empleado
                        </button>
                    </div>
                </div>

                <div className=" flex md:block flex-row">

                    <div className="bg-gray-200 md:w-full inline-block md:flex justify-between pb-2 pt-3 text-black rounded flex-col md:flex-row ">
                        <label className="flex p-2 md:p-0 sm:w-1/12 justify-center md:text-center">Nombre</label>
                        <label className="flex p-2 md:p-0 sm:w-1/12 justify-center md:text-center">Apellido</label>
                        <label className="flex p-2 md:p-0 sm:w-2/12 justify-center md:text-center">Contacto</label>
                        <label className="flex p-2 md:p-0 sm:w-1/12 justify-center md:text-center">Telefono</label>
                        <label className="flex p-2 md:p-0 sm:w-1/12 justify-center md:text-center">CI</label>
                        <label className="flex p-2 md:p-0 sm:w-1/12 justify-center md:text-center">Cargo</label>
                        <label className="flex p-2 md:p-0 sm:w-1/12 justify-center md:text-center">Estado</label>
                        <label className="flex p-2 md:p-0 sm:w-2/12 justify-center md:text-center"></label>
                    </div>

                    <div className='flex flex-nowrap flex-grow md:flex-col w-6/12 md:w-full heightvh overflow-x-auto md:overflow-y-auto '>
                        {/* Aqui se map los datos de los empleados */}
                        {/* 
                        <AddInfoEmpleado 
                            nombre={} 
                            apellido={} 
                            contacto={} 
                            telefono={} 
                            ci={} 
                            cargo={} 
                            estado={} 
                        /> 
                    */}
                        <AddInfoEmpleado openModal={openModalEditEmpresa} />
                    </div>


                </div>
            </div >

        </>
    )
}

export default InfoPageEmpleado
