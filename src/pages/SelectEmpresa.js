import React, { useEffect, useState } from 'react';
import { List, CheckCircle } from 'react-feather';
import { loadEmpleosXUser, searchEmpresaPa, sendSolicitud } from '../helpers/loadData';
import { useSelector } from 'react-redux';

const SelectEmpresa = () => {
    const auth = useSelector(state => state?.auth?.user)
    const [viewSearch, setviewSearch] = useState(false);
    const [empresas, setEmpresas] = useState(null);
    const [empleos, setEmpleos] = useState(null);
    const [soli, setSoli] = useState(1);
    useEffect(() => {
        (async function loadEmpleos() {
            if (auth?.id) {
                const empleos = await loadEmpleosXUser(auth.id);
                if (empleos?.ok) {
                    setEmpleos(empleos.empleos)
                } else {
                    setEmpleos([])
                }
            }
        })()
        return () => {
            setEmpresas(null);
        }
    }, [soli])

    const handleView = async (e) => {
        if (e.target.value.toString().trim().length > 0) {
            setviewSearch(true);
            const empresasFilter = await searchEmpresaPa(e.target.value, auth?.id);
            if (empresasFilter?.empresas) {
                setEmpresas(empresasFilter.empresas)
            }
            //onChange
        } else {
            setviewSearch(false);
            setEmpresas(null);
        }
    }
    const handleSendSolicitud = async (idempresa) => {
        //sendSolicitud
        const solicitud = await sendSolicitud(auth?.id, idempresa);
        if (solicitud.ok) {
            setviewSearch(false);
            setEmpresas(null)
            setSoli(state => state + 1)
        }

    }

    return (
        <div className="w-full h-full flex flex-row items-center justify-center">
            <div className=" bg-gradient-to-r from-green-500 via-green-400 to-green-300 w-full h-full flex items-center justify-center ">
                <div className="md:w-1/2 w-10/12 bg-white h-auto p-10 rounded-xl  flex justify-center items-center">
                    <div className="w-full h-auto flex justify-center items-center flex-col ">
                        <p className="text-3xl font-medium text-grayBlack1 flex items-center"><List />Seleccionar Empresa</p>
                        <p className="my-4 text-sm font-medium text-gray-400 text-center">Selecciona la empresa la cual deseas afiliarte y espera la confirmacion de dicha empresa</p>

                        <div className="md:w-3/4 w-full bg-gray-50 rounded-xl p-2 flex flex-col items-center shadow-md ">
                            <div className="formgroup relative ">
                                <input type="text" name="search" onChange={handleView} autoComplete="off" className="my-2  w-full p-3 border-2 shadow-md border-gray1 rounded-xl outline-none" placeholder="Busca tu empresa" />
                                {
                                    (viewSearch === true) &&
                                    <div className="absolute top-14 bg-white border-gray1 z-30 shadow-sm rounded-bl-xl rounded-br-xl border-2 border-t-0  left-0 w-full  p-2 h-48 max-h-48 overflow-y-auto">
                                        <div className="w-full h-full rounded-xl ">
                                            {
                                                (empresas?.length > 0 && empresas) && empresas?.map(e => {
                                                    console.log(e)
                                                    return (
                                                        <div key={e?.id} className="w-full my-2 h-16 rounded-full bg-gray-200 flex flex-row items-center justify-start p-1">
                                                            <img className="w-14 h-14 object-cover rounded-full bg-white" alt="logoEmpresa" src={e?.logo_empresa}></img>
                                                            <div className="flex flex-grow h-full items-center justify-between ">
                                                                <p className="text-gray-400 text-base font-normal">{e?.nombre_fantasia}</p>
                                                                <div className="h-full flex flex-col items-center  justify-center cursor-pointer pr-2">
                                                                    {
                                                                        (e?.solicitud === true) ?
                                                                            <>
                                                                                <CheckCircle className=" text-gray-600" fill="#ebed72" />
                                                                                <p className="text-gray-600">En Espera</p>
                                                                            </>
                                                                            :
                                                                            (e?.solicitud === false) ?
                                                                                <>
                                                                                    <CheckCircle className=" text-gray-600" fill="#77bd7f" />
                                                                                    <p className="text-gray-600">Confirmado</p>
                                                                                </>
                                                                                :
                                                                                <div className="w-full h-full flex flex-col items-center justify-center " onClick={() => { handleSendSolicitud(e.id) }}>

                                                                                    <CheckCircle className=" text-gray-600" fill="#3e96c2" />
                                                                                    <p className="text-gray-600">Solicitar</p>
                                                                                </div>
                                                                    }
                                                                </div>
                                                            </div>
                                                        </div>)
                                                })
                                            }
                                        </div>
                                    </div>
                                }
                            </div>
                            <div className="w-full h-40 bg-white p-2 rounded-xl overflow-y-auto  ">
                                <div className="w-full h-full">
                                    {
                                        (empleos && empleos?.length > 0) &&
                                        empleos.map(e => {
                                            return (
                                                <div className="w-full my-2 h-16 rounded-full bg-gray-200 flex flex-row items-center justify-start p-1">
                                                    <img className="w-14 h-14 object-cover rounded-full bg-white" alt="logoEmpresa" src={e?.empresa?.logo_empresa}></img>
                                                    <div className="flex flex-grow h-full items-center justify-between ">
                                                        <p className="text-gray-400 text-base font-normal">{e?.empresa?.nombre_fantasia}</p>
                                                        <div className="h-full flex flex-col items-center mr-2 justify-center cursor-pointer">
                                                            {
                                                                (e?.estado === 0) ?
                                                                    <>
                                                                        <CheckCircle className=" text-gray-600" fill="#ebed72" />
                                                                        <p className="text-gray-600">En Espera</p>
                                                                    </>
                                                                    :
                                                                    <>
                                                                        <CheckCircle className=" text-gray-600" fill="#77bd7f" />
                                                                        <p className="text-gray-600">Confirmado</p>
                                                                    </>
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};


SelectEmpresa.propTypes = {

};


export default SelectEmpresa;
