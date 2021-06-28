import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {
    Switch,
    BrowserRouter as Router,
    Redirect
} from 'react-router-dom';
import HomePageScreen from '../pages/HomePageScreen';
import LoginScreen from '../pages/LoginScreen';
import RegisterPage from '../pages/RegisterPage';
import ResetPassword from '../pages/ResetPasswordScreen';
import WelcomeScreen from '../pages/WelcomeScreen';
import { PrivateRouter } from './PrivateRouter';
import { PublicRouter } from './PublicRouter';


const RouterApp = () => {
    const uid = "das";
    return (
        <Router>
            <div className="w-full flex flex-col h-screen  max-h-screen overflow-auto">
                {/* {(!!uid) && <NavBar />} */}
                <Switch className="flex-grow">
                    <PublicRouter exact path="/login" isAuth={!!uid} component={LoginScreen} ></PublicRouter>
                    <PublicRouter exact path="/welcome" isAuth={!!uid} component={WelcomeScreen} ></PublicRouter>
                    <PublicRouter exact path="/resetpassword" isAuth={!!uid} component={ResetPassword} ></PublicRouter>
                    <PublicRouter exact path="/register" isAuth={!!uid} component={RegisterPage} ></PublicRouter>
                    {/* <PrivateRoute exact path="/" isAuth={!!uid} component={CalendarScreen} ></PrivateRoute>
                    <PrivateRoute exact path="/journal" isAuth={!!uid} component={JournalScreen} ></PrivateRoute> */}
                    <Redirect to="/login"></Redirect>
                </Switch>
            </div>

        </Router>
    )
}

export default RouterApp
