import React, { useState } from 'react'
import PropTypes from 'prop-types';
import Modal from 'react-modal';

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

const AddEmpleadoModal = (props) => {
    
    return (
        <div className="z-auto">
            <Modal className="w-4/5 sm:max-w-xl bg-white  p-6"
                /* overlayClassName="Overlay" */
                isOpen={props.modalIsOpen}
                closeTimeout={200}
                onRequestClase={props.closeModal}
                contentLabel=""
                preventScroll={true}
                style={customStyles}
            >
                <p className="text-gray-800 text-center text-3x1 font-semibold">Agregar Empleado</p>
                <form className="" /* onSubmit={} */>
                    <div className="form-group my-6">
                        <label>Nombre</label>
                        <input
                            autoComplete="off"
                            type="text"
                            className="form-control py-2 mb-4"
                            placeholder="Ingrese un Nombre"
                            name="Nombre"
                        /* onChange={ }
                        value={ } */
                        />
                        <label>Apellido</label>
                        <input
                            autoComplete="off"
                            type="text"
                            className="form-control py-2 mb-4"
                            placeholder="Ingrese un Apellido"
                            name="Apellido"
                        /* onChange={ }
                        value={ } */
                        />
                        <label>Email</label>
                        <input
                            autoComplete="off"
                            type="text"
                            className="form-control py-2 mb-4"
                            placeholder="Ingrese un Email"
                            name="Email"
                        /* onChange={ }
                        value={ } */
                        />
                        <label>Celular</label>
                        <input
                            autoComplete="off"
                            type="text"
                            className="form-control py-2 mb-4"
                            placeholder="Ingrese un Celular"
                            name="Celular"
                        /* onChange={ }
                        value={ } */
                        />
                        <label>Telefono</label>
                        <input
                            autoComplete="off"
                            type="text"
                            className="form-control py-2 mb-4"
                            placeholder="Ingrese una Telefono"
                            name="Telefono"
                        /* onChange={ }
                        value={ } */
                        />
                        <label>Direccion</label>
                        <input
                            autoComplete="off"
                            type="text"
                            className="form-control py-2 mb-4"
                            placeholder="Ingrese una Direccion"
                            name="Direccion"
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
        </div>
    )
}

export default AddEmpleadoModal

AddEmpleadoModal.propTypes = {
    modalIsOpen: PropTypes.bool,
    closeModal: PropTypes.func
};