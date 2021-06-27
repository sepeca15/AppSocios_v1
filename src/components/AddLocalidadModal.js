import React, { useState } from 'react'
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

const AddLocalidadModal = () => {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <>
            <button onClick={openModal}>Open Modal AddLocalidadModal</button>
            <Modal className="w-4/5 sm:max-w-xl bg-white p-6"
                /* overlayClassName="Overlay" */
                isOpen={modalIsOpen}
                closeTimeout={200}
                onRequestClase={closeModal}
                contentLabel=""
                preventScroll={true}
                style={customStyles}
            >
                <p className="text-gray-800 text-center text-3x1 font-semibold">Agregar Localidades</p>
                <form className="" /* onSubmit={} */>
                    <div className="form-group my-6">
                        <label htmlFor="departamento">Departamento</label>
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
                        /* onChange={ }
                        value={ } */
                        />
                    </div>
                    <div className="flex justify-end">
                    <button className="bg-green text-white font-bold py-2 px-4 mx-2 rounded">Guardar</button>
                    <button className="bg-danger text-white font-bold py-2 px-4 mx-2 rounded" onClick={closeModal}>Cancelar</button>
                    </div>
                </form>
            </Modal>
        </>
    )
}

export default AddLocalidadModal