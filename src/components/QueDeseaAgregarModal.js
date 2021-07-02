import React, { useState } from 'react'
import Modal from 'react-modal';
import AddCargoModal from './AddCargoModal';
import AddLocalidadModal from './AddLocalidadModal';
import AddRubroModal from './AddRubroModal';
import { useHistory } from 'react-router-dom';
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

const QueDeseaAgregarModal = () => {
    const router = useHistory();
    const [modalIsOpen, setIsOpen] = useState(false);
    const [option, setOption] = useState("");

    const onChange = (e) => {
        setOption(e.target.value)
    }

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setOption("")
        setIsOpen(false);
    }


    const handleChange = () => {
        switch (option) {
            case "Localidades":
                return <AddLocalidadModal />
            case "Cargo":
                return <AddCargoModal />
            case "Rubros":
                return <AddRubroModal />
            case "Empresa":
                router.push("/adminglobal/addempresa")
            default:
                break;
        }
    }


    return (
        <>
            <button className="bg-blue1 text-white font-bold ml-3 py-2 px-4 rounded" onClick={openModal}>Que desea Agregar</button>
            <Modal className="w-4/5 sm:max-w-xl bg-white p-6"
                /* overlayClassName="Overlay" */
                isOpen={modalIsOpen}
                closeTimeout={200}
                onRequestClase={closeModal}
                contentLabel=""
                preventScroll={true}
                style={customStyles}
            >
                <p className="text-gray-800 text-center text-3x1 font-semibold">Que Desea Agregar</p>
                <form className="" /* onSubmit={} */>
                    <div className="form-group my-6">
                        <label htmlFor="departamento">Que desea agegar hoy</label>
                        <select onChange={onChange} defaultValue="null" className="form-control" id="departamento">
                            <option value="null" disabled={true}>Seleccione una opcion</option>
                            <option value="Localidades">Localidades</option>
                            <option value="Rubros">Rubros</option>
                            <option value="Cargo">Cargo</option>
                            <option value="Empresa">Empresa</option>
                        </select>
                    </div>
                    {
                        handleChange()
                    }
                    <div className="form-group my-6 flex shadow-sm p-4 w-full">
                        <p className="text text-gray-500 text-lg text-center
                        ">Eliga una opcion a agregar y le abrira su controlador respectivo</p>
                    </div>
                    <div className="flex justify-center">
                        <button className="text-center m-auto bg-danger text-white font-bold py-2 px-4 mx-2 rounded" onClick={closeModal}>Cancelar</button>
                    </div>
                </form>
            </Modal>
        </>
    )
}

export default QueDeseaAgregarModal