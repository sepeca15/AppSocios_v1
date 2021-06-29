import React from 'react'

const AdminPageScreen = () => {
    return (
        <div className="">
            <div className="flex justify-around flex-row text-center bg-gray-100 md:flex-row ">
                <div className=" max-w-full lg:w-3/12 xl:w-2/12 flex items-center justify-center text-lg lg:text-left sm:text-base">
                    <label>Centro comercial San Jose <br /> <span className="text-gray">Datos de las empresas </span></label>
                </div>
                <div className=" max-w-full lg:w-5/12 xl:w-6/12 my-3 md:my-0 flex items-center justify-center">
                    <input className="shadow appearance-none border rounded w-4/6 md:w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="¿Estás buscando algún socio?" />
                </div>
                <div className=" max-w-full lg:w-4/12 xl:w-3/12 flex items-center  justify-center">
                    <button className="bg-blue text-white font-bold ml-3 py-2 px-4 rounded">
                        Agregar una empresa
                    </button>
                </div>
            </div>

            <div className=" flex md:block flex-row">

                <div className="bg-gray-200 md:w-full inline-block md:flex justify-between  pb-2 pt-3  text-black rounded flex-col md:flex-row ">
                    <label className="flex py-2 md:p-0 lg:w-1/12 justify-center md:text-center">Nombre</label>
                    <label className="flex py-2 md:p-0 lg:w-2/12 justify-center md:text-center">Contacto</label>
                    <label className="flex py-2 md:p-0 lg:w-1/12 justify-center md:text-center">Direccion</label>
                    <label className="flex py-2 md:p-0 lg:w-1/12 justify-center md:text-center">Empleados</label>
                    <label className="flex py-2 md:p-0 lg:w-1/12 justify-center md:text-center">Razon social</label>
                    <label className="flex py-2 md:p-0 lg:w-2/12 justify-center md:text-center">Numero RUT</label>
                    <label className="flex py-2 md:p-0 lg:w-1/12 justify-center md:text-center">Estado</label>
                    <label className="flex py-2 md:p-0 lg:w-2/12 justify-center md:text-center"></label>
                </div>

                <div className='p-2 flex flex-nowrap flex-grow md:flex-col w-6/12 md:w-full mt-2 heightvh overflow-x-auto md:overflow-y-auto '>
                    <div className="md:w-full inline-block md:flex justify-between  px-2 py-1 itemRow md:px-10 flex-col md:flex-row shadow-md">
                        <div className="flex my-3 md:my-0 lg:w-1/12 justify-between items-center">
                            <img className="relative z-30 inline object-cover w-12 h-12 border-2 border-white rounded-full" src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Profile image" />
                            <label className="mr-5">Tata</label>
                        </div>
                        <div className="flex my-3 md:my-0 lg:w-2/12 justify-start md:justify-center items-center">
                            <label className="text-xs">martin.coimbra.212@gmail.com <br /> 09209884 </label>
                        </div>
                        <div className="flex my-3 md:my-0 lg:w-1/12 justify-start md:justify-center items-center">
                            <label className="text-xs">San José <br /> 22 de agosto 123 </label>
                        </div>
                        <div className="flex my-3 md:my-0 lg:w-1/12 justify-start md:justify-center items-center">
                            <label className="text-xs">100</label>
                        </div>
                        <div className="flex my-3 md:my-0 lg:w-1/12 justify-start md:justify-center items-center">
                            <label className="text-xs">S.R.L</label>
                        </div>
                        <div className="flex my-3 md:my-0 lg:w-2/12 justify-start md:justify-center items-center">
                            <label className="text-xs">123456789012</label>
                        </div>
                        <div className="flex my-3 md:my-0 lg:w-1/12 justify-start md:justify-center items-center">
                            <label className="text-xs">✅</label>
                        </div>
                        <div className="flex my-3 md:my-0 lg:w-2/12 justify-start md:justify-center items-center">
                            <button className="bg-danger text-xs mr-1 text-white font-bold py-2 px-4 rounded">Eliminar</button>
                            <button className="bg-green text-xs ml-1 text-white font-bold py-2 px-4 rounded">Ver más</button>
                        </div>
                    </div>
                    <div className="bg-gray1 md:w-full inline-block md:flex justify-between  px-2 py-1 itemRow md:px-10 flex-col md:flex-row shadow-md">
                        <div className="flex my-3 md:my-0 lg:w-1/12 justify-between items-center">
                            <img className="relative z-30 inline object-cover w-12 h-12 border-2 border-white rounded-full" src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Profile image" />
                            <label className="mr-5">Tata</label>
                        </div>
                        <div className="flex my-3 md:my-0 lg:w-2/12 justify-start md:justify-center items-center">
                            <label className="text-xs">martin.coimbra.212@gmail.com <br /> 09209884 </label>
                        </div>
                        <div className="flex my-3 md:my-0 lg:w-1/12 justify-start md:justify-center items-center">
                            <label className="text-xs">San José <br /> 22 de agosto 123 </label>
                        </div>
                        <div className="flex my-3 md:my-0 lg:w-1/12 justify-start md:justify-center items-center">
                            <label className="text-xs">100</label>
                        </div>
                        <div className="flex my-3 md:my-0 lg:w-1/12 justify-start md:justify-center items-center">
                            <label className="text-xs">S.R.L</label>
                        </div>
                        <div className="flex my-3 md:my-0 lg:w-2/12 justify-start md:justify-center items-center">
                            <label className="text-xs">123456789012</label>
                        </div>
                        <div className="flex my-3 md:my-0 lg:w-1/12 justify-start md:justify-center items-center">
                            <label className="text-xs">✅</label>
                        </div>
                        <div className="flex my-3 md:my-0 lg:w-2/12 justify-start md:justify-center items-center">
                            <button className="bg-danger text-xs mr-1 text-white font-bold py-2 px-4 rounded">Eliminar</button>
                            <button className="bg-green text-xs ml-1 text-white font-bold py-2 px-4 rounded">Ver más</button>
                        </div>
                    </div>
                    

                </div>

            </div>
        </div >
    )
}

export default AdminPageScreen
