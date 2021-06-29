import React from 'react';
import PropTypes from 'prop-types';
import { List, Shield, CheckCircle } from 'react-feather';


const SelectEmpresa = () => {
    return (
        <div className="w-full h-full flex flex-row items-center justify-center">
            <div className=" bg-gradient-to-r from-green-500 via-green-400 to-green-300 w-full h-full flex items-center justify-center ">
                <div className="w-1/2 bg-white h-auto p-10 rounded-xl  flex justify-center items-center">
                    <div className="w-full h-auto flex justify-center items-center flex-col ">
                        <p className="text-3xl font-medium text-grayBlack1 flex items-center"><List />Seleccionar Empresa</p>
                        <p className="my-4 text-sm font-medium text-gray-400 text-center">Selecciona la empresa la cual deseas afiliarte y espera la confirmacion de dicha empresa</p>

                        <form className="w-3/4 bg-gray-50 rounded-xl p-2 flex flex-col items-center shadow-md ">
                            <div className="formgroup  ">
                                <input type="text" name="search" autoComplete="off" className="my-2 w-full p-3 border-2 shadow-md border-gray1 rounded-xl outline-none" placeholder="Busca tu empresa" />
                            </div>
                            <div className="w-full h-40 bg-white p-2 rounded-xl overflow-y-auto  ">
                                <div className="w-full h-full">
                                    <div className="w-full my-2 h-16 rounded-full bg-gray-200 flex flex-row items-center justify-start p-1">
                                        <img className="w-14 h-14 object-cover rounded-full bg-white" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Tata_logo.svg/837px-Tata_logo.svg.png"></img>
                                        <div className="flex flex-grow h-full items-center justify-between">
                                            <p className="text-gray-400 text-base font-normal">TATA Supermercado</p>
                                            <div className="h-full flex flex-col items-center mr-2 justify-center">
                                                <CheckCircle className=" text-gray-600" fill="#ebed72" />
                                                <p className="text-gray-600">En Espera</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </div>
    );
};


SelectEmpresa.propTypes = {

};


export default SelectEmpresa;
