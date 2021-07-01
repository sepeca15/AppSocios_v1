import React from 'react'
import { Redirect, Route } from 'react-router'

export const PrivateRouter = ({ isAuth, component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            component={
                (props) => (
                    (isAuth) ?
                        <Component className="" {...props} />
                        :
                        <Redirect to="/login" />
                )
            }
        />
    )
}

