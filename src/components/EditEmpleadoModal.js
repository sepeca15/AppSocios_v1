import React from 'react'
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

const EditEmpleadoModal = (props) => {
    
    return (
        <div className="z-auto overflow-x-auto">
            <Modal className="w-4/5 sm:max-w-xl bg-white  p-6 "
                /* overlayClassName="Overlay" */
                isOpen={props.modalIsOpen}
                closeTimeout={200}
                onRequestClase={props.closeModal}
                contentLabel=""
                preventScroll={true}
                style={customStyles}
            >
                <p className="text-gray-800 text-center text-3x1 font-semibold">Editar datos Empleado</p>
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
                        <label htmlFor="departamento">Departamento</label>
                        <select className="form-control  py-2 mb-4" id="departamento">
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
                         <label>Localidad</label>
                        <input
                            autoComplete="off"
                            type="text"
                            className="form-control py-2 mb-4"
                            placeholder="Ingrese una Direccion"
                            name="Direccion"
                        /* onChange={ }
                        value={ } */
                        />
                         <label>Cargo</label>
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

export default EditEmpleadoModal

EditEmpleadoModal.propTypes = {
    modalIsOpen: PropTypes.bool,
    closeModal: PropTypes.func
};