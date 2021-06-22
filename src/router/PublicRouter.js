import React from 'react'
import { Redirect, Route } from 'react-router'

export const PublicRouter = ({ isAuth, component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            component={
                (props) => (
                    (!isAuth) ?
                        <Component {...props} />
                        :
                        <Redirect to="/login" />
                )
            }
        />
    )
}
