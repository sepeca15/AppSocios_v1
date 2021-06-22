import React from 'react'
import Router from './router/Router'
import { Provider } from 'react-redux'
import './styles/global.scss'
import store from './store/store'
const App = () => {
    return (
        <div>
            <Provider store={store}>
                <Router />
            </Provider>
        </div>

    )
}

export default App
