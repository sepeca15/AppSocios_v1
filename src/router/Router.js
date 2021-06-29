import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {
    Switch,
    BrowserRouter as Router,
    Redirect
} from 'react-router-dom'; 
import HomePageScreen from '../pages/HomePageScreen';
import AdminPageScreen from '../pages/AdminPageScreen';
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
                    <PublicRouter exact path="/login" isAuth={!!uid} component={HomePageScreen} ></PublicRouter>
                    <PublicRouter exact path="/welcome" isAuth={!!uid} component={WelcomeScreen} ></PublicRouter>
                    <PrivateRouter exact path="/homepage" isAuth={!!uid} component={HomePageScreen} ></PrivateRouter>
                    <PublicRouter exact path="/admin" isAuth={!!uid} component={AdminPageScreen} ></PublicRouter>

                    {/* <PrivateRoute exact path="/" isAuth={!!uid} component={CalendarScreen} ></PrivateRoute>
                    <PrivateRoute exact path="/journal" isAuth={!!uid} component={JournalScreen} ></PrivateRoute> */}
                     <Redirect to="/login"></Redirect> 
                </Switch>
            </div>

        </Router>
    )
}

export default RouterApp
