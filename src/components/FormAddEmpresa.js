import React, { useForm, useState } from 'react'
import { useDispatch } from 'react-redux';

const FormAddEmpresa = () => {
    const [file, setFile] = useState(null);
    const dispatch = useDispatch()
    const [form, setForm, reset] = useForm({
        nombre_fantasia: "",
        telefono: "",
        nro_referencia: "",
        celular: "",
        direccion: "",
        rut: "",
        email: "data:image/png;base64,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",
        razon_social: "",
        nro_bps: "",
        fecha_afiliacion: "",
        fecha_inicio_empresa: "",
        activa: "",
        fecha_baja: "",
        observaciones: "",
        logo_empresa: "",
        localaidad: "",
    })
    const changeFile = (file) => {
        const image = file.target.files
        if (image) {
            setFile(image[0]);
        }
    }
    return (
        <div className="w-full h-full bg-white">
            <form className="" /* onSubmit={handelSumit} */>
                <div className="w-10/12 flex flex-col items-center my-4 mx-auto">
                    <p className="text-gray-800 text-center text-3x1 font-semibold">Rellena los campos para añadir una Empresa</p>
                </div>
                <div className="md:flex md:flex-row mx-auto">
                    <div className="md:w-6/12 h-full flex flex-col items-center px-6 my-4 mx-auto">
                        <div className="form-group w-full">
                            <label htmlFor="Nombre fantasia">Nombre Fantasía:</label>
                            <input
                                autoComplete="off"
                                type="text"
                                className="form-control text-sm my-1 mr-2 p-2 border-2 shadow-md border-gray1 rounded-xl outline-none"
                                placeholder="Ingrese un Nombre fantasia"
                                name="Nombre fantasia"
                                value={form.nombre_fantasia}
                            /*  onChange={ }
                             value={ } */
                            />
                        </div>
                        <div className="form-group w-full">
                            <label htmlFor="Razón Social">Razón Social:</label>
                            <input
                                autoComplete="off"
                                type="text"
                                className="form-control text-sm my-1 mr-2 p-2 border-2 shadow-md border-gray1 rounded-xl outline-none"
                                placeholder="Ingrese una Razón Social"
                                name="Razón Social"
                            /*  onChange={ }
                             value={ } */
                            />
                        </div>
                        <div className="form-group w-full">
                            <label htmlFor="Email">Email:</label>
                            <input
                                autoComplete="off"
                                type="text"
                                className="form-control text-sm my-1 mr-2 p-2 border-2 shadow-md border-gray1 rounded-xl outline-none"
                                placeholder="Ingrese un Email"
                                name="Email"
                            /*  onChange={ }
                             value={ } */
                            />
                        </div>
                        <div className="form-group w-full">
                            <label htmlFor="Celular">Celular:</label>
                            <input
                                autoComplete="off"
                                type="text"
                                className="form-control text-sm my-1 mr-2 p-2 border-2 shadow-md border-gray1 rounded-xl outline-none"
                                placeholder="Ingrese un Celular"
                                name="Celular"
                            /*  onChange={ }
                             value={ } */
                            />
                        </div>
                        <div className="form-group w-full">
                            <label htmlFor="Telefono">Telefono:</label>
                            <input
                                autoComplete="off"
                                type="text"
                                className="form-control text-sm my-1 mr-2 p-2 border-2 shadow-md border-gray1 rounded-xl outline-none"
                                placeholder="Ingrese un Telefono"
                                name="Telefono:"
                            /*  onChange={ }
                             value={ } */
                            />
                        </div>
                        <div className="form-group w-full">
                            <label htmlFor="Direccion">Direccion:</label>
                            <input
                                autoComplete="off"
                                type="text"
                                className="form-control text-sm my-1 mr-2 p-2 border-2 shadow-md border-gray1 rounded-xl outline-none"
                                placeholder="Ingrese un Direccion"
                                name="Direccion"
                            /*  onChange={ }
                             value={ } */
                            />
                        </div>
                        <div className="form-group w-full">
                            <label htmlFor="departamento">Departamento</label>
                            <select className="form-control text-sm my-1 w-full p-2 border-2 shadow-md border-gray1 rounded-xl outline-none" id="departamento">
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
                                <option value="Paysandú">Paysandú</option>
                                <option value="Río Negro">Río Negro</option>
                                <option value="Rivera">Rivera</option>
                                <option value="Rocha">Rocha</option>
                                <option value="Salto">Salto</option>
                                <option value="San José">San José</option>
                                <option value="Soriano">Soriano</option>
                                <option value="Tacuarembó">Tacuarembó</option>
                                <option value="Treinta y Tres">Treinta y Tres</option>
                            </select>
                        </div>
                        <div className="form-group w-full">
                            <label htmlFor="Localidad">Localidad:</label>
                            <input
                                autoComplete="off"
                                type="text"
                                className="form-control text-sm my-1 mr-2 p-2 border-2 shadow-md border-gray1 rounded-xl outline-none"
                                placeholder="Ingrese una Localidad"
                                name="Localidad"
                            /* onChange={ }
                            value={ } */
                            />
                        </div>
                    </div>
                    <div className="md:w-6/12 h-flex flex flex-col items-center px-6 my-4 mx-auto">
                        <div className="form-group w-full">
                            <label htmlFor="Número de RUT">Número de RUT:</label>
                            <input
                                autoComplete="off"
                                type="text"
                                className="form-control text-sm my-1 mr-2 p-2 border-2 shadow-md border-gray1 rounded-xl outline-none"
                                placeholder="Ingrese un Número de RUT"
                                name="Número de RUT"
                            /*  onChange={ }
                             value={ } */
                            />
                        </div>
                        <div className="form-group w-full">
                            <label htmlFor="Nro_BPS">Nro_BPS:</label>
                            <input
                                autoComplete="off"
                                type="text"
                                className="form-control text-sm my-1 mr-2 p-2 border-2 shadow-md border-gray1 rounded-xl outline-none"
                                placeholder="Ingrese un Nro_BPS"
                                name="Nro_BPS"
                            /*  onChange={ }
                             value={ } */
                            />
                        </div>
                        <div className="form-group w-full">
                            <label htmlFor="Nro_Referencia">Nro_Referencia:</label>
                            <input
                                autoComplete="off"
                                type="text"
                                className="form-control text-sm my-1 mr-2 p-2 border-2 shadow-md border-gray1 rounded-xl outline-none"
                                placeholder="Ingrese un Nro_Referencia"
                                name="Nro_Referencia"
                            /*  onChange={ }
                             value={ } */
                            />
                        </div>
                        <div className="form-group w-full">
                            <label htmlFor="Fecha de inicio de empresa">Fecha de inicio de empresa:</label>
                            <input
                                autoComplete="off"
                                type="text"
                                className="form-control text-sm my-1 mr-2 p-2 border-2 shadow-md border-gray1 rounded-xl outline-none"
                                placeholder="Ingrese un Fecha de inicio de empresa"
                                name="Fecha de inicio de empresa"
                            /*  onChange={ }
                             value={ } */
                            />
                        </div>
                        <div className="form-group w-full">
                            <label htmlFor="Fecha de Afiliacion">Fecha de Afiliacion:</label>
                            <input
                                autoComplete="off"
                                type="text"
                                className="form-control text-sm my-1 mr-2 p-2 border-2 shadow-md border-gray1 rounded-xl outline-none"
                                placeholder="Ingrese un Fecha de Afiliacion"
                                name="Fecha de Afiliacion"
                            /*  onChange={ }
                             value={ } */
                            />
                        </div>
                        <div className="form-group w-full">
                            <label htmlFor="Fecha de baja">Fecha de baja:</label>
                            <input
                                autoComplete="off"
                                type="text"
                                className="form-control text-sm my-1 mr-2 p-2 border-2 shadow-md border-gray1 rounded-xl outline-none"
                                placeholder="Ingrese un Fecha de baja"
                                name="Fecha de baja"
                            /*  onChange={ }
                             value={ } */
                            />
                        </div>
                        <div className="form-group w-full">
                            <label htmlFor="Observaciones">Observaciones:</label>
                            <input
                                autoComplete="off"
                                type="text"
                                className="form-control text-sm my-1 mr-2 p-2 border-2 shadow-md border-gray1 rounded-xl outline-none"
                                placeholder="Ingrese una Observaciones"
                                name="Observaciones"
                            /*  onChange={ }
                             value={ } */
                            />
                        </div>
                        <div className="flex justify-end content-end py-8 w-full">
                            <button className="bg-green1 text-white font-bold py-2 px-4 mx-2 rounded">Guardar</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default FormAddEmpresa
