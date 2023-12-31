import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    BrowserRouter,
    HashRouter
} from 'react-router-dom'
import App from './App'
import {
    ThirdwebProvider
} from '@thirdweb-dev/react'
import store from './store'
import {
    Provider
} from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <
    Provider store = {
        store
    } >
    <
    ThirdwebProvider activeChain = "ethereum" >
    <
    HashRouter >
    <
    App / >
    <
    /HashRouter> <
    /ThirdwebProvider> <
    /Provider>
);