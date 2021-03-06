import React, { useState } from 'react';
import { Shield } from 'react-feather';
import { ReactComponent as GoogleIcon } from '../svg/google.svg';
import { useDispatch } from 'react-redux';
import { signInWithGoogle, signUpBackend } from '../store/actions/auth';
import { useForm } from '../helpers/useForm';
import { fileupload } from '../helpers/fileUpload';
import Swal from 'sweetalert2';


const RegisterPage = () => {
    const [file, setFile] = useState(null);
    const dispatch = useDispatch()
    const [form, setForm] = useForm({
        name: "",
        last_name: "",
        name_user: "",
        email: "",
        password1: "",
        password2: "",
        photo: "data:image/png;base64,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",
        telefono: "",
        localidad: "",
        esemprendedor: false
    })
    const changeFile = (file) => {
        const image = file.target.files
        if (image) {
            setFile(image[0]);
        }
    }

    const googleSignInButton = () => {
        return <div onClick={GoogleSignInOrRegister} className="w-auto hover:bg-opacity-50 duration-500 text-white flex items-center p-3 mt-2 rounded-full cursor-pointer bg-blue-500 "><GoogleIcon className="w-8 h-8" /><p>Continuar con Google</p> </div>
    }

    const GoogleSignInOrRegister = () => {
        dispatch(signInWithGoogle());
    }
    const registerUer = async (e) => {
        e.preventDefault();
        if (form.password1 === form.password2) {
            if (file) {
                await fileupload(file).then(e => {
                    dispatch(signUpBackend({
                        ...form,
                        password: form.password1,
                        photo: e
                    }))
                }).catch(error => {
                    console.log(error)
                })
            } else {
                dispatch(signUpBackend({
                    ...form,
                    password: form.password1,
                }))
            }
        } else {
            Swal.fire("Error", "Las contrase??as no coinciden", "error")
        }
    }

    return (
        <div className="w-full h-full overflow-y-auto flex flex-row items-center justify-center">
            <div className=" bg-gradient-to-r from-green-500 via-green-400 to-green-300 w-full md:w-1/2 h-full overflow-y-auto max-h-full flex items-center justify-center">

            </div>
            <div className=" absolute md:relative flex w-4/5 bg-white md:w-1/2 h-auto p-4 md:h-full bg-red  justify-center items-center">
                <div className="w-full h-auto flex justify-center items-center flex-col ">
                    <p className="text-3xl text-center font-medium text-grayBlack1 flex items-center flex-wrap justify-center mb-2"><Shield /> Registrate como Empleado/Emprendedor</p>
                    <form onSubmit={registerUer} className="sm:w-3/4 w-full p-1  sm:p-4 flex flex-col items-center ">
                        <div className="w-full flex flex-row items-center justify-between">
                            <select required onChange={setForm} value={form.esemprendedor} name="esemprendedor" className="text-sm my-1 w-full p-2 border-2 shadow-md border-gray1 rounded-xl outline-none">
                                <option value="Seleccionar tipo" disabled={true} >Seleccionar un Tipo</option>
                                <option value="true" >Emprendedor</option>
                                <option value="false" > Empleado </option>
                            </select>
                        </div>
                        <div className="w-full my-2 flex flex-row items-center justify-between">
                            <input required type="text" onChange={setForm} value={form.name} name="name" autoComplete="off" className="text-sm my-1 w-1/2 mr-2 p-2 border-2 shadow-md border-gray1 rounded-xl outline-none" placeholder="Nombre" />
                            <input required type="text" onChange={setForm} value={form.last_name} name="last_name" autoComplete="off" className="text-sm my-1 w-1/2 ml-2 p-2 border-2 shadow-md border-gray1 rounded-xl outline-none" placeholder="Apellido" />
                        </div>
                        <div className=" w-full">
                            <input required type="email" onChange={setForm} value={form.email} name="email" autoComplete="off" className="text-sm my-1 w-full p-2 border-2 shadow-md border-gray1 rounded-xl outline-none" placeholder="Email" />
                        </div>
                        <div className=" w-full">
                            <input required type="text" onChange={setForm} value={form.name_user} name="name_user" autoComplete="off" className="text-sm my-1 w-full p-2 border-2 shadow-md border-gray1 rounded-xl outline-none" placeholder="Nombre Usuario" />
                        </div>
                        <div className="w-full ">
                            <input required type="text" onChange={setForm} value={form.telefono} name="telefono" autoComplete="off" className=" text-sm my-1 w-full p-2 border-2 shadow-md border-gray1 rounded-xl outline-none" placeholder="Telefono" />
                        </div>
                        <div className="w-full flex flex-row items-center justify-between">
                            <input required type="password" onChange={setForm} value={form.password1} name="password1" autoComplete="off" className="text-sm my-1 w-1/2 mr-2 p-2 border-2 shadow-md border-gray1 rounded-xl outline-none" placeholder="Password" />
                            <input required type="password" onChange={setForm} value={form.password2} name="password2" autoComplete="off" className="text-sm my-1 w-1/2 ml-2 p-2 border-2 shadow-md border-gray1 rounded-xl outline-none" placeholder="Repetir Password" />
                        </div>
                        <div className="w-full">
                            <select className="text-sm my-1 w-full p-2 border-2 shadow-md border-gray1 rounded-xl outline-none" onChange={setForm} value={form.localidad} name="localidad">
                                <option value="Artigas">Artigas</option>
                                <option value="Canelones">Canelones</option>
                                <option value="Cerro Largo">Cerro Largo</option>
                                <option value="Colonia">Colonia</option>
                                <option value="Durazno">Durazno</option>
                                <option value="Flores">Flores</option>
                                <option value="Florida">Florida</option>
                                <option value="Lavalleja">Lavalleja</option>
                                <option value="Maldonado">Maldonado</option>
                                <option value="Montevideo">Montevideo</option>
                                <option value="Paysand??">Paysand??</option>
                                <option value="R??o Negro">R??o Negro</option>
                                <option value="Rivera">Rivera</option>
                                <option value="Rocha">Rocha</option>
                                <option value="Salto">Salto</option>
                                <option value="San Jos??">San Jos??</option>
                                <option value="Soriano">Soriano</option>
                                <option value="Tacuaremb??">Tacuaremb??</option>
                                <option value="Treinta y Tres">Treinta y Tres</option>
                            </select>
                        </div>
                        <div className="w-full  my-2">
                            <input type="file" onChange={changeFile} name="photo" className="text-sm my-1 w-full mr-2 p-2 border-2 shadow-md border-gray1 rounded-xl outline-none" />
                        </div>
                        <div className="formgroup ">
                            <button type="submit" className="w-full  bg-greenLight1 border-2 border-greenLight1 text-gray-50 hover:text-greenLight1  hover:bg-white     rounded-2xl py-2 duration-300 ">Registrarse</button>
                        </div>
                        {googleSignInButton()}
                        <p className="flex text-center justify-center flex-wrap items-center text-grayBlack1 text-base my-1">Ya tienes una cuenta? <a href="/login" className="text-greenLight1 cursor-pointer">Ingresa Aqui</a></p>
                        <p className="flex text-center justify-center flex-wrap items-center text-grayBlack1 text-base my-1">Olvidaste tu contrase??a? <a href="/resetpassword" className="text-greenLight1 cursor-pointer">Recuperala Aqui</a></p>
                    </form>
                </div>
            </div>

        </div>
    );
};


RegisterPage.propTypes = {

};


export default RegisterPage;
