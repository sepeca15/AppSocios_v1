import React, { useState } from "react";

const PerfilPage = () => {

  const [editar, setEditar]= useState("hidden")

  return (
    <>
      <div className="flex items-center w-full justify-center">
        {/* max-w-xs */}
        <div className="w-full">
          <div className="bg-white rounded-lg">
            <div className="portada p-2">
              <img
                className="w-32 h-32 rounded-full mx-auto"
                src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp"
                alt="John Doe"
              />
            </div>
            <div className="p-2">
              <div className="flex justify-center text-gray-400 text-xs font-semibold">
                <input
                  autoComplete="off"
                  type="text"
                  className={"form-control w-6/12 sm:w-3/12 mb-2 mr-1 " + editar}
                  placeholder="Nombre"
                  name="Cargo"
                  /* onChange={}
                    value={} */
                />
                <input
                  autoComplete="off"
                  type="text"
                  className={"form-control w-6/12 sm:w-3/12 mb-2 mr-1 " + editar}
                  placeholder="Apellido"
                  name="apellido"
                  /* onChange={}
                    value={} */
                />
                {/* <h3 className="text-center text-xl text-gray-900 font-medium leading-8">
                  Joh Doe
                </h3> */}
              </div>
              <div className="flex justify-center text-gray-400 text-xs font-semibold">
                <input
                  autoComplete="off"
                  type="text"
                  className={"form-control w-full sm:w-6/12 " + editar}
                  placeholder="Cargo"
                  name="Cargo"
                  /* onChange={}
                    value={} */
                />
                {/* <p>Full stack</p> */}
              </div>
              <div className="flex justify-center text-gray-400 text-xs font-semibold">
                {/* <p>Email: asdasdasdasdasdasdas</p> */}
                <input
                  autoComplete="off"
                  type="text"
                  className={"form-control my-2 w-full sm:w-6/12 " + editar}
                  placeholder="Email"
                  name="email"
                  /* onChange={}
                         value={} */
                />
              </div>
              <div className="flex justify-center text-gray-400 text-xs font-semibold">
                {/* <p>Email: asdasdasdasdasdasdas</p> */}
                <input
                  autoComplete="off"
                  type="text"
                  className={"form-control mb-2 w-full sm:w-6/12 " + editar}
                  placeholder="Celular"
                  name="celular"
                  /* onChange={}
                         value={} */
                />
              </div>
              <div className="flex justify-center text-gray-400 text-xs font-semibold">
                {/* <p>Empresa: asdasdasdasdasdasdas</p> */}
                <input
                  autoComplete="off"
                  type="text"
                  className={"form-control w-full sm:w-6/12 " + editar}
                  placeholder="Empresa"
                  name="empresa"
                  /* onChange={}
                         value={} */
                />
              </div>
           
              <div className="text-center my-3">
                <button
                  className="text-xs text-white bg-yellow1 hover:bg-yellow-300 py-2 px-4 rounded-full font-bold"
                  href="#"
                >
                  Editar
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
