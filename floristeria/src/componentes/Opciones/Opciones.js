import './Opciones.css';
import React from 'react';

function Opciones(){
    return(
        <div className="opciones">
            <div className="a"><a href="#">Catálogo de Productos</a></div>
            <div className="a"><a href="#">Sistema de Pedido</a></div>
            <div className="a"><a href="#">Inventario</a></div>
            <div className="a"><a href="#">Preferencias de Arreglos</a></div>
            <div className="a"><a href="#">Seguimiento y Confirmación de entregas</a></div>
        </div>
    );
}

export default Opciones;