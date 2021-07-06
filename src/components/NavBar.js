import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Bell, LogOut } from 'react-feather';
import { clearUser } from '../store/actions/auth';
/* import { useHistory } from "react-router-dom"; */
import { NavLink } from "react-router-dom";
import { loadNotifications } from '../helpers/loadData';
import ItemNotification from './ItemNotification';
const NavBar = () => {
    /* const rotuer = useHistory(); */
    const dispatch = useDispatch();
    const user = useSelector(state => state?.auth?.user)
    const [onActive, setOnActive] = useState(false)
    const [notificaciones, setNotificaciones] = useState(null)
    const handleLoggout = () => {
        localStorage.clear();
        dispatch(clearUser());
    }
    useEffect(() => {
        console.log("jaja")

        if (user?.rol?.id === 1 || user?.rol?.id === 3) {
            (async function loadNotificationsUser() {
                const notify = await loadNotifications(user?.empresaAdmin?.id || null);
                if (notify.ok) {
                    setNotificaciones(notify.notificaciones)
                }
            })()
        }

        return () => {
            setNotificaciones(null);
        };
    }, [localStorage.getItem("token"), user?.empresaAdmin?.id]);


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
                                <NavLink to="/admin/infoempresa">
                                    <p className="text-sm cursor-pointer  ">Empresas</p>
                                </NavLink>
                                {/* <NavLink to="/admin/addempresa">
                                    <p className="text-sm cursor-pointer  ">Añadir Empresas</p>
                                </NavLink> */}
                                <NavLink to="/perfil">
                                    <p className="text-sm cursor-pointer">Perfil</p>
                                </NavLink>
                            </>
                            :
                            (user?.rol.id === 2) ?
                                <>
                                    <NavLink to="/selectempresa" >
                                        <p className="text-sm cursor-pointer  ">Empresa</p>
                                    </NavLink>
                                    <NavLink to="/inicio" >
                                        <p className="text-sm cursor-pointer  ">Perfil</p>
                                    </NavLink>

                                </>
                                :
                                <>
                                    <p className="text-sm cursor-pointer text-gray-700 ">Inicio</p>
                                    <p className="text-sm cursor-pointer text-gray-700 ">Empresas</p>
                                </>


                    }
                </div>

                <div className="flex flex-row items-center justify-center   ">
                    <img className="w-12 h-12 object-cover rounded-full" alt="userPhoto" src={user?.photo}></img>
                    <p className="font-medium ml-1 text-gray-600 text-lg">{user?.name}</p>
                    <div className="relative flex items-center justify-center ">
                        <Bell className={notificaciones?.length === 0 ? "ml-2 cursor-pointer h-full color-black" : "ml-2 cursor-pointer h-full text-red-500"} onClick={() => setOnActive(!onActive)} size={23} />
                        {onActive &&
                            <div className="z-50 duration-700 border absolute h-96 flex flex-col items-center  p-4 top-6 right-0 w-96  bg-white border-grayBlack1 shadow-md rounded-lg">
                                <p className="text-gray-800 text-sm p-1 ">Notificaciones</p>
                                <div className="flex flex-col flex-grow w-full items-center justify-start ">
                                    {
                                        (notificaciones && notificaciones?.length > 0) ? notificaciones?.map(item => {
                                            return <ItemNotification {...item} key={item?.user?.id + item?.empresa?.id + item?.cargo?.id} />
                                        })
                                            :
                                            <div className="flex flex-col my-4 items-center" >
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
