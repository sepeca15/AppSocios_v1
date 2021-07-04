import React, { useState } from 'react'
import Modal from 'react-modal';
import AddCargoModal from './AddCargoModal';
import AddLocalidadModal from './AddLocalidadModal';
import AddRubroModal from './AddRubroModal';
import { useHistory } from 'react-router-dom';
import XLSX from 'xlsx'
import Swal from 'sweetalert2';
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

const ImportExcel = () => {
    const router = useHistory();
    const [modalIsOpen, setIsOpen] = useState(false);
    const [data, setData] = useState(null)


    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {

        setIsOpen(false);
    }

    const handleChangeFile = (event) => {
        try {
            const target = event.target;
            const value = target.type === 'checkbox' ? target.checked : target.value
            const name = target.name;
            let hojas = [];

            if (name === 'file') {
                let reader = new FileReader();
                reader.readAsArrayBuffer(target.files[0]);
                reader.onloadend = (e) => {
                    var data = new Uint8Array(e.target.result)
                    var workboox = XLSX.read(data, { type: 'array' });
                    workboox.SheetNames.forEach((sheetname) => {
                        var XL_row_object = XLSX.utils.sheet_to_json(workboox.Sheets[sheetname]);
                        hojas.push({
                            data: XL_row_object,
                            sheetname
                        })
                        if (hojas?.length >= 0) {
                            setData(hojas[0])
                        } else {
                            Swal.fire("Error", "Archivo incorrecto", "error")
                        }

                    })
                }
            } else {
                Swal.fire("Error", "Archivo incorrecto", "error")
            }
        } catch (error) {
            alert("jaja")
            Swal.fire("Error", "Archivo incorrecto", "error")
        }

    }

    return (
        <>
            <button className="bg-blue1 text-white font-bold ml-3 py-2 px-4  my-2 rounded" onClick={openModal}>Importar Excel</button>
            <Modal className=" bg-white p-6"
                /* overlayClassName="Overlay" */
                isOpen={modalIsOpen}
                closeTimeout={200}
                onRequestClase={closeModal}
                contentLabel=""
                preventScroll={true}
                style={customStyles}
            >
                <p className="text-gray-800 text-center text-3x1 font-semibold">Que Desea Agregar</p>
                <form className="  " /* onSubmit={} */>
                    {
                        (data !== null) ?
                            <div>Seleccionaste</div>
                            :
                            <div className="form-group my-6 flex justify-center">
                                <input requried className="bg-green-100 p-4" onChange={handleChangeFile} type="file" name="file" id="file" placeholder="Abrir Archivo Excel" />
                            </div>
                    }
                    <div className="flex justify-center">
                        <button className="text-center m-auto bg-danger text-white font-bold py-2 px-4 mx-2 rounded" onClick={closeModal}>Cancelar</button>
                        <button type="submit" className="text-center m-auto bg-green1 text-white font-bold py-2 px-4 mx-2 rounded" onClick={closeModal}>Aceptar</button>
                    </div>
                </form>
            </Modal>
        </>
    )
}

export default ImportExcel