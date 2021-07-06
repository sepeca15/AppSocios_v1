import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { insertCargo, sendEmail } from '../helpers/loadData';
import { useForm } from '../helpers/useForm';
import { modalClose } from '../store/actions/auth';

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
        zIndex: "10",
    },
};

const SendHappybirthdatModal = () => {
    const modalIsOpen = useSelector(state => state.auth.modalOpen);
    const modalData = useSelector(state => state.auth.modalData);
    const dispatch = useDispatch();
    function closeModal() {
        dispatch(modalClose());
    }
    useEffect(() => {
        setCoso({
            email: modalData?.email,
            texto: "Feliz cumpleaños de parte de ...."
        })
    }, [modalIsOpen])
    const handleSendEmail = async (e) => {
        e.preventDefault();
        const sendEmails = await sendEmail(form);
        if (sendEmails.ok) {
            Swal.fire("Se envio su correo", "Se envio el correo de feliz cumpleaños ", "success");
            closeModal()
        }
    }
    const [form, setCoso] = useState({
        email: modalData?.email,
        texto: "Feliz cumpleaños de parte de ...."
    });
    const setForm = (e) => {
        setCoso({ ...form, [e.target.name]: e.target.value })
    }
    return (
        <>
            <Modal className=" mod w-4/5 sm:max-w-xl bg-gray-100 p-6 "
                overlayClassName="fondomodal"
                isOpen={modalIsOpen}
                closeTimeout={200}
                onRequestClase={closeModal}
                contentLabel=""
                preventScroll={true}
                style={customStyles}
            >
                <p className="text-gray-800 text-center   text-3x1 font-semibold">Enviar Correo</p>
                <p className="text-gray-800 text-center text-2x1 font-semibold">Cumpleaños de {modalData?.title}</p>
                <form className="" onSubmit={handleSendEmail}>
                    <div className="form-group my-6">

                        <input
                            autoComplete="off"
                            type="text"
                            className="form-control my-4 "
                            placeholder="Ingrese un Email"
                            name="email"
                            onChange={setForm}
                            value={form.email}
                            required
                        />
                        <textarea
                            autoComplete="off"
                            type="text"
                            className="form-control h-40 my-4 "
                            placeholder="Ingrese mensaje"
                            name="texto"
                            onChange={setForm}
                            value={form.texto}
                            required
                        ></textarea>
                    </div>
                    <div className="flex justify-end">
                        <button className="bg-green1 text-white font-bold py-2 px-4 mx-2 rounded" >Enviar</button>
                        <button className="bg-danger text-white font-bold py-2 px-4 mx-2 rounded" onClick={closeModal}>Cancelar</button>
                    </div>
                </form>
            </Modal>
        </>
    )
}

export default SendHappybirthdatModal;