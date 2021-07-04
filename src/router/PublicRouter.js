import React from 'react'
import { Redirect, Route } from 'react-router'

export const PublicRouter = ({ isAuth, component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            component={
                (props) => (
                    (isAuth === false) ?
                        <Component {...props} />
                        :
<<<<<<< HEAD
                        <Redirect to="/updatedata" />
=======
                        <Redirect to="/adminglobal" />
>>>>>>> d6006398edcef156951ba72afe28e15928e9f496
                )
            }
        />
    )
}
