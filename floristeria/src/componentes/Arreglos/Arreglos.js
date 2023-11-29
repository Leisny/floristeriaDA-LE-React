import './Arreglos.css';
import React from 'react';
import ImgCumpleaños from './Imagenes/feliz_cumpleaños.png';
import ImgDecoracion from './Imagenes/flores_decorativas.png';
import ImgAniversario from './Imagenes/flores_aniversario.png';

function Arreglos(){
    return(
        <div className="arreglos">
            <div className="cumpleaños">
                <h2>Arreglos de Cumpleaños</h2>
                <img src={ImgCumpleaños} class="img3" alt='Arreglo de Cumpleaños'/>
            </div>
            <div className="decoracion">
                <h2>Arreglos Decorativos</h2>
                <img src={ImgDecoracion} class="img3" alt='Arreglo de Decoracion'/>
            </div>
            <div className="aniversario">
                <h2>Arreglos de Aniversarios</h2>
                <img src={ImgAniversario} class="img3" alt='Arreglo de Aniversario'/>
            </div>
         </div>
    );
}

export default Arreglos;