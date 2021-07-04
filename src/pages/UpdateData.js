import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useForm } from '../helpers/useForm';
import { useDispatch, useSelector } from 'react-redux';

import { List, LogOut } from 'react-feather';
import { loadDepartamentos, loadLocalidades } from '../helpers/loadData';
import Swal from 'sweetalert2';
import {
    Redirect
} from 'react-router-dom';
import { clearUser, updateUser } from '../store/actions/auth';
const UpdateData = () => {
    const dispatch = useDispatch();

    const [departamento, setDepartamentos] = useState(null);
    const [localidades, setLocalidades] = useState(null);
    const [dptoUser, setdptoUser] = useState(null);
    const state = useSelector(state => state.auth.user)
    const [form, setForm, reset] = useForm({
        id: state?.id,
        name: state?.name,
        last_name: state?.last_name,
        name_user: state?.name_user,
        email: state?.email,
        photo: state?.photo,
        telefono: state?.telefono,
        localidad: state?.localidad,
        esemprendedor: state?.esemprendedor
    })
    useEffect(() => {
        (async function loadInputsDepandLoc() {
            const departamentosAll = await loadDepartamentos(state?.id);
            if (departamentosAll?.ok) {
                setDepartamentos(departamentosAll.departamentos)
                if (departamentosAll.dptoUser) {
                    setdptoUser(departamentosAll.dptoUser)
                }
                if (departamentosAll.dptoUser) {
                    const localidad = await loadLocalidades(departamentosAll.dptoUser);
                    if (localidad.ok) {
                        setLocalidades(localidad.localidades);
                    } else {
                        setLocalidades([]);
                    }
                }
            } else {
                setDepartamentos([])
            }
        })()

        return () => {
            setDepartamentos(null);
            setLocalidades(null);
            setdptoUser(null);
        }
    }, [])

    const handleLoggout = () => {
        localStorage.clear()
        dispatch(clearUser())
    }

    const updateInfoUser = (e) => {
        e.preventDefault()
        if (form.esemprendedor == null || form.localidad == null) {
            Swal.fire("Error", "Faltan campos requeridos", "error");
        } else {
            //register here
            dispatch(updateUser(form))
        }

    }
    const changeDepartamento = async ({ target }) => {
        const localidad = await loadLocalidades(target.value);
        if (localidad.ok) {
            setLocalidades(localidad.localidades);
        } else {
            setLocalidades([]);
        }
    }

    if (state?.name_user != null && !state?.esemprendedor != null && !state?.telefono != null && state.localidad != null) {
        return <Redirect to="/inicio" />
    }
    if (departamento == null) {
        return <div className="text-center ">Espere por favor...</div>
    }
    return (
        <div className="w-full h-full flex flex-row items-center justify-center">
            <div className=" bg-gradient-to-r from-green-500 via-green-400 to-green-300 w-full h-full flex items-center justify-center ">
                <div className="w-1/2 bg-white h-auto p-10 rounded-xl  flex justify-center items-center">
                    <div className="w-full h-auto flex justify-center items-center flex-col ">
                        <p className="text-3xl font-medium text-grayBlack1 flex items-center"><List />Actualiza Tu Informacion</p>
                        <p className="my-4 text-sm font-medium text-gray-400 text-center">Notamos que tu informacion no esta actualizada , por favor complete el siguiente formulario para Continuar</p>
                        <form onSubmit={updateInfoUser} className="sm:w-3/4 w-full p-1  sm:p-4 flex flex-col items-center ">
                            <div className="w-full flex flex-row items-center justify-between">
                                <select required onChange={setForm} value={form?.esemprendedor} name="esemprendedor" className="text-sm my-1 w-full p-2 border-2 shadow-md border-gray1 rounded-xl outline-none">
                                    <option selected={true} disabled="disabled" >Seleccionar un Tipo</option>
                                    <option value={true} >Emprendedor</option>
                                    <option value={false} >Empleado </option>
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
                            <div className="w-full">
                                <select className="text-sm my-1 w-full p-2 border-2 shadow-md border-gray1 rounded-xl outline-none" value={dptoUser} onChange={changeDepartamento} name="departamento">
                                    <option selected={true} disabled="disable">Seleccione uno</option>
                                    {
                                        departamento?.map((e, i) => {
                                            return <option key={e.name + "," + i} value={`${e.id}`}>{e.name}</option>
                                        })
                                    }
                                </select>
                            </div>
                            <div className="w-full">
                                <select className="text-sm my-1 w-full p-2 border-2 shadow-md border-gray1 rounded-xl outline-none" onChange={setForm} value={form?.localidad?.id} name="localidad">
                                    <option selected={true} disabled="disable">Seleccione uno</option>
                                    {
                                        localidades?.map((e, i) => {
                                            return <option key={e.name + "," + i} value={`${e.id}`}>{e.name}</option>
                                        })
                                    }
                                </select>
                            </div>

                            <div className="formgroup ">
                                <button type="submit" className="w-full  bg-greenLight1 border-2 border-greenLight1 text-gray-50 hover:text-greenLight1  hover:bg-white     rounded-2xl py-2 duration-300 ">Guardar</button>
                            </div>
                            <div className="flex px-8 py-2 bg-red-500 rounded-full border-red-700 border ml-4 flex-col justify-center items-center" onClick={handleLoggout}>
                                <LogOut className=" cursor-pointer text-white h-full color-black" />
                                <p className="text-sm text-center text-white">Salir</p>
                            </div>
                        </form>

                    </div>
                </div>
            </div>


        </div>
    );
};


UpdateData.propTypes = {

};


export default UpdateData;



