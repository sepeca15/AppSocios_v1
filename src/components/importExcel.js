import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';
import AddCargoModal from './AddCargoModal';
import AddLocalidadModal from './AddLocalidadModal';
import AddRubroModal from './AddRubroModal';
import { useHistory } from 'react-router-dom';
import XLSX from 'xlsx'
import Swal from 'sweetalert2';
import AddInfoEmpresa from './AddInfoEmpresa';
import { loadAlllocalidades, loadLocalidades } from '../helpers/loadData';
import { postEmpresa, postEmpresaExcel } from '../store/actions/empresas';
import Carousel from 'react-elastic-carousel'
import { ReactComponent as Partners } from '../svg/partners.svg';
import { ReactComponent as Welcome } from '../svg/welcome.svg';
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
    const [localidades, setLocalidades] = useState(null);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {

        setIsOpen(false);
    }
    useEffect(() => {
        (async function locadAllLocalidades() {
            if (modalIsOpen == true) {
                const localidad = await loadAlllocalidades();
                if (localidad.ok) {
                    setLocalidades(localidad.localidades)
                    console.log(localidad.localidades)
                }
            } else {
                setData(null);
            }
        })()
    }, [modalIsOpen]);

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
            Swal.fire("Error", "Archivo incorrecto", "error")
        }

    }
    const handleRegister = async (e) => {
        e.preventDefault();
        var inserts = 0;
        var noinserts = 0;
        Promise.all(data?.data?.map(async (e) => {
            const insert = await postEmpresaExcel(e, false);
            if (insert.ok) {
                inserts++;
            } else {
            }
        })).then(() => {
            if (inserts == data?.data?.length) {
                Swal.fire("success", "Se insertaron correctamente todos los datos de la planilla", "success")
            } else {
                Swal.fire("success", `Se insertaron ${inserts}/${data?.data?.length} registros correctamente`, "error")
                alert(inserts)
            }
        })



        // const insert = await postEmpresa(data?.data?.[i], false);
        //     console.log(insert)
        //     if (insert.ok) {
        //         inserts++;
        //     } else {
        //         alert("no se inserto")
        //     }



    }

    return (
        <>
            <button className="bg-blue1 text-white font-bold ml-3 py-2 px-4  my-2 rounded" onClick={openModal}>Importar Excel</button>
            <Modal className=" bg-white p-6 w-10/12"
                /* overlayClassName="Overlay" */
                isOpen={modalIsOpen}
                closeTimeout={200}
                onRequestClase={closeModal}
                contentLabel=""
                preventScroll={true}
                style={customStyles}
            >
                <p className="text-gray-800 text-center text-3x1 font-semibold">Importar Empresas Desde Excel</p>
                <form className="w-full h-auto overflow-auto" onSubmit={handleRegister} >
                    {
                        (data !== null && (data?.data?.[0]?.nombre_fantasia || data?.data?.[0]?.email)) ?
                            <div className=" w-full h-96 max-w-screen-xl min-w-min  p-2 my-4 flex flex-col items-center justify-start bg-gray-100 overflow-x-scroll overflow-y-auto">
                                <div className="w-full  flex flex-row  pb-2  border-b  border-black my-3 ">
                                    <p className="text-sm  mx-2 w-24">Rut</p>
                                    <p className="text-sm  mx-2 w-24">Nro_referencia</p>
                                    <p className="text-sm  mx-2 w-24">Telefono</p>
                                    <p className="text-sm  mx-2 w-24">Celular</p>
                                    <p className="text-sm  mx-2 w-24">Email</p>
                                    <p className="text-sm  mx-2 w-24">Direccion</p>
                                    <p className="text-sm  mx-2 w-24">Nombre_Fan</p>
                                    <p className="text-sm  mx-2 w-24">Razon Social</p>
                                    <p className="text-sm  mx-2 w-24">Nro_bps</p>
                                    <p className="text-sm  mx-2 w-24">Afiliacion</p>
                                    <p className="text-sm  mx-2 w-24">Inicio Empresa</p>
                                    <p className="text-sm  mx-2 w-24">Activa</p>
                                    <p className="text-sm  mx-2 w-24">Observaciones</p>
                                    <p className="text-sm  mx-2 w-24">Localidad</p>

                                </div>
                                {
                                    data?.data.map((e, i) => {
                                        return (
                                            <div className="w-full h-auto flex flex-row my-2 ">
                                                <p className="text-sm  mx-2 w-24">{e?.rut}</p>
                                                <p className="text-sm  mx-2 w-24">{e?.nro_referencia}</p>
                                                <p className="text-sm  mx-2 w-24">{e?.telefono}</p>
                                                <p className="text-sm  mx-2 w-24">{e?.celular}</p>
                                                <p className="text-sm  mx-2 w-24 whitespace-nowrap overflow-ellipsis overflow-hidden">{e?.email}</p>
                                                <p className="text-sm  mx-2 w-24">{e?.direccion}</p>
                                                <p className="text-sm  mx-2 w-24">{e?.nombre_fantasia}</p>
                                                <p className="text-sm  mx-2 w-24">{e?.razon_social}</p>
                                                <p className="text-sm  mx-2 w-24">{e?.nro_bps}</p>
                                                <p className="text-sm  mx-2 w-24">{e?.fecha_afiliacion}</p>
                                                <p className="text-sm  mx-2 w-24">{e?.fecha_inicio_empresa}</p>
                                                <p className="text-sm  mx-2 w-24">{e?.activa}</p>
                                                <p className="text-sm  mx-2 w-24">{e?.observaciones}</p>
                                                <select key={e?.rut + i} onChange={(ev) => {
                                                    e.localidad = ev;
                                                }} className="text-sm w-24 rounded-sm ">
                                                    {localidades?.map(e => {
                                                        return <option className="" value={e.id}>{e.name}</option>
                                                    })}
                                                </select>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            :
                            <div className="form-group my-6 w-full flex flex-col items-center justify-center">
                                <h1 className="text-center text-grayBlack1 font-semibold ">Consideraciones:</h1>
                                <div className="w-96 flex flex-col items-center my-4">
                                    <p className="text-center justify-center text-md text-gray-600">Por favor utiliza un formato especifico de excel el cual lo encontraras Aqui</p>
                                </div>

                                <input requried className="flex  bg-green-100 p-4 text-center " onChange={handleChangeFile} type="file" name="file" id="file" placeholder="Abrir Archivo Excel" />
                            </div>
                    }
                    <div className="flex justify-center">
                        <button className="text-center m-auto bg-danger text-white font-bold py-2 px-4 mx-2 rounded" onClick={closeModal}>Cancelar</button>
                        <button type="submit" className="text-center m-auto bg-green1 text-white font-bold py-2 px-4 mx-2 rounded" >Aceptar</button>
                    </div>
                </form>
            </Modal>
        </>
    )
}

export default ImportExcel