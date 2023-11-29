import './Oferta.css';
import React from 'react';
import ImagenOferta from './Imagenes/oferta.jpeg';

function Oferta(){
    return(
        <div className="oferta">
            <div className="publicidad">
                <div className="texto">
                    <h3>Mega Compra</h3>
                    <h1>Arreglo Floral Dia De Las Madres</h1>
                    <p>Demuesta tu amor a esa persona que te dio la vida</p>
                    <h4><a href="#" className="funcion2">Comprelo ahora</a></h4>
                </div>
            </div>
            <div className="imagen">
                <img className="img" src={ImagenOferta} alt='Oferta'/>
            </div>
        </div>
    );
}

export default Oferta;