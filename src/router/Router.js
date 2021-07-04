import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {
    Switch,
    BrowserRouter as Router,
    Redirect,
    Route,
} from 'react-router-dom';
import AddEmpresa from '../pages/AddEmpresa';
import NavBar from '../components/NavBar';
import { fetchSinToken } from '../helpers/fetch';
import AdminPageScreen from '../pages/AdminPageScreen';
import HomePageScreen from '../pages/HomePageScreen';
import InfoPageEmpleado from '../pages/InfoPageEmpleado';
import LoginScreen from '../pages/LoginScreen';
import RegisterPage from '../pages/RegisterPage';
import ResetPassword from '../pages/ResetPasswordScreen';
import SelectEmpresa from '../pages/SelectEmpresa';
import PerfilPage from '../pages/PerfilPage';
import WelcomeScreen from '../pages/WelcomeScreen';
import { clearUser, setUser } from '../store/actions/auth';
import { PrivateRouter } from './PrivateRouter';
import { PublicRouter } from './PublicRouter';
import UpdateData from '../pages/UpdateData';
import NotFound from '../pages/NotFound';
import InfoPageEmpresa from '../pages/InfoPageEmpresa';

const RouterApp = () => {
    const state = useSelector(state => state.auth.user)
    const dispatch = useDispatch();
    const [auth, setAuth] = useState(null);

    useEffect(() => {
        (async function validarToken() {
            const resp = await fetchSinToken("http://localhost:5000/user/validarToken/" + localStorage.getItem("token"));
            const body = await resp.json();
            setAuth(body.ok);
            if (body.ok) {
                dispatch(setUser(body.usuario))
            }
        })()
    }, [setUser, clearUser, dispatch, localStorage.getItem("token"), state?.id])

    const handleChangeData = () => {
        return (
            <div className="w-full h-full">

                <Redirect to="/updatedata"></Redirect>
            </div>
        )
    }

    if (auth == null) {
        return <p className="text-center text-red-500 text-xl">Espere por favor.....</p>
    }
    return (
        < Router >
            <div className=" w-full flex flex-col h-screen   max-h-screen overflow-y-scroll">
                <div className="w-full h-full min-h-screen flex flex-col items-center mb-20 md:mb-0 ">
                    {
                        (state && ((state?.name_user != null && !state?.esemprendedor != null && !state?.telefono != null && state.localidad != null) && <NavBar />))
                    }


                    {
                        (state != null && state?.rol) ?
                            (state?.rol?.id === 1) ?
                                <>
                                    <Switch className="flex-grow">
                                        <PublicRouter exact path="/login" isAuth={auth} component={LoginScreen} ></PublicRouter>
                                        <PublicRouter exact path="/welcome" isAuth={auth} component={WelcomeScreen} ></PublicRouter>
                                        <PublicRouter exact path="/resetpassword" isAuth={auth} component={ResetPassword} ></PublicRouter>
                                        <PublicRouter exact path="/register" isAuth={auth} component={RegisterPage} ></PublicRouter>
                                        {/* <PrivateRouter exact path="/updatedata" isAuth={auth} component={UpdateData} ></PrivateRouter> */}

                                        <PrivateRouter exact path="/inicio" isAuth={auth} component={AdminPageScreen} ></PrivateRouter>
                                        <PrivateRouter exact path="/adminglobal/infoempleado" isAuth={auth} component={InfoPageEmpleado} ></PrivateRouter>
                                        <PrivateRouter exact path="/adminglobal/addempresa" isAuth={auth} component={AddEmpresa} ></PrivateRouter>
                                        <PrivateRouter exact path="/adminglobal/infoempresa" isAuth={auth} component={InfoPageEmpresa} ></PrivateRouter>
                                        <PrivateRouter exact path="/admin/infoempresa" isAuth={auth} component={InfoPageEmpleado} ></PrivateRouter>
                                        <PrivateRouter exact path="/admin/addempresa" isAuth={auth} component={AddEmpresa} ></PrivateRouter>

                                        <PrivateRouter exact path="/perfil" isAuth={auth} component={PerfilPage} ></PrivateRouter>
                                        <Route exact path="/404" component={NotFound} />
                                    </Switch>
                                </>
                                :

                                (state?.rol?.id === 2) ?
                                    <>
                                        <>
                                            <Switch className="flex-grow">

                                                <PublicRouter exact path="/login" isAuth={auth} component={LoginScreen} ></PublicRouter>
                                                <PublicRouter exact path="/welcome" isAuth={auth} component={WelcomeScreen} ></PublicRouter>
                                                <PublicRouter exact path="/resetpassword" isAuth={auth} component={ResetPassword} ></PublicRouter>
                                                <PublicRouter exact path="/register" isAuth={auth} component={RegisterPage} ></PublicRouter>
                                                <PrivateRouter exact path="/updatedata" isAuth={auth} component={UpdateData} ></PrivateRouter>
                                                <PrivateRouter exact path="/selectEmpresa" isAuth={auth} component={SelectEmpresa} ></PrivateRouter >
                                                {
                                                    (state != null && auth != null && (state?.empresaWork?.lenght == 0)) && <Redirect to="/selectEmpresa"></Redirect>
                                                }
                                                {
                                                    (state && auth && (state?.name_user == null || !state?.esemprendedor == null || !state?.telefono == null || state.localidad == null)) && <Redirect to="/updatedata"></Redirect>
                                                }
                                                <PrivateRouter exact path="/inicio" isAuth={auth} component={PerfilPage} ></PrivateRouter>
                                                <Route path="*" component={NotFound} />
                                            </Switch>
                                        </>
                                    </>
                                    :
                                    (state?.rol?.id == 3) ?
                                        <>
                                            <Switch className="flex-grow">
                                                <PublicRouter exact path="/login" isAuth={auth} component={LoginScreen} ></PublicRouter>
                                                <PublicRouter exact path="/welcome" isAuth={auth} component={WelcomeScreen} ></PublicRouter>
                                                <PublicRouter exact path="/resetpassword" isAuth={auth} component={ResetPassword} ></PublicRouter>
                                                <PublicRouter exact path="/register" isAuth={auth} component={RegisterPage} ></PublicRouter>
                                                <PrivateRouter exact path="/updatedata" isAuth={auth} component={UpdateData} ></PrivateRouter>
                                                {
                                                    (state && auth && (state?.name_user == null || !state?.esemprendedor == null || !state?.telefono == null || state.localidad == null)) && <Redirect to="/updatedata"></Redirect>
                                                }
                                                <PrivateRouter exact path="/inicio" isAuth={auth} component={InfoPageEmpleado} ></PrivateRouter>
                                                <PrivateRouter exact path="/perfil" isAuth={auth} component={PerfilPage} ></PrivateRouter>
                                                <PrivateRouter exact path="/admin/infoempresa" isAuth={auth} component={InfoPageEmpleado} ></PrivateRouter>
                                            </Switch>
                                        </>
                                        :
                                        <div className=""></div>
                            :
                            <Switch className="flex-grow ">
                                <PublicRouter exact path="/login" isAuth={auth} component={LoginScreen} ></PublicRouter>
                                <PublicRouter exact path="/welcome" isAuth={auth} component={WelcomeScreen} ></PublicRouter>
                                <PublicRouter exact path="/resetpassword" isAuth={auth} component={ResetPassword} ></PublicRouter>
                                <PublicRouter exact path="/register" isAuth={auth} component={RegisterPage} ></PublicRouter>
                                <PrivateRouter path="/" isAuth={auth} component={LoginScreen} ></PrivateRouter>
                                <Route path="*" component={NotFound} />

                            </Switch>

                    }
                </div>
            </div>

        </Router >
    )
}

export default RouterApp


