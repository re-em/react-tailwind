import React from 'react';
import ReactDOM  from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import './index.css';
// import Product  from './product'
// import ShoppingCart from './shoppingcart'

import App from './components/app'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'
ReactDOM.render(
    <BrowserRouter>
        <App /> 
    </BrowserRouter>
    ,document.querySelector('#root'))































      // "start": "react-scripts start",
    // "build": "react-scripts build",
    // "test": "react-scripts test",

