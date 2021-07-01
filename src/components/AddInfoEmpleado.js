import React, { useState } from 'react'
import PropTypes from "prop-types";
import * as Icon from 'react-feather';
import Swal from 'sweetalert2';
import EditEmpleadoModal from '../components/EditEmpleadoModal';

const AddInfoEmpleado = () => {
    
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
          <div className="bg-gray-200 md:w-full inline-block md:flex justify-between px-2 py-1 itemRow md:px-10 flex-col md:flex-row shadow-md">
                        <div className="flex my-3 md:my-0 lg:w-1/12 justify-around items-center">
                            <img className=" inline object-cover w-12 h-12 border-2 border-white rounded-full" src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Profile image" />
                            <label>Tata</label>
                        </div> 
                        <div className="flex my-2 md:my-0 lg:w-1/12 justify-start md:justify-center items-center">
                            <label className="text-xs">coimbra</label>
                        </div>
                        <div className="flex my-3 md:my-0 lg:w-2/12 justify-start md:justify-center items-center">
                            <label className="text-xs">martin.coimbra@kasdnkas </label>
                        </div>
                        <div className="flex my-3 md:my-0 lg:w-1/12 justify-start md:justify-center items-center">
                            <label className="text-xs">029940092</label>
                        </div>
                        <div className="flex my-3 md:my-0 lg:w-1/12 justify-start md:justify-center items-center">
                            <label className="text-xs">726192-2</label>
                        </div>
                        <div className="flex my-3 md:my-0 lg:w-1/12 justify-start md:justify-center items-center">
                            <label className="text-xs">Cajero</label>
                        </div>
                        <div className="flex my-3 md:my-0 lg:w-1/12 justify-start md:justify-center items-center">
                            <label className="text-xs"> <Icon.CheckCircle className="text-green1" /> </label>
                            <label className="text-xs"> <Icon.XCircle className="text-red1" /> </label>
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

AddInfoEmpleado.propTypes = {
	img: PropTypes.string,
	name: PropTypes.string,
	apellido: PropTypes.string,
	contacto: PropTypes.string,
	telefono: PropTypes.string,
	ci: PropTypes.string,
	cargo: PropTypes.string,
	estado: PropTypes.bool,
};