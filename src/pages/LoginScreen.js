import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Shield } from 'react-feather';
import { ReactComponent as Security } from '../svg/security.svg';
import { ReactComponent as GoogleIcon } from '../svg/google.svg';
import { useForm } from '../helpers/useForm';
import { useDispatch } from 'react-redux';
import { signInBackend, signInWithGoogle } from '../store/actions/auth';
import { useHistory } from 'react-router-dom';

const LoginScreen = () => {
    const router = useHistory();
    const dispatch = useDispatch()
    const [form, setForm] = useForm({
        email: '',
        password: ''
    })

    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        function handleResize() {
            (window.innerWidth >= 768) ? setIsMobile(false) : setIsMobile(true);
        }
        handleResize()
        window.addEventListener('resize', handleResize)

        return _ => {
            window.removeEventListener('resize', handleResize)

        }
    })

    const googleSignInButton = () => {
        return <div onClick={GoogleSignInOrRegister} className="w-auto hover:bg-opacity-50 duration-500 text-white flex items-center p-3 mt-2 rounded-full cursor-pointer bg-blue-500 "><GoogleIcon className="w-10 h-10" /><p>Continuar con Google</p> </div>
    }

    const GoogleSignInOrRegister = () => {
        dispatch(signInWithGoogle());
    }

    const handleLogin = (e) => {
        e.preventDefault();
        if (form.email.trim() != "" && form.password.trim() != "") {
            dispatch(signInBackend(form))
        }
    }


    return (
        <div className="w-full h-full overflow-y-auto flex flex-row items-center justify-center">
            <div className=" bg-gradient-to-r from-green-500 via-green-400 to-green-300 w-full md:w-1/2 h-full overflow-y-auto max-h-full flex items-center justify-center">
                <div className="hidden  md:flex p-4 bg-grayBlack1 w-2/3  bg-opacity-90 rounded-2xl flex-col items-left justify-center">
                    <p className="text-left text-white font-medium text-2xl"> Nunca fue tan facil!</p>
                    <p className="text-left text-white font-medium text-sm">Si eres empresa registra a tus empleados con un solo click notificando a los mismos para poder tener un mejor control y gestion de emrpesas</p>
                    <Security className="w-4/5 flex-grow h-72 my-4" />
                    {(!isMobile) && googleSignInButton()}
                </div>
            </div>
            <div className=" absolute md:relative flex w-4/5 bg-white md:w-1/2 h-auto p-4 md:h-full bg-red  justify-center items-center">
                <div className="w-full h-auto flex justify-center items-center flex-col ">
                    <p className="text-3xl text-center font-medium text-grayBlack1 flex items-center flex-wrap justify-center"><Shield /> Iniciar Sesion Como Empleado/Empresa</p>
                    <form onSubmit={handleLogin} className="sm:w-3/4 w-full p-1  sm:p-4 flex flex-col items-center ">
                        <div className="formgroup  ">
                            <label htmlFor="email" className="text-xl text-grayBlack1 ">Email:</label>
                            <input required type="email" name="email" onChange={setForm} value={form.email} autoComplete="off" className="my-2 w-full p-3 border-2 shadow-md border-gray1 rounded-xl outline-none" placeholder="Email" />
                        </div>
                        <div className="formgroup ">
                            <label htmlFor="password" className="text-xl text-grayBlack1 ">Password:</label>
                            <input required type="password" name="password" onChange={setForm} value={form.password} autoComplete="off" className="my-2 w-full p-3 border-2 shadow-md border-gray1 rounded-xl outline-none" placeholder="Password" />
                        </div>
                        <div className="formgroup ">
                            <button type="submit" className="w-full  bg-greenLight1 border-2 border-greenLight1 text-gray-50 hover:text-greenLight1  hover:bg-white     rounded-2xl py-2 duration-300 ">Loguearse</button>
                        </div>
                        {(isMobile) && googleSignInButton()}

                        <p className="flex text-center justify-center flex-wrap items-center text-grayBlack1 text-base my-1">No Tienes una cuenta? <a href="/register" className="text-greenLight1 cursor-pointer">Registrate Aqui</a></p>
                        <p className="flex text-center justify-center flex-wrap items-center text-grayBlack1 text-base my-1">Olvidaste tu contraseña? <a href="/resetpassword" className="text-greenLight1 cursor-pointer">Recuperala Aqui</a></p>
                    </form>
                </div>
            </div>
        </div>
    );
};


LoginScreen.propTypes = {

};


export default LoginScreen;
