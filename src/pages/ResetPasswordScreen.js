import React from 'react';
import PropTypes from 'prop-types';
import { Shield } from 'react-feather';


const ResetPassword = () => {
    return (
        <div className="w-full h-full flex flex-row items-center justify-center">
            <div className=" bg-gradient-to-r from-green-500 via-green-400 to-green-300 w-1/2 h-full ">

            </div>
            <div className="w-1/2 h-full bg-red flex justify-center items-center">
                <div className="w-full h-auto flex justify-center items-center flex-col ">
                    <p className="text-3xl font-medium text-grayBlack1 flex items-center"><Shield /> Recuperar Contraseña</p>
                    <form className="w-3/4  p-4 flex flex-col items-center ">
                        <div className="formgroup  ">
                            <label htmlFor="email" className="text-xl text-grayBlack1 ">Email:</label>
                            <input type="email" name="email" autoComplete="off" className="my-2 w-full p-3 border-2 shadow-md border-gray1 rounded-xl outline-none" placeholder="Email" />
                        </div>
                        <div className="formgroup ">
                            <button className="w-full  bg-greenLight1 border-2 border-greenLight1 text-gray-50 hover:text-greenLight1  hover:bg-white     rounded-2xl py-2 duration-300 ">Enviar Email</button>
                        </div>
                        <p className="flex items-center text-grayBlack1 my-2">No Tienes una cuenta? <a href="/register" className="text-greenLight1 cursor-pointer">Registrate Aqui</a></p>
                        <p className="flex items-center text-grayBlack1 my-2">Tienes una cuenta? <a href="/login" className="text-greenLight1 cursor-pointer">Inicia Aqui</a></p>
                    </form>
                </div>
            </div>

        </div>
    );
};


ResetPassword.propTypes = {

};


export default ResetPassword;
