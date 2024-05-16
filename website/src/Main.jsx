import React from 'react'
import ReactDOM from 'react-dom/client'
import Routes from './Routes';

import { BrowserRouter } from "react-router-dom";
import Global from "./Context/Global";
import './Style/Main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={'/Vessel_Tool_Box'}>
      <Global>
        <Routes />
      </Global>
    </BrowserRouter>
  </React.StrictMode>,
)
