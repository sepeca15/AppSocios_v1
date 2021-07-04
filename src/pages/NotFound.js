import React from 'react';
import { ReactComponent as NotFoundSvg } from '../svg/404.svg';

const NotFound = () => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-start pt-4 ">
            <NotFoundSvg className="w-96 h-48 object-cover" />
            <h1 className="text-grayBlack1 text-lg text-center flex items-center "><p className="text-black font-semibold">PERDON!</p> No encontramos la pagina que intentas acceder....</h1>

        </div>
    );
}

export default NotFound;
