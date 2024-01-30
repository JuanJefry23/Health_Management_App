import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './style.css'
import { PatientsManagementApp } from './PatientsManagementApp.jsx'
import { Main } from './pages/main'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Main /> */}
      <PatientsManagementApp />
    </BrowserRouter>
  </React.StrictMode>
)
