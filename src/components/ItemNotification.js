import React from 'react';
import PropTypes from 'prop-types';
import { allowEmployed, deniedEmployed } from '../helpers/loadData';
import { ArrowRight } from 'react-feather';
import Swal from 'sweetalert2';

const ItemNotification = ({ estado, user, empresa, cargo }) => {
    const handleAceptar = async () => {
        const resp = await allowEmployed({ user: user.id, empresa: empresa?.id, cargo: cargo.id })
        if (resp?.ok) {
            Swal.fire("Succes", "Se autorizo la solicitud para este usuario", "success")
        }
    }

    const handleCancelar = async () => {
        const resp = await deniedEmployed({ user: user.id, empresa: empresa.id, cargo: cargo.id })
        if (resp?.ok) {
            Swal.fire("Succes", "Se denego la solicitud para este usuario", "success")
        }
    }
    return (
        <div className="w-full h-36 p-2 bg-gray-100 rounded-xl flex flex-col my-2">
            <div className="flex flex-row items-center justify-center">
                <div className=" h-auto py-1 flex flex-row items-center justify-start">
                    <img className=" w-10 h-10 object-cover rounded-full" src={user?.photo} />
                    <ArrowRight size={24} />
                    <img className=" w-10 h-10 object-cover rounded-full" src={empresa?.logo_empresa} />
                </div>
                <p className="text-gray-700 flex-grow">Maxi SIlva</p>
            </div>
            <div className="flex flex-row flex-grow items-center justify-center">
                <p className="text-xs text-left  text-gray-700 flex-grow">{user?.name || "Sin nombre"} a solicitado unirse a la empresa {empresa?.nombre_fantasia || "Sin nombre"} con un cargo de {cargo?.name || "Empleado"}</p>
            </div>
            <div className="flex flex-row flex-grow items-center justify-around my-2">
                <button onClick={() => handleCancelar()} className="text-sm  py-2 px-4 rounded-full bg-red1 text-white font-medium cursor-pointer hover:bg-transparent border-2 duration-500 border-red1 hover:text-red1">Cancelar</button>
                <button onClick={() => handleAceptar()} className="text-sm  py-2 px-4 rounded-full bg-green1 text-white font-medium cursor-pointer hover:bg-transparent border-2 duration-500 border-green1 hover:text-green1">Aceptar</button>
            </div>
        </div>
    );
};


ItemNotification.propTypes = {

};


export default ItemNotification;
