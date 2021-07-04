import React, { useState } from 'react'
import Modal from 'react-modal';
import { insertCargo } from '../helpers/loadData';
import { useForm } from '../helpers/useForm';

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

const AddCargoModal = () => {
    const [modalIsOpen, setIsOpen] = useState(true);

    function closeModal() {
        setIsOpen(false);
    }
    const [form, setForm] = useForm({
        cargo: "",
      });
    return (
        <>
            <Modal className="w-4/5 sm:max-w-xl bg-white p-6"
                /* overlayClassName="fondoModal" */
                isOpen={modalIsOpen}
                closeTimeout={200}
                onRequestClase={closeModal}
                contentLabel=""
                preventScroll={true}
                style={customStyles}
            >
                <p className="text-gray-800 text-center text-3x1 font-semibold">Agregar Cargo</p>
                <form className="" onSubmit={(e)=>{
                    e.preventDefault()
                    insertCargo(form.cargo)
                    closeModal()}}>
                    <div className="form-group my-6">

                        <input
                            autoComplete="off"
                            type="text"
                            className="form-control"
                            placeholder="Ingrese un Cargo"
                            name="cargo"
                            onChange={setForm}
                            value={form.cargo}
                        />
                    </div>
                    <div className="flex justify-end">
                        <button className="bg-green1 text-white font-bold py-2 px-4 mx-2 rounded">Guardar</button>
                        <button className="bg-danger text-white font-bold py-2 px-4 mx-2 rounded" onClick={closeModal}>Cancelar</button>
                    </div>
                </form>
            </Modal>
        </>
    )
}

export default AddCargoModal