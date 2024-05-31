import React, { useState } from 'react';

function FormularioEstudiante({ agregarEstudiante }) {
  const [mostrarComponente, setMostrarComponente] = useState(false);
  const [nombre, setNombre] = useState('');
  const [materia, setMateria] = useState('');
  const [calificacion, setCalificacion] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevoEstudiante = {
      nombre,
      materia,
      calificacion: parseFloat(calificacion),
    };
    agregarEstudiante(nuevoEstudiante);
    // Restablecer valores del formulario
    setNombre('');
    setMateria('');
    setCalificacion(0);
    setMostrarComponente(false)
  };

  return (
    <div className="formulario-estudiante">
      
      <button onClick={() => setMostrarComponente(!mostrarComponente)}>
          {/*Aqui solo cambio el texto de mi boton, para el ejemplo */}
          {mostrarComponente ? `Cancelar` : `Agregar estudiante`}
        </button>
        <div className={mostrarComponente ? "show-element" : null}>
          {mostrarComponente && 
          <form onSubmit={handleSubmit}>
            <h3 htmlFor="nombre">Nombre:</h3>
            <input
              type="text"
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
            <h3 htmlFor="materia">Materia:</h3>
            <input
              type="text"
              id="materia"
              value={materia}
              onChange={(e) => setMateria(e.target.value)}
            />
            <h3 htmlFor="calificacion">Calificación:</h3>
            <input
              type="number"
              id="calificacion"
              value={calificacion}
              onChange={(e) => setCalificacion(e.target.value)}
            />
            <br/>
            <button className="buttonAgregar" type="submit">Agregar</button>
        </form>
      }
      </div>
    </div>
  );
}

export default FormularioEstudiante;