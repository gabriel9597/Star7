import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from "./Componentes/Inicio/inicio";
import Tratamentos from './Componentes/tratamentos/tratamentos';
import Contato from './Componentes/Contato/contato';
import ScrollToTop from './Componentes/scrollToTop';

function App() {

  
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Inicio/>} />
        <Route path="/Tratamentos" element={<Tratamentos />}/>
        <Route path="/Contato" element={<Contato/>} />
      </Routes>
    </Router>
  )
}

export default App
