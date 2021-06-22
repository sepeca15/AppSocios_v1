import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {
    Switch,
    BrowserRouter as Router,
    Redirect
} from 'react-router-dom';
import HomePageScreen from '../pages/HomePageScreen';
import { PrivateRouter } from './PrivateRouter';
import { PublicRouter } from './PublicRouter';

const RouterApp = () => {
    const uid = "das";
    return (
        <Router>
            <div className="w-full flex flex-col h-screen  max-h-screen overflow-auto">
                {/* {(!!uid) && <NavBar />} */}
                <Switch className="flex-grow">
                    <PublicRouter exact path="/" isAuth={!!uid} component={HomePageScreen} ></PublicRouter>
                    {/* <PrivateRoute exact path="/" isAuth={!!uid} component={CalendarScreen} ></PrivateRoute>
                    <PrivateRoute exact path="/journal" isAuth={!!uid} component={JournalScreen} ></PrivateRoute> */}
                    <Redirect to="/login"></Redirect>
                </Switch>
            </div>

        </Router>
    )
}

export default RouterApp
