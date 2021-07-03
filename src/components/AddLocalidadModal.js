import React, { useState } from 'react'
import Modal from 'react-modal';
import PropTypes from "prop-types";
import { useForm } from '../helpers/useForm';
import { insertLocalidad } from '../helpers/loadData';

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
    const [modalIsOpen, setIsOpen] = useState(true);

    /* function openModal() {
        setIsOpen(true);
    } */

    function closeModal() {
        setIsOpen(false);
    }
    const [form, setForm] = useForm({
        departamento: "",
        localidad: "",
      });
    return (
        <>
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
                <form className="" onSubmit={e=>{e.preventDefault()
                insertLocalidad(form.localidad,form.departamento)
                console.log(form);
                closeModal()}}>
                    <div className="form-group my-6">
                        <label htmlFor="departamento">Departamento</label>
                        <select className="form-control" name="departamento"onChange={setForm}>
                            <option selected={true} disabled={true}>Selecione uno</option>
                            <option value={1}>Artigas</option>
                            <option value={2}>Canelones</option>
                            <option value={3}>Cerro Largo</option>
                            <option value={4}>Colonia</option>
                            <option value={5}>Durazno</option>
                            <option value={6}>Flores</option>
                            <option value={7}>Florida</option>
                            <option value={8}>Lavalleja</option>
                            <option value={9}>Maldonado</option>
                            <option value={10}>Montevideo</option>
                            <option value={11}>Paysandú</option>
                            <option value={12}>Río Negro</option>
                            <option value={13}>Rivera</option>
                            <option value={14}>Rocha</option>
                            <option value={15}>Salto</option>
                            <option value={16}>San José</option>
                            <option value={17}>Soriano</option>
                            <option value={18}>Tacuarembó</option>
                            <option value={19}>Treinta y Tres</option>
                        </select>
                    </div>
                    <div className="form-group my-6">
                        <input
                            autoComplete="off"
                            type="text"
                            className="form-control"
                            placeholder="Ingrese una localidad"
                            name="localidad"
                            onChange={setForm}
                            value={form.localidad}
                        />
                    </div>
                    <div className="flex justify-end">
                        <button className="bg-green1 text-white font-bold py-2 px-4 mx-2 rounded" type="submit">Guardar</button>
                        <button className="bg-danger text-white font-bold py-2 px-4 mx-2 rounded" onClick={closeModal}>Cancelar</button>
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