import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Shield } from 'react-feather';
import { ReactComponent as Security } from '../svg/security.svg';
import { ReactComponent as GoogleIcon } from '../svg/google.svg';


const RegisterPage = () => {

    const googleSignInButton = () => {
        return <div className="w-auto hover:bg-opacity-50 duration-500 text-white flex items-center p-3 mt-2 rounded-full cursor-pointer bg-blue-500 "><GoogleIcon className="w-10 h-10" /><p>Continuar con Google</p> </div>
    }


    return (
        <div className="w-full h-full overflow-y-auto flex flex-row items-center justify-center">
            <div className=" bg-gradient-to-r from-green-500 via-green-400 to-green-300 w-full md:w-1/2 h-full overflow-y-auto max-h-full flex items-center justify-center">

            </div>
            <div className=" absolute md:relative flex w-4/5 bg-white md:w-1/2 h-auto p-4 md:h-full bg-red  justify-center items-center">
                <div className="w-full h-auto flex justify-center items-center flex-col ">
                    <p className="text-3xl text-center font-medium text-grayBlack1 flex items-center flex-wrap justify-center mb-2"><Shield /> Registrate como Empleado/Empresa</p>
                    <form className="sm:w-3/4 w-full p-1  sm:p-4 flex flex-col items-center ">
                        <div className="w-full flex flex-row items-center justify-between">
                            <input type="text" name="name" autoComplete="off" className="my-1 w-1/2 mr-2 p-3 border-2 shadow-md border-gray1 rounded-xl outline-none" placeholder="Nombre" />
                            <input type="text" name="password" autoComplete="off" className="my-1 w-1/2 ml-2 p-3 border-2 shadow-md border-gray1 rounded-xl outline-none" placeholder="Apellido" />
                        </div>
                        <div className="formgroup ">
                            <label htmlFor="email" className="text-base text-grayBlack1 ">Email:</label>
                            <input type="email" name="email" autoComplete="off" className="my-1 w-full p-3 border-2 shadow-md border-gray1 rounded-xl outline-none" placeholder="Email" />
                        </div>
                        <div className="formgroup ">
                            <label htmlFor="nameuser" className="text-base text-grayBlack1 ">Nombre Usuario:</label>
                            <input type="text" name="nameuser" autoComplete="off" className="my-1 w-full p-3 border-2 shadow-md border-gray1 rounded-xl outline-none" placeholder="Nombre Usuario" />
                        </div>
                        <div className="w-full flex flex-row items-center justify-between">
                            <input type="text" name="password1" autoComplete="off" className="my-1 w-1/2 mr-2 p-3 border-2 shadow-md border-gray1 rounded-xl outline-none" placeholder="Password" />
                            <input type="text" name="password2" autoComplete="off" className="my-1 w-1/2 ml-2 p-3 border-2 shadow-md border-gray1 rounded-xl outline-none" placeholder="Repetir Password" />

                        </div>
                        <div className="formgroup ">
                            <button className="w-full  bg-green1 border-2 border-greenLight1 text-gray-50 hover:text-greenLight1  hover:bg-white     rounded-2xl py-2 duration-300 ">Loguearse</button>
                        </div>
                        {googleSignInButton()}

                        <p className="flex text-center justify-center flex-wrap items-center text-grayBlack1 text-base my-1">No Tienes una cuenta? <a href="/register" className="text-greenLight1 cursor-pointer">Registrate Aqui</a></p>
                        <p className="flex text-center justify-center flex-wrap items-center text-grayBlack1 text-base my-1">Olvidaste tu contraseña? <a href="/resetpassword" className="text-greenLight1 cursor-pointer">Recuperala Aqui</a></p>
                    </form>
                </div>
            </div>

        </div>
    );
};


RegisterPage.propTypes = {

};


export default RegisterPage;
