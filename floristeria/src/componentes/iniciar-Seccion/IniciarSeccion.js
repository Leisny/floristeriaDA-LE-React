import './IniciarSeccion.css';
import React from 'react';


function IniciarSeccion({children, estado, cambiarEstado}) {
  return (
    <div>
      {estado && 
      <div className='contenedor'>
        <div className='cuerpoIniciarSeccion'>
          <button className='Cerrar' onClick={()=> cambiarEstado(false)}>X</button>

          {children}
        </div>
      </div>
      }
    </div>
  );
}

export default IniciarSeccion;