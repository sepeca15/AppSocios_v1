import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fileupload } from "../helpers/fileUpload";
import { editUserPerfil } from "../store/actions/auth";
import { useForm } from "../helpers/useForm";
import { Link } from 'react-router-dom';
import { auth } from "../firebase/firebaseconfig";

const PerfilPage = () => {
  const [editar, setEditar] = useState(true);
  const [eitaroSave, setEitaroSave] = useState("Editar");
  const state = useSelector((state) => state.auth.user);
  const [form, setForm] = useForm({
    name: state?.name,
    last_name: state?.last_name,
    email: state?.email,
    telefono: state?.telefono,
    photo: state.photo ? state.photo : "https://filestore.community.support.microsoft.com/api/profileimages/594cfa76-526a-4815-91b1-4f168d81a3a2",
    id: state?.id
  })
  const dispatch = useDispatch();
  const [file, setFile] = useState(null);
  const changeFile = (file) => {
    const image = file.target.files;
    if (image) {
      setFile(image[0]);
    }
  };

  const editPerfil = async () => {
    if (file) {
      await fileupload(file)
        .then((e) => {
          dispatch(
            editUserPerfil(
              {
                ...form,
                photo: e,
              },
            )
          );
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      dispatch(
        editUserPerfil({
          ...form,
        })
      );
    }
  };
  return (
    <>
      <div className="flex items-center w-full justify-center">
        <div className="w-full">
          <div className="bg-white rounded-lg">
            <div className="portada p-2">
              <img
                className="w-32 h-32 rounded-full mx-auto"
                src={form.photo}
                alt="John Doe"
              />
            </div>
            <div className="p-2">
              <div className="flex justify-center text-gray-400 text-xs font-semibold">
                <input
                  disabled={editar}
                  autoComplete="off"
                  type="text"
                  className="form-control w-6/12 sm:w-3/12 mb-2 mr-1 text-sm my-1 p-2 border-2 shadow-md border-gray1 rounded-xl outline-none"
                  placeholder="Nombre"
                  name="name"
                  onChange={setForm}
                  value={form.name}
                  required
                />

                <input
                  disabled={editar}
                  autoComplete="off"
                  type="text"
                  className="form-control w-6/12 sm:w-3/12 mb-2 mr-1 text-sm my-1 p-2 border-2 shadow-md border-gray1 rounded-xl outline-none"
                  placeholder="Apellido"
                  name="last_name"
                  onChange={setForm}
                  value={form.last_name}
                  required
                />
              </div>
              <div className="flex justify-center text-gray-400 text-xs font-semibold">
                <input
                  disabled={editar}
                  autoComplete="off"
                  type="email"
                  className="form-control w-full sm:w-6/12 text-sm my-1 p-2 border-2 shadow-md border-gray1 rounded-xl outline-none"
                  placeholder="Email"
                  name="email"
                  onChange={setForm}
                  value={form.email}
                  required
                />
              </div>
              <div className="flex justify-center text-gray-400 text-xs font-semibold">
                <input
                  disabled={editar}
                  autoComplete="off"
                  type="text"
                  className="form-control mb-2 w-full sm:w-6/12 text-sm my-1 p-2 border-2 shadow-md border-gray1 rounded-xl outline-none"
                  placeholder="Celular"
                  name="telefono"
                  onChange={setForm}
                  value={form.telefono}
                  required
                />
              </div>
              {!editar ? <div className="flex justify-center text-gray-400 text-xs font-semibold">
                <input
                  type="file"
                  onChange={changeFile}
                  name="photo"
                  className="mb-2 w-full sm:w-6/12 text-sm my-1 mr-2 p-2 border-2 shadow-md border-gray1 rounded-xl outline-none"
                />
              </div> : ""}

              <div className=" text-center my-3">
                <button
                  onClick={() => {
                    if (editar) {
                      setEditar(false);
                      setEitaroSave("Guardar")
                    } else {
                      setEditar(true);
                      editPerfil()
                      setEitaroSave("Editar")
                    }
                  }}
                  className={editar ? "py-2 px-4 rounded-full font-bold text-xs text-white bg-yellow1 hover:bg-yellow-300" : "py-2 px-4 rounded-full font-bold text-xs text-white bg-green-500 hover:bg-green-300 "}
                  href="#"
                >
                  {eitaroSave}
                </button>
              </div>
              {
                (state?.esemprendedor == true && (state?.empleadoEmprendedor == null)) &&
                <Link to="/admin/addempresa" className="absolute bottom-4 left-4 bg-green1 rounded-full px-2 cursor-pointer text-white font-semibold py-4"> Crear Empresa</Link>
              }
            </div>
          </div>
          {
            ((state?.esemprendedor == true) && (state?.empleadoEmprendedor != null)) &&
            <div className="p-4 h-auto m-auto">
              <div className="w-80 m-auto h-auto p-4 shadow-md border-grayBlack1 rounded-xl border flex flex-col items-center ">
                <img className="w-10 h-10 rounded-full object-cover" src={state?.empleadoEmprendedor?.empresa?.logo_empresa} />
                <p className="text-gray-700 text-sm text-center"> El Administrador esta procesando tu solicitud para crear la emrpesa {state?.empleadoEmprendedor?.empresa.name} </p>
                <p className=" text-sm text-center text-yellow-300"> Por favor espere....{state?.empleadoEmprendedor?.empresa.name} </p>
              </div>
            </div>
          }
        </div>
      </div>
    </>
  );
};

export default PerfilPage;
