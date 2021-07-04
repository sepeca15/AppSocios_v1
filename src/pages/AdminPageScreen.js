import React, { useEffect, } from "react";
import AddInfoEmpresa from "../components/AddInfoEmpresa";
import QueDeseaAgregarModal from "../components/QueDeseaAgregarModal";
import { useDispatch, useSelector } from "react-redux";
import { getAllEmpresas, getbusquedaEmpresaText } from "../store/actions/empresas";
import { useForm } from "../helpers/useForm";
import ImportExcel from "../components/importExcel";

const AdminPageScreen = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllEmpresas());
    }, []);
    const state = useSelector((state) => state.empresas.empresas);

    const [form, setForm, reset] = useForm({
        data: ""
    })
    const dataBusqueda = (e) => {
        e.preventDefault()
        let data = e.target.value
        if (!data) {
            dispatch(getAllEmpresas());
        } else {
            dispatch(getbusquedaEmpresaText(data))
        }
    }
    return (
        <div className=" relative w-full h-full ">
            <div className="flex justify-around flex-col text-center bg-gray-100 md:flex-row mb-2 py-4 ">
                <div className="max-w-full lg:w-3/12 xl:w-2/12 flex items-center justify-center text-lg lg:text-left sm:text-base">
                    <label>
                        Centro comercial San Jose <br />{" "}
                        <span className="text-gray">Datos de las empresas </span>
                    </label>
                </div>
                <form className="max-w-full lg:w-5/12 xl:w-6/12 my-3 md:my-0 flex items-center justify-center">
                    <input
                        onChange={dataBusqueda}
                        className="shadow appearance-none border rounded w-4/6 md:w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="data"
                        id="username"
                        type="text"
                        placeholder="¿Estás buscando algún socio?"
                    />
                </form>
                <div className="max-w-full lg:w- xl:w-3/12 flex flex-col  items-center  justify-center">
                    <QueDeseaAgregarModal />
                    <ImportExcel />
                </div>
            </div>

            <div className="flex justify-center sm:justify-around my-2 flex-col sm:flex-row">
                <div className="text-center">
                    <label className="block text-center m-0">Rubro actividad</label>
                    <select className="w-2/3 sm:w-full py-2 px-4 border-2 rounded-xl outline-none">
                        <option value="volvo">Todos</option>
                        <option value="saab">Ropa</option>
                        <option value="opel">Deporte</option>
                    </select>
                </div>
                <div className="text-center">
                    <label className="block text-center m-0">
                        Empresas Activas/Inactivas (5)
                    </label>
                    <select className="w-2/3 sm:w-full py-2 px-4 border-2 rounded-xl outline-none">
                        <option value="volvo">Todos</option>
                        <option value="saab">Activas</option>
                        <option value="opel">Inactivas</option>
                    </select>
                </div>
                <div className="text-center">
                    <label className="block text-center m-0">Localidad</label>
                    <select className="w-2/3 sm:w-full  py-2 px-4 border-2 rounded-xl outline-none">
                        <option value="volvo">Todas</option>
                        <option value="audi">San Jose de Mayo</option>
                    </select>
                </div>
                <div className=" text-center">
                    <label className="block m-0">Empresas/Emprendedores</label>
                    <select className="w-2/3 sm:w-full py-2 px-4 border-2 rounded-xl outline-none">
                        <option value="volvo">Todos</option>
                        <option value="saab">Empresas</option>
                        <option value="opel">Emprendedores</option>
                    </select>
                </div>
            </div>

            <div className=" flex md:block flex-row flex-grow">
                <div className="bg-gray-200 md:w-full inline-block md:flex justify-between pb-2 pt-3 text-black rounded flex-col md:flex-row ">
                    <label className="flex p-2 md:p-0 lg:w-1/12 justify-center md:text-center">
                        Nombre
                    </label>
                    <label className="flex p-2 md:p-0 lg:w-2/12 justify-center md:text-center">
                        Contacto
                    </label>
                    <label className="flex p-2 md:p-0 lg:w-1/12 justify-center md:text-center">
                        Direccion
                    </label>
                    <label className="flex p-2 md:p-0 lg:w-1/12 justify-center md:text-center">
                        Empleados
                    </label>
                    <label className="flex p-2 md:p-0 lg:w-1/12 justify-center md:text-center">
                        Razon social
                    </label>
                    <label className="flex p-2 md:p-0 lg:w-2/12 justify-center md:text-center">
                        Numero RUT
                    </label>
                    <label className="flex p-2 md:p-0 lg:w-1/12 justify-center md:text-center">
                        Estado
                    </label>
                    <label className="flex p-2 md:p-0 lg:w-2/12 justify-center md:text-center"></label>
                </div>

                <div className="flex flex-nowrap flex-grow md:flex-col w-6/12 md:w-full heightvh overflow-x-auto md:overflow-y-auto ">
                    {state &&
                        state.map((empresa, index) => {
                            return <AddInfoEmpresa key={empresa.id + index} {...empresa} num={index} />;
                        })}
                </div>
            </div>
            <p>
                {" "}
                <span className="text-red-600">12</span> empresas se dieron de alta este
                mes y <span className="text-red-600">2</span> se dieron de baja
            </p>
        </div>
    );
};

export default AdminPageScreen;
