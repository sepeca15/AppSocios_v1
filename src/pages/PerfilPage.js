import React from "react";

const PerfilPage = () => {
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
                  className="form-control w-2/12 mb-2"
                  placeholder="Nombre"
                  name="Cargo"
                  /* onChange={}
                    value={} */
                />
                <input
                  autoComplete="off"
                  type="text"
                  className="form-control w-2/12"
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
                  className="form-control w-4/12"
                  placeholder="Cargo"
                  name="Cargo"
                  /* onChange={}
                    value={} */
                />
                {/* <p>Full stack</p> */}
              </div>
              <table className="text-xs my-3">
                <tbody>
                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">
                      Address
                    </td>
                    <td className="px-2 py-2">
                      Chatakpur-3, Dhangadhi Kailali
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">
                      Phone
                    </td>
                    <td className="px-2 py-2">+977 9955221114</td>
                  </tr>
                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">
                      Email
                    </td>
                    <td className="px-2 py-2">john@exmaple.com</td>
                  </tr>
                </tbody>
              </table>

              <div className="text-center my-3">
                <a
                  className="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium"
                  href="#"
                >
                  View Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PerfilPage;
