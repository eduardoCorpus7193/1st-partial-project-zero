import React from 'react';

function EstudiantesLista({ estudiantes }) {
  return (
    <div className="estudiantes-lista">
      <table summary="Estudiantes UTMA" className='tablaEstudiantes'>
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Materia</th>
            <th scope="col">Calficacion</th>          </tr>
        </thead>
        <tbody>
        {estudiantes.map((estudiante) => (
          <tr key={estudiante.id}>
            <th scope="row">{estudiante.nombre}</th>
            <td>{estudiante.materia}</td>
            <td>{estudiante.calificacion}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}

export default EstudiantesLista;