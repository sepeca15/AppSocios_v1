import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fileupload } from "../helpers/fileUpload";
import { editUserPerfil } from "../store/actions/auth";
import { useForm } from "../helpers/useForm";

const PerfilPage = () => {
  const [editar, setEditar] = useState(true);
  const [eitaroSave, setEitaroSave] = useState("Editar");
  const state = useSelector((state) => state.auth.user);
  const [form, setForm] = useForm({
    name: state?.name,
    last_name: state?.last_name,
    cargo: state ? state.cargo : "",
    email: state?.email,
    telefono: state?.telefono,
    photo: state.photo?state.photo : "https://filestore.community.support.microsoft.com/api/profileimages/594cfa76-526a-4815-91b1-4f168d81a3a2",
    /* empresaWork: state?state.empresaWork:"", */
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
  /* const editPerfil = async () => {
    if (file) {
      await fileupload(file)
        .then((e) => {
          dispatch(
            editUserPerfil({
              ...form,
              photo: e,
            })
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
  }; */
  return (
    <>
      <div className="flex items-center w-full justify-center">
        {/* max-w-xs */}
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
                />
              </div>
              {/* {editar ? <div className="flex justify-center text-gray-400 text-xs font-semibold">
                <input
                  disabled={editar}
                  autoComplete="off"
                  type="text"
                  className="form-control w-full sm:w-6/12 text-sm my-1 p-2 border-2 shadow-md border-gray1 rounded-xl outline-none"
                  placeholder="Cargo"
                  name="cargo"
                  onChange={setForm}
                  value={form.cargo}
                />
              </div> : ""} */}
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PerfilPage;
