import React, { useState } from 'react'
import Modal from 'react-modal';
import PropTypes from "prop-types";

const customStyles = {
    overlay: {
        backgroundColor: '#0000007e',
    },
    content: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '15px',
    },
};

const AddLocalidadModal = (props) => {
    
    return (
        <>
            <Modal className="w-4/5 sm:max-w-xl bg-white p-6"
                /* overlayClassName="Overlay" */
                isOpen={props.modalIsOpen}
                closeTimeout={200}
                onRequestClase={props.closeModal}
                contentLabel=""
                preventScroll={true}
                style={customStyles}
            >
                <p className="text-gray-800 text-center text-3x1 font-semibold">Agregar Localidades</p>
                <form className="" /* onSubmit={} */>
                    <div className="form-group my-6">
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
                    <div className="form-group my-6">
                        <input
                            autoComplete="off"
                            type="text"
                            className="form-control"
                            placeholder="Ingrese una localidad"
                            name="Localidad"
                        /* onChange={ }
                        value={ } */
                        />
                    </div>
                    <div className="flex justify-end">
                    <button className="bg-green1 text-white font-bold py-2 px-4 mx-2 rounded">Guardar</button>
                    <button className="bg-danger text-white font-bold py-2 px-4 mx-2 rounded" onClick={props.closeModal}>Cancelar</button>
                    </div>
                </form>
            </Modal>
        </>
    )
}

export default AddLocalidadModal

AddLocalidadModal.propTypes = {
    modalIsOpen: PropTypes.bool,
    closeModal: PropTypes.func
};