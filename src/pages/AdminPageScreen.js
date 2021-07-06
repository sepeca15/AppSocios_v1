import React, { useEffect, useState } from "react";
import AddInfoEmpresa from "../components/AddInfoEmpresa";
import QueDeseaAgregarModal from "../components/QueDeseaAgregarModal";
import { useDispatch, useSelector } from "react-redux";
import { getAllEmpresas, getbusquedaEmpresaText, saveStateComboBox2 } from "../store/actions/empresas";
import { loadLocalidadescombobox, loadRubrosA } from "../helpers/loadData";
import { useForm } from "../helpers/useForm";
import ImportExcel from "../components/importExcel";
/* import { useForm } from "../helpers/useForm"; */

const AdminPageScreen = () => {
  const dispatch = useDispatch();

  const [localidades, setLocalidades] = useState(null);
  const [rubros, setRubros] = useState(null)
  useEffect(() => {
    dispatch(getAllEmpresas());
    cargarlocadidadcombobox();
    cargarRubrosEmpresas()
  }, []);
  const state = useSelector((state) => state.empresas.empresas);
  const [empresaFilter, setempresaFilter] = useState(null)
  async function cargarlocadidadcombobox() {
    const localidad = await loadLocalidadescombobox();
    if (localidad.ok) {

      setLocalidades(localidad.localidades);
    } else {
      setLocalidades([]);
    }
  }
  async function cargarRubrosEmpresas() {
    const rubros = await loadRubrosA();
    if (rubros.ok) {
      setRubros(rubros.rubros);
    } else {
      setRubros([]);
    }
  }

  const dataBusqueda = (e) => {
    e.preventDefault()
    let data = e.target.value
    if (!data) {
      dispatch(getAllEmpresas());
    } else {
      dispatch(getbusquedaEmpresaText(data))
    }
  }
  const ComboBox1 = (e) => {
    setempresaFilter(null);
    let newData = []
    if (e?.target?.value != "" && e.target.value != "todo") {
      state.filter(function (element, i) {
        if (element?.rubros?.length != 0) {
          element?.rubros?.map(rubro => {
            if (rubro?.rubro_a.id == e.target.value) {
              newData.push(element)
            }
          })
        }
        setempresaFilter(newData)
      })
    }
    else {
      setempresaFilter(null)
    }
  }

  const ComboBox2 = (e) => {
    let newData = []
    let activa = e.target.value === "1" ? true : false
    let inactiva = e.target.value === "0" ? false : true
    if (activa) {
      state.filter(function (element, i) {
        if (element.activa === activa) {
          newData.push(element)
        }
        setempresaFilter(newData)
      })
    } else if (!inactiva) {
      state.filter(function (element, i) {
        if (element.activa === inactiva) {
          newData.push(element)
        }
        setempresaFilter(newData)
      })
    } else setempresaFilter(null)
  }

  const ComboBox3 = (e) => {
    let newData = []
    if (e.target.value === "Todos") {
      setempresaFilter(null)
    } else {
      state.filter(function (element, i) {
        if (element.localidad.id === parseInt(e.target.value)) {
          newData.push(element)
        }
        setempresaFilter(newData)
      })
    }
  }

  const ComboBox4 = (e) => {
    let newData = []
    let activa = e.target.value === "1" ? true : false
    let inactiva = e.target.value === "0" ? false : true
    if (activa) {
      state.filter(function (element, i) {
        if (element.activa === activa) {
          newData.push(element)
        }
        setempresaFilter(newData)
      })
    } else if (!inactiva) {
      state.filter(function (element, i) {
        if (element.activa === inactiva) {
          newData.push(element)
        }
        setempresaFilter(newData)
      })
    } else setempresaFilter(null)
  }
  return (
    <div className=" relative w-full h-full ">
      <div className="flex justify-around flex-col text-center bg-gray-100 md:flex-row mb-2 py-4 ">
        <div className="max-w-full lg:w-3/12 xl:w-2/12 flex items-center justify-center text-lg lg:text-left sm:text-base">
          <label>
            Centro comercial San Jose <br />{" "}
            <span className="text-gray">Datos de las empresas </span>
          </label>
        </div>
        <form className="max-w-full lg:w-5/12 xl:w-6/12 my-3 md:my-0 flex items-center justify-center">
          <input
            onChange={dataBusqueda}
            className="shadow appearance-none border rounded w-4/6 md:w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="data"
            id="username"
            type="text"
            placeholder="¿Estás buscando algún socio?"
          />
        </form>
        <div className="max-w-full lg:w-4/12 xl:w-3/12 flex items-center flex-col justify-center">
          <QueDeseaAgregarModal />
          <ImportExcel />
        </div>
      </div>
      <form>
        <div className="flex justify-center sm:justify-around my-2 flex-col sm:flex-row">
          <div className="text-center">
            <label className="block text-center m-0">Rubro actividad({empresaFilter?.length || "0"})</label>
            <select onChange={ComboBox1} name="combobox1" className="w-2/3 sm:w-full py-2 px-4 border-2">
              <option value="todo">Todos</option>
              {rubros?.map((e, i) => {
                return (
                  <option key={e.name + e.id + "," + i} value={`${e.id}`}>
                    {e.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="text-center">
            <label className="block text-center m-0">
              Empresas Activas/Inactivas (<span className="text-red-500">{empresaFilter ? empresaFilter.length : state?.length}</span>)
            </label>
            {/* ,()=>{ComboBox2(form.combobox2)} */}
            <select onChange={ComboBox2} name="combobox2" className="w-2/3 sm:w-full py-2 px-4 border-2">
              <option value="todo">Todos</option>
              <option value="1">Activas</option>
              <option value="0">Inactivas</option>
            </select>
          </div>
          <div className="text-center">
            <label className="block text-center m-0">Localidad (<span className="text-red-500">{empresaFilter ? empresaFilter.length : state?.length}</span>) </label>
            <select onChange={ComboBox3} name="combobox3" className="w-2/3 sm:w-full  py-2 px-4 border-2">
              <option value="Todos">Todas</option>
              {localidades?.map((e, i) => {
                return (
                  <option key={e.name + "," + i} value={`${e.id}`}>
                    {e.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className=" text-center">
            <label className="block m-0">Empresas/Emprendedores</label>
            <select onChange={ComboBox4} name="combobox4" className="w-2/3 sm:w-full py-2 px-4 border-2">
              <option value="volvo">Todos</option>
              <option value="saab">Empresas</option>
              <option value="opel">Emprendedores</option>
            </select>
          </div>
        </div>
      </form>
      <div className=" flex md:block flex-row flex-grow">
        <div className="bg-gray-200 md:w-full inline-block md:flex justify-between pb-2 pt-3 text-black rounded flex-col md:flex-row ">
          <label className="flex p-2 md:p-0 lg:w-1/12 justify-center md:text-center">
            Nombre
          </label>
          <label className="flex p-2 md:p-0 lg:w-2/12 justify-center md:text-center">
            Contacto
          </label>
          <label className="flex p-2 md:p-0 lg:w-1/12 justify-center md:text-center">
            Direccion
          </label>
          <label className="flex p-2 md:p-0 lg:w-1/12 justify-center md:text-center">
            Empleados
          </label>
          <label className="flex p-2 md:p-0 lg:w-1/12 justify-center md:text-center">
            Razon social
          </label>
          <label className="flex p-2 md:p-0 lg:w-2/12 justify-center md:text-center">
            Numero RUT
          </label>
          <label className="flex p-2 md:p-0 lg:w-1/12 justify-center md:text-center">
            Estado
          </label>
          <label className="flex p-2 md:p-0 lg:w-2/12 justify-center md:text-center"></label>
        </div>

        <div className="flex flex-nowrap flex-grow md:flex-col w-6/12 md:w-full heightvh overflow-x-auto md:overflow-y-auto ">
          {/* {state &&
            state.map((empresa, index) => {
              return <AddInfoEmpresa {...empresa} num={index} />;
            })} */}
          {(empresaFilter !== null) ? empresaFilter.map((empresa, index) => {
            return <AddInfoEmpresa {...empresa} num={index} />;
          }) : (state &&
            state.map((empresa, index) => {
              return <AddInfoEmpresa {...empresa} num={index} />;
            }))}
        </div>
      </div>
      <p>
        {" "}
        <span className="text-red-600">12</span> empresas se dieron de alta este
        mes y <span className="text-red-600">2</span> se dieron de baja
      </p>
    </div>
  );
};

export default AdminPageScreen;
