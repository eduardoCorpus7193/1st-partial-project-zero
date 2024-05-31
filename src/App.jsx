import React, { useState } from 'react';
import './App.css';
import EstudiantesLista from './EstudiantesLista';
import FormularioEstudiante from './FormularioEstudiante';

function App() {
  const [estudiantes, setEstudiantes] = useState([]);

  const agregarEstudiante = (nuevoEstudiante) => {
    setEstudiantes([...estudiantes, nuevoEstudiante]);
  };

  return (
    <div className="App">
      <h1>Lista de estudiantes</h1>
      <EstudiantesLista estudiantes={estudiantes} />
      <FormularioEstudiante agregarEstudiante={agregarEstudiante} />
    </div>
  );
}

export default App;