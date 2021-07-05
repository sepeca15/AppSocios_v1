import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Bell, LogOut } from 'react-feather';
import { clearUser } from '../store/actions/auth';
/* import { useHistory } from "react-router-dom"; */
import { NavLink } from "react-router-dom";
import { allowEmpresaEmprendedor, deniedEmpresaEmprendedor, loadNotifications } from '../helpers/loadData';
import ItemNotification from './ItemNotification';
import { ArrowRight } from 'react-feather';
import Swal from 'sweetalert2';

const NavBar = () => {
    /* const rotuer = useHistory(); */
    const dispatch = useDispatch();
    const user = useSelector(state => state?.auth?.user)
    const [onActive, setOnActive] = useState(false)
    const [notificaciones, setNotificaciones] = useState(null)
    const [notifyEmprendedor, setnotifyEmprendedor] = useState(null)

    const handleLoggout = () => {
        localStorage.clear();
        dispatch(clearUser());
    }
    useEffect(() => {
        if (user?.rol?.id === 1 || user?.rol?.id === 3) {
            (async function loadNotificationsUser() {
                const notify = await loadNotifications(user?.empresaAdmin?.id || null);
                if (notify.ok) {
                    console.log(notify)
                    setNotificaciones(notify.notificaciones);
                    if (notify.notificacionesEmprendedor) {
                        setnotifyEmprendedor(notify.notificacionesEmprendedor)
                    }
                }
            })()
        }


        return () => {
            setNotificaciones(null);
        };
    }, [localStorage.getItem("token"), user?.empresaAdmin?.id]);


    const handleCancelarEmpresaC = async (data) => {
        const resp = await deniedEmpresaEmprendedor(data);
        if (resp.ok) {
            Swal.fire("Correcto", "Se cancelo la creacion de esta empresa para el emprendedor", "success")
        }
    }
    const handleAceptarEmpresaC = async (data) => {
        const resp = await allowEmpresaEmprendedor(data);
        if (resp.ok) {
            Swal.fire("Correcto", "Se acepto la creacion de esta empresa para el emprendedor", "success")
        }
    }


    if (!user) {
        return <div className="m-auto text-center text-red-500"> Espere por favor...</div>
    }
    return (
        <div className=" w-full mx-auto bg-white   h-auto transition-all duration-500 mb-2 border shadow-md border-grayBlack1">
            <div className="container flex p-4 justify-center items-center w-full h-full flex-wrap">
                <div className="flex font-semibold  flex-row items-center text-2xl ">TuApp <p className="bg-green1 text-white p-1 rounded-lg">Socios</p> </div>
                <div className="md:z-0 z-50 absolute left-0 md:mt-0 mt-20   md:relative w-full md:w-auto h-16 bg-white md:bg-transparent border-red border-t-2  md:border-none bottom-0  flex flex-grow p-0 md:px-6 md:h-full items-center justify-around ">
                    {
                        (user?.rol?.id === 1) ?
                            <>
                                <NavLink to="/inicio">
                                    <p className="text-sm cursor-pointer  ">Inicio</p>
                                </NavLink>
                                {/* <NavLink to="/admin/addempresa">
                                    <p className="text-sm cursor-pointer  ">Añadir Empresas</p>
                                </NavLink> */}
                                <NavLink to="/perfil">
                                    <p className="text-sm cursor-pointer">Perfil</p>
                                </NavLink>
                                <NavLink to="/calendario">
                                    <p className="text-sm cursor-pointer">Calendario</p>
                                </NavLink>
                            </>
                            :
                            (user?.rol.id === 2) ?
                                <>
                                    {
                                        (user?.esemprendedor == false) &&
                                        <NavLink to="/selectempresa" >
                                            <p className="text-sm cursor-pointer  ">Empresa</p>
                                        </NavLink>
                                    }
                                    <NavLink to="/inicio" >
                                        <p className="text-sm cursor-pointer  ">Perfil</p>
                                    </NavLink>

                                </>
                                :
                                (user?.rol.id === 3) ?
                                    <>
                                        <NavLink to="/inicio" >
                                            <p className="text-sm cursor-pointer">Inicio</p>
                                        </NavLink>
                                        <NavLink to="/perfil" >
                                            <p className="text-sm cursor-pointer">Perfil</p>
                                        </NavLink>
                                    </>
                                    :
                                    <>
                                        <NavLink to="/inicio" >
                                            <p className="text-sm cursor-pointer">Inicio</p>
                                        </NavLink>
                                        <NavLink to="/perfil" >
                                            <p className="text-sm cursor-pointer">Perfil</p>
                                        </NavLink>
                                    </>


                    }
                </div>

                <div className="flex flex-row items-center justify-center   ">
                    <img className="w-12 h-12 object-cover rounded-full" alt="userPhoto" src={user?.photo}></img>
                    <p className="font-medium ml-1 text-gray-600 text-lg">{user?.name}</p>
                    <div className="relative flex items-center justify-center ">
                        <Bell className="ml-2 cursor-pointer  h-full color-black" onClick={() => setOnActive(!onActive)} size={23} />
                        {onActive &&
                            <div className="z-50 duration-700  absolute h-96 flex flex-col items-center  p-4 top-6 right-0 w-96  bg-white border-grayBlack1 shadow-md rounded-lg">
                                <p className="text-gray-800 text-sm p-1 ">Notificaciones</p>
                                <div className="flex flex-col flex-grow w-full items-center justify-start ">
                                    {
                                        (notificaciones && notificaciones?.length > 0) && notificaciones?.map(item => {
                                            return <ItemNotification {...item} key={item?.user?.id + item?.empresa?.id + item?.cargo?.id} />
                                        })
                                    }
                                    {
                                        (notifyEmprendedor && notifyEmprendedor?.length > 0) && notifyEmprendedor?.map(item => {
                                            return <div className="w-full h-36 p-2 bg-gray-100 rounded-xl flex flex-col my-2">
                                                <div className="flex flex-row items-center justify-center">
                                                    <div className=" h-auto py-1 flex flex-row items-center justify-start">
                                                        <img className=" w-10 h-10 object-cover rounded-full" alt="userPhoto" src={item?.user?.photo} />
                                                        <ArrowRight size={24} />
                                                        <img className=" w-10 h-10 object-cover rounded-full" alt="logoEmpresa" src={item?.empresa?.logo_empresa} />
                                                    </div>
                                                    <p className="text-gray-700 flex-grow">{item?.user.name}</p>
                                                </div>
                                                <div className="flex flex-row flex-grow items-center justify-center">
                                                    <p className="text-xs text-left  text-gray-700 flex-grow">El emprendedor {item?.user?.name || "Sin nombre"} a solicitado crear una empresa llamada  {item?.empresa?.nombre_fantasia || "Sin nombre"}</p>
                                                </div>
                                                <div className="flex flex-row flex-grow items-center justify-around my-2">
                                                    <button onClick={() => handleCancelarEmpresaC({ user: item?.user?.id, empresa: item?.empresa?.id, cargo: item?.cargo?.id })} className="text-sm  py-2 px-4 rounded-full bg-red1 text-white font-medium cursor-pointer hover:bg-transparent border-2 duration-500 border-red1 hover:text-red1">Cancelar</button>
                                                    <button onClick={() => handleAceptarEmpresaC({ user: item?.user?.id, empresa: item?.empresa?.id, cargo: item?.cargo?.id })} className="text-sm  py-2 px-4 rounded-full bg-green1 text-white font-medium cursor-pointer hover:bg-transparent border-2 duration-500 border-green1 hover:text-green1">Aceptar</button>
                                                </div>
                                            </div>
                                        })

                                    }
                                    {
                                        (!notifyEmprendedor && !notificaciones) && <div className="flex flex-col my-4 items-center" >
                                            <p className="text-sm text-gray-800 text-center text-semibold "> Estas al Dia!!</p>
                                            <p className="text-sm text-gray-800 text-center ">No tienes notificaciones</p>
                                        </div>
                                    }

                                </div>
                            </div>}
                    </div>
                    <div className="flex ml-4 flex-col justify-center items-center" onClick={handleLoggout}>
                        <LogOut className=" cursor-pointer text-red-600  h-full color-black" />
                        <p className="text-sm text-center">Salir</p>
                    </div>
                </div>
            </div>
        </div>
    );
};


NavBar.propTypes = {

};


export default NavBar;
