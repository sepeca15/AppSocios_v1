import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { fileupload } from "../helpers/fileUpload";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../helpers/useForm";
import {
  loadDepartamentos,
  loadLocalidades,
  loadCargos,
} from "../helpers/loadData";
import { editEmpleadoEmpresa, postempleadoEmpresa } from "../store/actions/empleadosEmpresa";
/* import { numbers } from "@material/textfield"; */
import Swal from "sweetalert2";

const customStyles = {
  overlay: {
    backgroundColor: "#0000007e",
  },
  content: {
    position: "absolute",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "15px",
  },
};

const AddEmpleadoModal = ({ modalIsOpen, closeModal, post_Put = false }) => {
  const [departamento, setDepartamentos] = useState(null);
  const [localidades, setLocalidades] = useState(null);
  const [cargos, setCargos] = useState(null);
  const state = useSelector((state) => state.auth.user);
  /* const cargo = useSelector((state) => state?.empleadosEmpresa?.activeEmpleado?.cargo) */
  const user = useSelector((state) => state?.empleadosEmpresa?.activeEmpleado?.user)
  const empresa = useSelector((state) => state?.empleadosEmpresa?.activeEmpleado?.empresa)
  const cargo = useSelector((state) => state?.empleadosEmpresa?.activeEmpleado?.cargo)
  const localidadEmpresaActual = useSelector(
    (state) => state.empleadosEmpresa?.activeEmpleado?.localidad
  );
  const [dpto, setDpto] = useState("")
  const dispatch = useDispatch();
  const [form, setCoso] = useState({
    name: post_Put == true ? "" : modalIsOpen == true ? user?.name : "",
    last_name:
      post_Put == true
        ? ""
        : modalIsOpen == true
          ? user?.last_name
          : user?.last_name,
    name_user:
      post_Put == true
        ? ""
        : modalIsOpen == true
          ? user?.name_user
          : user?.name_user,
    email:
      post_Put == true ? "" : modalIsOpen == true ? user?.email : user?.email,
    password: post_Put == true ? "" : modalIsOpen == true ? user?.password : "",
    photo:
      post_Put == true
        ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX8/PxSUlL///9PT09LS0tAQEBERERGRkZFRUVMTEw+Pj7z8/Pw8PA7OzvFxcXh4eFoaGjV1dW/v79VVVWtra3q6uqdnZ2RkZGEhIRbW1u0tLTLy8umpqZzc3Pe3t5jY2N4eHiLi4uPj49+fn4kJCQSYEkLAAAKKUlEQVR4nO1daZeiPBOVSgBBcUHFdutux/f//8YXdFxYTS1B5jm5n/rMOUNyraRSW1KjkYODg4ODg4ODGKCCT89HDHc+k/lyuUz3VxzyPzeT/wDTK4H5YZ19rbzQD3KEN4zzP31fqcXlmB6m/ybPYtKTw/rLi4Ox1pHyGqEiHY79ZJGl3/8Wy0Jy6XYVj3XUzKxKVIdBsDgeRv8Ey0J2s23oh7pFbu00x/5ivRw6SYDN+pSEGkfuhWXgnw/DJZlLb72IsbKrIgrCYZLM5zT79UMmvTtJvZ0PjGO+OrNgLELvBu3/zEbDIQmw/I2pe68NaqyzzTA4AqS7QFB8T2j/PACOOb+V5PIsI4pP35/lWPCzI787VPz7QaVjV353RMVa/RDB74Vd+d2h/ewTYoTJV9wLvytHPeubI8A+kD4fOhGcpr1ShPki6JNfDpUc+xMjwDHpbYE+Ee7mPVGE6U/YPz+vODn6ESOknxDgDeHC/m4EuPS9A1+hxjPLFGHu9apC6/C3VlcqpP7HVugd4W5ijSLA1v80P6+IdSwtUYTJ6TM6tIZ4b4UiTFdmwcEekBuqFgjOmVtQRVqHYXiLfLdHic0QnEfSHOHA8JOUDv1kd8myNE2X8/ksTbPssosDdFD1iXAhrFJhllDnEoX+IjtsqqmnfILzdLsjh+f0QlSKZILRWG9nk5akRPHPm/2JGMSKIkH7hkpQJ5fZm+BuQfIYkgSplBhFIkEdbKcmmwWo0RAxijSCUZyZh3SLiCThrFWRiHlDIqj8L9zvC7AmuCyRhEaFA4Gg9g7ooWG6GOMHWvAJzvHDesEXZfUUYsRT/GIKESYESyahmo3wjQ/fjbc8iuChh1T+N3lMmOBtX3/NoQgn9GnMU+G5/4IeMTnQB4QMrcK5ZxTACS3FMTnqD7O4b4LFqCvsxlA/1KE2aIJewrcyYLLDUiQrVPRIXiIRX4A5OpoXkLQ3/EHvedpA9ZFTdDgoIYTDYYYeRl+EbH38j6t2+KEneFsmmsgQpGgbjT744Rd/9DLOperoS7SSi5EqAFL0bo9+BaMK8IX9gZXC+TITfHIiFs22T/BaALVO4YJeo1o2hAkZ3npDrFM44KP3viS/EUWIKH2K9yiERUgSYmjsZcARHzPxxWteJnh3ODC0GWGKt0cjqcP+ZRpodepFhvYpQc14gdxZ+JjGgaDPjYw3mONF6GkbuSB8LFwtjBgu8JEZvM1kMpEtnqJvcGLAkpDnDWxkZWGJX6YmQqSI0EvspJ0JVR9B+m4qJBFGZztZZ7w29dTqLUOKCM2PWhzDPSGX8W7DwDel2iKgR0i7J0NYpu92IuUszDWYreoPStKrW51SwmumpxCF4Q9hy3SbV5QjKP/mH1sMSdPpjmiSSoIsKZqc4ZrCsMvNgZTG0Fa9IMxo8+lgSFn31lQpKTZ8Zdh66tOOilx7iUURqxOakiakTq0M8W61XYajEUW1d+gaIJYehtYIjoh1PC2qj+Jy3mCvopWmGNqMU9hSqyuHxtDzm319gk89VIb62FhHR16kw2PYHDqlatIhMmwObgK9QnZ4DMOGXC3M6XX4w2OoGhJhJId6sAybzmg4kVdpZO8SC1n5NQUz6CIcnNXmNZ0XpJiIdYZAZliPO3C2YWDr5iPRe7qiFsKlxCYfDK3dQyJEvR+Tqjqt+PqOJ5oOHxmGtJhD86RovuYN4vnfB0O6mVWLw3PWg3FiEs+QsXXUT4UhKap1/xih5MqMIee+alD51plz8y62Q5C1daqqhpSQeX7MjjKFA+GewAOVGCcpQ/D8mKU7nQxFU7VqYMO64Gsrf8haWOVcA0uVetaST6xJlZUpb8XbqBcSmFSpWBGOvHcErGxE3jasaHhaGuuJJpeaz5B5dbx0XHCMhyukKxNHvLDKjeGrywO/zMcgLDzIwd055QOREWe7wYJpyvF2bgxfk2zAJJhva2k/n5rqe6KUnyGUdVfQnpWkMmQqv4pThy85rkK8HgPYP7owQ+FS/RHMeMe9BYbCBZiM8O0dpWS3AEPZmCKpjNc2Q9GqGvjDfwunxJDlTD8oChKcsvzVG8RlKClErtF9hTzDrlokJCYSD1LZYCglRBER2mDoaSGCImpB/DysfZPBkG2w1WcjxNALJAwbmAsoUq/CkO9b3CBy/Yme2i6jFE5k+4d3mNxZeUdwLfSyX9k/vEhRZF+AYoZuX1BmyI3TPMBXNviXHFpQjtOQi/ZqYK5TOIu9j1qOtXGjPk+8v5bTSRD/YEQryvFSWsl4IziOImxkDoobJPMWJXDeVhDbhLW8hZgCKzCmPlIDF8FHiisBTl7+sAJqVAr2ks9MV7S6QFjkBSFpK8JU9B3tag6YlcevwadET0FwE3r1PD6nFqMBCd4Ehz07flhCtRZDUpl6tAIUuzOQVaY5Qqz1Rnmqogu12gJ2pqcKdPhU+Ln+Wlpazvb+C6QJzinSa0StxkfMK3sA+aqR9C+c1EZg1Ag3w0dZNiCsBxqsDurFtVbg7l3KhNeeaLgXxE7lV4FiKK7Lx3XzX3yrJxhlKs6woTiEnzcvo1rB+o6ipOnfclFW+ER8/8hIeXRWlV4NjUVaQpHmv9DIKinCQ5RdaLxiKWqahq3XqVspngUN75YtwqqqLiGi9BCBLT+xfUfLVWeJzHKBKL6QLtHATEv9xi0PbossUxUmf6hNJ2GUJSIcW303/jLV/s+e0+QWpltfgGPbfXxu6lWFwZbbFxVgmgXsvsmt1Uusik4VrFjie3KEGbP3dfu7GIzMnfIXcn00i8YsXkBXex3FrtRLiMo/LUWbE+WCPJzJqzXomgplmebyk+X3l+SI2Gu4M7pA0DUqEJbfK8nDL0G1dkYy8bom2NnsYwswRx8fb2oJkOGSUKeWO4Pmx8cR15f3TYoW9Wyi9vvofJoPcRyba8C3aSFzP03FW3vNJCuTGpnLMXh3L8JUiPkB0Wc/cGOOBukEszxb+GNLgbbOa5T5BjrirQjNhBiN1x9odg6by9tmSUYZobdCVDGy45gUAJbvurMZiLAIunX72uGq7wX6Mjc4dnbY6rC5S5/pOhNVkn2M33Vym67ubIblSl0FrHpn641EUwCsW8VofL+svZFVbLdltOH0WjtnI8Lszb0RlLbd9tsMbd3Pw8ZX2po/0Rie1RYbYiMBx4YkAKqirunB5OA8gBV6R1PfSVRVZEPxjm++BPoALKuhHI179qDWKygZxhZ8AjYVdYi9ClHp9zQ4grVKTWy/pxGUmqDEwyNYsaCRa/T6/1/6Bfm2HoLiAfaPKZIqk58V17RSwx7wTHlSeuc9awUNzdlP4D5FYltC2Nz0afwZX8kE8H3VFuS2hLc+pGPpm/aSuK5TRX98szDBrT3kJYPiLian+SmctLUnA2UAmWY2P90NW4S5EP/HO8pgM+RdWAC4ExyQP9GCwU/QwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHB4Yn/A5+anJJMb8/hAAAAAElFTkSuQmCC"
        : modalIsOpen == true
          ? user?.photo
          : "",
    telefono: post_Put == true ? "" : modalIsOpen == true ? user?.telefono : "",
    localidad:
      post_Put == true ? "" : modalIsOpen == true ? user?.localidad : "",
    esemprendedor: false,
    cargo: cargo?.id,
    rol: "",
    empresa: empresa?.id,
    estado: true,
  });
  const setForm = (e) => {
    setCoso({ ...form, [e.target.name]: e.target.value })
  }
  useEffect(() => {
    setCoso({
      id: user?.id,
      name: post_Put == true ? "" : modalIsOpen == true ? user?.name : "",
      last_name:
        post_Put == true
          ? ""
          : modalIsOpen == true
            ? user?.last_name
            : user?.last_name,
      name_user:
        post_Put == true
          ? ""
          : modalIsOpen == true
            ? user?.name_user
            : user?.name_user,
      email:
        post_Put == true ? "" : modalIsOpen == true ? user?.email : user?.email,
      password: post_Put == true ? "" : modalIsOpen == true ? user?.password : "",
      photo:
        post_Put == true
          ? "data:image/png;base64,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"
          : modalIsOpen == true
            ? user?.photo
            : "",
      telefono: post_Put == true ? "" : modalIsOpen == true ? user?.telefono : "",
      localidad: localidadEmpresaActual?.id,
      esemprendedor: false,
      cargo: cargo?.id,
      rol: user?.rol?.id,
      empresa: empresa?.id,
      estado: true,
    })
    if (modalIsOpen === true) {
      (async function loadInputsDepandLoc() {
        const departamentosAll = await loadDepartamentos(state?.id);
        const cargosAll = await loadCargos(state?.id);
        if (departamentosAll?.ok) {
          setDepartamentos(departamentosAll.departamentos);
          if (localidadEmpresaActual?.id) {
            setDpto(localidadEmpresaActual?.id);
            const localidad = await loadLocalidades(localidadEmpresaActual?.departamento?.id);
            if (localidad.ok) {
              setLocalidades(localidad.localidades);
            } else {
              setLocalidades([]);
            }
          }
        } else {
          setDepartamentos([]);
        }

        if (cargosAll?.ok) {
          setCargos(cargosAll.cargos);
        } else {
          setCargos([]);
        }
      })();
    }
    return () => {
      setDepartamentos(null);
      setLocalidades(null);
    };
  }, [modalIsOpen]);

  const [file, setFile] = useState(null);

  const changeFile = (file) => {
    const image = file.target.files;
    if (image) {
      setFile(image[0]);
    }
  };
  console.log(form)


  const saveEnmpleado = async (e) => {
    e.preventDefault();

    if (isNaN(form.telefono)) {
      Swal.fire({
        title: "Ingrese Numero de Telefono correcto",
        type: "error",
      });
    }
    if (post_Put === true) {
      if (file) {
        await fileupload(file)
          .then((e) => {
            dispatch(
              postempleadoEmpresa({
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
          postempleadoEmpresa({
            ...form,
          })
        );
      }
    } else {
      if (file) {
        await fileupload(file)
          .then((e) => {
            dispatch(
              editEmpleadoEmpresa(
                {
                  ...form,
                  photo: e,
                }
              )
            );
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        console.log("jaja")
        dispatch(
          editEmpleadoEmpresa(form)
        );
      }
    }
  };



  const changeDepartamento = async ({ target }) => {
    const localidad = await loadLocalidades(target.value);
    console.log(localidad);
    if (localidad.ok) {
      setLocalidades(localidad.localidades);
    } else {
      setLocalidades([]);
    }
  };

  if ((departamento === null || cargos === null) && modalIsOpen === true) {
    return <div className="text-center ">Espere por favor...</div>;
  }
  return (
    <div className="z-50">
      <Modal
        className="w-4/5 sm:max-w-xl bg-white h-full overflow-y-scroll p-6 "
        /* overlayClassName="Overlay" */
        isOpen={modalIsOpen}
        closeTimeout={200}
        onRequestClase={closeModal}
        contentLabel=""
        preventScroll={true}
        style={customStyles}
      >
        <p className="text-gray-800 text-center text-3x1 font-semibold">
          {post_Put ? "Agregar empleado" : "Editar empleado"}
        </p>
        <form className="" onSubmit={
          saveEnmpleado}>
          <div className="my-6">
            <div className="formgroup">
              <label>Nombre</label>
              <input
                required
                autoComplete="off"
                type="text"
                className="text-sm my-1 mr-2 p-2 border-2 shadow-md border-gray1 w-full rounded-xl outline-none"
                placeholder="Ingrese un Nombre"
                name="name"
                onChange={setForm}
                value={form.name}
                maxLength="20"
              />
            </div>
            <div className="formgroup">
              <label>Apellido</label>
              <input
                autoComplete="off"
                type="text"
                className="text-sm my-1 mr-2 p-2 border-2 shadow-md border-gray1 w-full rounded-xl outline-none"
                placeholder="Ingrese un Apellido"
                name="last_name"
                onChange={setForm}
                value={form.last_name}
                maxLength="20"
              />
            </div>
            <div className="formgroup">
              <label>Email</label>
              <input
                required
                autoComplete="off"
                type="email"
                className="text-sm my-1 mr-2 p-2 border-2 shadow-md border-gray1 w-full rounded-xl outline-none"
                placeholder="Ingrese un Email"
                name="email"
                onChange={setForm}
                value={form.email}
                maxLength="30"
              />
            </div>
            <div className="formgroup">
              <label>Telefóno</label>
              <input
                required
                autoComplete="off"
                type="text"
                className="text-sm my-1 mr-2 p-2 border-2 shadow-md border-gray1 w-full rounded-xl outline-none"
                placeholder="Ingrese un Telefono"
                name="telefono"
                onChange={setForm}
                value={form.telefono}
                maxLength="15"
              />
            </div>
            <div className="formgroup">
              <label>Username</label>
              <input
                required
                autoComplete="off"
                type="text"
                className="text-sm my-1 mr-2 p-2 border-2 shadow-md border-gray1 w-full rounded-xl outline-none"
                placeholder="Ingrese una Nombre Usuario"
                name="name_user"
                onChange={setForm}
                value={form.name_user}
                maxLength="20"
              />
            </div>
            {post_Put === true ? <div className="formgroup">
              <label>Password</label>
              <input
                required
                autoComplete="off"
                type="password"
                className="text-sm my-1 mr-2 p-2 border-2 shadow-md border-gray1 w-full rounded-xl outline-none"
                placeholder="Ingrese una Password"
                name="password"
                onChange={setForm}
                value={form.password}
                maxLength="20"
                minLength="8"
              />
            </div> : ""
            }
            <div className="formgroup">
              <label htmlFor="departamento">Departamento</label>
              <select
                onChange={changeDepartamento}
                className="text-sm my-1 w-full p-2 border-2 shadow-md border-gray1 rounded-xl outline-none"
                name="departamento"
                required
                value={(dpto != "") ? dpto : null}
              >
                <option selected={true} value="" disabled="disable">Seleccione uno</option>
                {departamento?.map((e, i) => {
                  return (
                    <option key={e.name + "," + i} value={`${e.id}`}>
                      {e.name}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="formgroup">
              <label>Localidad</label>
              <select
                required
                onChange={setForm}
                value={form.localidad}
                className="text-sm my-1 w-full p-2 border-2 shadow-md border-gray1 rounded-xl outline-none"
                name="localidad"
              >
                <option selected={true} value="" disabled="disable">
                  Seleccione uno
                </option>
                {localidades?.map((e, i) => {
                  return (
                    <option key={e.name + "," + i} value={`${e.id}`}>
                      {e.name}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="formgroup">
              <label>Estado:</label>
              <select
                required
                onChange={setForm}
                value={form.localidad}
                className="text-sm my-1 w-full p-2 border-2 shadow-md border-gray1 rounded-xl outline-none"
                name="localidad"
              >
                <option selected={true} value="" disabled="disable">
                  Seleccione uno
                </option>
                {localidades?.map((e, i) => {
                  return (
                    <option key={e.name + "," + i} value={`${e.id}`}>
                      {e.name}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="formgroup">
              <label>Cargo</label>
              <select
                required
                name="cargo"
                value={form.estado}
                onChange={setForm}
                className="text-sm my-1 w-full p-2 border-2 shadow-md border-gray1 rounded-xl outline-none"
              >
                <option value={true}></option>
                <option value={false} ></option>
              </select>
            </div>

            <div className="formgroup">
              <label>Rol</label>
              <select
                required
                name="rol"
                value={form.rol}
                onChange={setForm}
                className="text-sm my-1 w-full p-2 border-2 shadow-md border-gray1 rounded-xl outline-none"
              >
                <option selected={true} value="" disabled="disable">
                  Seleccione uno
                </option>
                {/* <option value="1">Super Usuario</option> */}
                <option value="2">Usuario</option>
                <option value="3">Admin Empresa</option>
              </select>
            </div>
          </div>
          <div className="formgroupmy-2">
            <input
              type="file"
              onChange={changeFile}
              name="photo"
              className="text-sm my-1 w-full mr-2 p-2 border-2 shadow-md border-gray1 rounded-xl outline-none"
            />
          </div>
          <div className="flex justify-end">
            <button
              className="bg-green1 text-white font-bold py-2 px-4 mx-2 rounded"
              type="submit"
            >
              Guardar
            </button>
            <button
              className="bg-danger text-white font-bold py-2 px-4 mx-2 rounded"
              onClick={closeModal}
            >
              Cancelar
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddEmpleadoModal;
