import React from 'react'
import PropTypes from "prop-types";
import {
    Link 
} from 'react-router-dom'; 

const AddInfoEmpresa = (props) => {
    return (
        <>
          <div className="bg-gray-200 md:w-full inline-block md:flex justify-between px-2 py-1 itemRow md:px-10 flex-col md:flex-row shadow-md">
                        <div className="flex my-3 md:my-0 lg:w-1/12 justify-around items-center">
                            <img className=" inline object-cover w-12 h-12 border-2 border-white rounded-full" src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Profile image" />
                            <label>Tata</label>
                        </div> 
                        <div className="flex my-2 md:my-0 lg:w-2/12 justify-start md:justify-center items-center">
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
                            <Link to="/adminglobal/infoempresa"><button className="bg-green1 text-xs ml-1 text-white font-bold py-2 px-4 rounded">Ver más</button></Link>
                        </div>
                    </div>
                
        </>
    )
}

export default AddInfoEmpresa

AddInfoEmpresa.propTypes = {
	name: PropTypes.string,
	email: PropTypes.string,
	celular: PropTypes.string,
	empleados: PropTypes.number,
	razonsocial: PropTypes.string,
	rut: PropTypes.string,
	estado: PropTypes.bool
};