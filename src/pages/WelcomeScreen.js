import React from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-elastic-carousel'
import { ReactComponent as Partners } from '../svg/partners.svg';
import { ReactComponent as Welcome } from '../svg/welcome.svg';
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

const WelcomeScreen = () => {
    return (
        //gradient : bg-gradient-to-r from-greenBlack1 via-green1 to-greenLight1
        <div className="welcome w-full h-full flex flex-col items-center justify-center bg-white">
            <div className="h-full  md:rounded-3xl rounded-none md:h-auto p-4 md:p-2 w-full md:w-1/2  flex flex-col items-center  bg-black bg-opacity-80 ">
                <h1 className="text-white text-3xl my-6 font-semibold"> Bienvenido </h1>
                <Carousel itemsToShow={1} showArrows={false} className=" w-full md:max-w-3xl ">
                    <div className="focus:outline-none w-full h-64 flex flex-col items-center justify-center ">
                        <Welcome className="w-4/5 sm:w-full h-full" />
                        <p className="text-white text-center">Bienvenido a su agente de gestion de socios</p>
                    </div>
                    <div className="focus:outline-none w-full h-64 flex flex-col items-center justify-center ">
                        <Partners className="w-4/5  sm:w-full h-full" />
                        <p className="text-white text-center">Gestione sus socios/empresas de manera eficiente llevando un control </p>

                    </div>
                </Carousel>
                <div className="flex flex-col items-center my-4  w-full md:max-w-3xl">
                    <button className="w-full py-2 buttonIndex">Continuar Como Empresa</button>
                    <button className="w-full py-2 buttonIndex">Continuar Como Emprendedor</button>
                </div>
            </div>
        </div>
    );
};


WelcomeScreen.propTypes = {

};


export default WelcomeScreen;
