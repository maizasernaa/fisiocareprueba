import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/NavBar';
import Landing from './pages/Landing'
import Especialistas from './pages/Especialistas'
import ComoFunciona from './pages/ComoFunciona' // 1. Importa el componente
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Navbar /> 
      
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/especialistas" element={<Especialistas />} />
        <Route path="/como-funciona" element={<ComoFunciona />} /> {/* 2. Agrega la ruta */}
      </Routes>
    </Router>
  </React.StrictMode>,
)