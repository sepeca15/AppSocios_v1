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
                        <Redirect to="/updatedata" />
                )
            }
        />
    )
}
