import '../node_modules/bootstrap/dist/js/bootstrap.js';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './templates/App/App.jsx'

import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Home from './templates/Home/Home.jsx';
import AppRoutes from './components/AppRoutes.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </React.StrictMode>,
)
