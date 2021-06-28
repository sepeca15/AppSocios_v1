import React from 'react'

const FormAddEmpresa = () => {
    return (
        <div className="w-full h-full bg-white">
            <form className="" /* onSubmit={handelSumit} */>
                <div className="w-10/12 flex flex-col items-center my-4 mx-auto">
                    <p className="text-gray-800 text-center text-3x1 font-semibold">Datos de la empresa</p>
                </div>
                <div className="md:flex md:flex-row mx-auto">
                    <div className="md:w-6/12 h-full flex flex-col items-center px-6 my-4 mx-auto">
                        <div className="form-group w-full">
                            <label htmlFor="Nombre fantasia">Nombre Fantasía:</label>
                            <input
                                autoComplete="off"
                                type="text"
                                className="form-control"
                                placeholder="Ingrese un Nombre fantasia"
                                name="Nombre fantasia"
                            /*  onChange={ }
                             value={ } */
                            />
                        </div>
                        <div className="form-group w-full">
                            <label htmlFor="Razón Social">Razón Social:</label>
                            <input
                                autoComplete="off"
                                type="text"
                                className="form-control"
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
                                className="form-control"
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
                                className="form-control"
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
                                className="form-control"
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
                                className="form-control"
                                placeholder="Ingrese un Direccion"
                                name="Direccion"
                            /*  onChange={ }
                             value={ } */
                            />
                        </div>
                        <div className="form-group w-full">
                            <label htmlFor="departamento">Departamento</label>
                            <select className="form-control" id="departamento">
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
                                className="form-control"
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
                                className="form-control"
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
                                className="form-control"
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
                                className="form-control"
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
                                className="form-control"
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
                                className="form-control"
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
                                className="form-control"
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
                                className="form-control"
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
