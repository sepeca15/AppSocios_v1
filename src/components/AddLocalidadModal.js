import React from 'react'
import Modal from '@material-ui/core/Modal';

const AddLocalidadModal = () => {
    return (
        <Modal className="w-4/5 sm:max-w-xl"
            overlayClassName="fondoModal"
            isOpen={ }
            closeTimeout={200}
            onRequestClase={closeModal} /* ? */
            contentLabel=""
            preventScroll={true}
        >
            <p className="text-gray-800 text-center text-3x1 font-semibold">Agregar Localidades</p>
            <form className="" onSubmit={ }>
                <div className="form-group my-6">
                    <label for="departamento">Departamento</label>
                    <select className="form-control" id="departamento">
                        <option>Artigas</option>
                        <option>Canelones</option>
                        <option>Cerro Largo</option>
                        <option>Colonia</option>
                        <option>Durazno</option>
                        <option>Flores</option>
                        <option>Florida</option>
                        <option>Lavalleja</option>
                        <option>Maldonado</option>
                        <option>Montevideo</option>
                        <option>Paysandú</option>
                        <option>Río Negro</option>
                        <option>Rivera</option>
                        <option>Rocha</option>
                        <option>Salto</option>
                        <option>San José</option>
                        <option>Soriano</option>
                        <option>Tacuarembó</option>
                        <option>Treinta y Tres</option>
                    </select>
                </div>
                <div className="form-group my-6">
                    <input
                        autoComplete="off"
                        type="text"
                        className="form-control"
                        placeholder="Ingrese una localidad"
                        name="Localidad"
                        onChange={ }
                        value={ }
                    />
                </div>

            </form>
        </Modal>
    )
}

export default AddLocalidadModal