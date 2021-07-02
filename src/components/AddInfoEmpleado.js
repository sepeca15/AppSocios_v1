import React, { useState } from 'react'
import PropTypes from "prop-types";
import * as Icon from 'react-feather';
import Swal from 'sweetalert2';
import EditEmpleadoModal from '../components/EditEmpleadoModal';

const AddInfoEmpleado = ({cargo, user, empresa, estado, num}) => {
    
    const [modalEditEmpleadoIsOpen, setIsEditEmpleadoOpen] = useState(false);
    function openModalEditEmpleado() {
        setIsEditEmpleadoOpen(true);
    }

    function closeModalEditEmpleado() {
        setIsEditEmpleadoOpen(false);
    }
    return (
        <>
          <EditEmpleadoModal modalIsOpen={modalEditEmpleadoIsOpen} closeModal={closeModalEditEmpleado}/>
          <div className={num % 2 == 1 ? "bg-gray-200 md:w-full inline-block md:flex justify-between px-2 py-1 itemRow md:px-10 flex-col md:flex-row shadow-md" : "bg-white md:w-full inline-block md:flex justify-between px-2 py-1 itemRow md:px-10 flex-col md:flex-row shadow-md"}>
                        <div className="flex my-3 md:my-0 lg:w-1/12 justify-around items-center">
                            <img className="inline object-cover w-12 h-12 border-2 border-white rounded-full" src={user.photo} alt="Profile image" />
                            <label>{user.name}</label>
                        </div> 
                        <div className="flex my-2 md:my-0 lg:w-1/12 justify-start md:justify-center items-center">
                            <label className="text-xs">{user.last_name}</label>
                        </div>
                        <div className="flex my-3 md:my-0 lg:w-2/12 justify-start md:justify-center items-center">
                            <label className="text-xs">{user.email}</label>
                        </div>
                        <div className="flex my-3 md:my-0 lg:w-1/12 justify-start md:justify-center items-center">
                            <label className="text-xs">{user.telefono}</label>
                        </div>
                        <div className="flex my-3 md:my-0 lg:w-1/12 justify-start md:justify-center items-center">
                            <label className="text-xs">726192-2</label>
                        </div>
                        <div className="flex my-3 md:my-0 lg:w-1/12 justify-start md:justify-center items-center">
                            <label className="text-xs">{cargo.name}</label>
                        </div>
                        <div className="flex my-3 md:my-0 lg:w-1/12 justify-start md:justify-center items-center">
                            {estado == true ? <label className="text-xs"> <Icon.CheckCircle className="text-green1" /> </label> : <label className="text-xs"> <Icon.XCircle className="text-red1" /> </label>}
                        </div>
                        <div className="flex my-3 md:my-0 lg:w-2/12 justify-start md:justify-center items-center">
                            <button onClick={()=>{
                                Swal.fire({
                                    title: '¿Está seguro que desea eliminar este empleado?',
                                    text: "¡No podrás recuperar los datos!",
                                    type: 'warning',
                                    showCloseButton: true,
                                    showCancelButton: true,
                                    confirmButtonColor: '#F64E60',
                                    cancelButtonColor: '#C4C4C4',
                                    confirmButtonText: 'Sí, eliminarlo!',
                                    cancelButtonText: 'Cancelar',
                                })
                            }} className="bg-danger text-xs mr-1 text-white font-bold p-2 rounded"> 
                                <Icon.Delete className="ml-2"/>
                                Eliminar 
                            </button>
                            <button className="bg-green1 text-xs ml-1 text-white font-bold p-2 rounded" onClick={openModalEditEmpleado}> 
                                <Icon.Edit className="ml-1"/> Editar
                            </button>
                        </div>
                    </div>
                
        </>
    )
}

export default AddInfoEmpleado
 