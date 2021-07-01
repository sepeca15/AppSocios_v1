import React from 'react'
import * as Icon from 'react-feather';
import AddInfoEmpresa from '../components/AddInfoEmpresa'
import QueDeseaAgregarModal from '../components/QueDeseaAgregarModal';

const AdminPageScreen = () => {
    return (
        <div className=" relative w-full h-full ">
            <div className="flex justify-around flex-col text-center bg-gray-100 md:flex-row mb-2 py-4 ">
                <div className="max-w-full lg:w-3/12 xl:w-2/12 flex items-center justify-center text-lg lg:text-left sm:text-base">
                    <label>Centro comercial San Jose <br /> <span className="text-gray">Datos de las empresas </span></label>
                </div>
                <div className="max-w-full lg:w-5/12 xl:w-6/12 my-3 md:my-0 flex items-center justify-center">
                    <input className="shadow appearance-none border rounded w-4/6 md:w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="¿Estás buscando algún socio?" />
                </div>
                <div className="max-w-full lg:w-4/12 xl:w-3/12 flex items-center  justify-center">
                    <QueDeseaAgregarModal />
                </div>
            </div>

            <div className=" flex md:block flex-row flex-grow">

                <div className="bg-gray-200 md:w-full inline-block md:flex justify-between pb-2 pt-3 text-black rounded flex-col md:flex-row ">
                    <label className="flex p-2 md:p-0 lg:w-1/12 justify-center md:text-center">Nombre</label>
                    <label className="flex p-2 md:p-0 lg:w-2/12 justify-center md:text-center">Contacto</label>
                    <label className="flex p-2 md:p-0 lg:w-1/12 justify-center md:text-center">Direccion</label>
                    <label className="flex p-2 md:p-0 lg:w-1/12 justify-center md:text-center">Empleados</label>
                    <label className="flex p-2 md:p-0 lg:w-1/12 justify-center md:text-center">Razon social</label>
                    <label className="flex p-2 md:p-0 lg:w-2/12 justify-center md:text-center">Numero RUT</label>
                    <label className="flex p-2 md:p-0 lg:w-1/12 justify-center md:text-center">Estado</label>
                    <label className="flex p-2 md:p-0 lg:w-2/12 justify-center md:text-center"></label>
                </div>

                <div className='flex flex-nowrap flex-grow md:flex-col w-6/12 md:w-full heightvh overflow-x-auto md:overflow-y-auto '>
                    {/* Map aqui */}
                    <AddInfoEmpresa />
                    {/* 
                        <AddInfoEmpresa 
                            name={} 
                            email={} 
                            celular={} 
                            empleados={} 
                            razonsocial={} 
                            rut={} 
                            estado={} 
                        /> 
                    */}
                </div>


            </div>
            <div className=" relative flex-row  flex justify-around md:1/2 w-full m-auto">
                <div className="flex text-center flex-col my-4  items-center bg-blue1    text-xs text-white font-bold px-4 py-2 rounded-full">
                    <Icon.PlusCircle className="" />
                    <p className="text-center">Empresa</p>
                </div>
                <div className="flex text-center flex-col my-4 items-center bg-blue1  text-xs text-white font-bold px-4 py-2 rounded-full">
                    <Icon.PlusCircle className="" />
                    <p className="text-center">Localidad</p>
                </div>
                <div className="flex text-center flex-col my-4  items-center bg-blue1  text-xs text-white font-bold px-4 py-2 rounded-full">
                    <Icon.PlusCircle className="" />
                    <p className="text-center">Rubro</p>
                </div>
            </div>
        </div >

    )
}

export default AdminPageScreen
