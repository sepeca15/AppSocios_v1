import React from 'react';
import PropTypes from 'prop-types';

const PortadaLogoNombre = () => {
    return (
        //gradient : bg-gradient-to-r from-greenBlack1 via-green1 to-greenLight1
        <div className="bg-danger w-full h-1/4 flex items-center justify-start">
            <div className="flex items-center justify-start">  
                <img className="w-4/12 h-48 md:w-3/12 p-2 md:m-4 object-contain " src="https://www.sociedaduruguaya.org/wp-content/uploads/2021/01/Ta-Ta.png" />
                <span className="font-medium m-2 text-2xl p-2 md:m-4 md:text-6xl">Tata azsdfadsf </span>
            </div>
        </div>
    );
};

export default PortadaLogoNombre;