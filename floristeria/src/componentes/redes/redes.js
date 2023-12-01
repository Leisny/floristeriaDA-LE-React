import React from 'react';
import './Redes.css';
import imgfacebook from './Imagenes/facebook.png';
import imginstragram from './Imagenes/instagram.png';
import imgtwitter from './Imagenes/twitter.png';


function Redes(){
    const urlfacebook= "https://es-la.facebook.com/PLANTAS.FLORES/";
    const urlinstagram= "https://www.instagram.com/florescolombia.co/";
    const urltwitter= "https://twitter.com/floresvirtual";
return(
    <div class="redes">
    <a href={urlfacebook}>
        <img src={imgfacebook} alt='Imagen enlazada'/>
    </a>
    <a href={urlinstagram}>
        <img src={imginstragram} alt='Imagen enlazada'/>
    </a>
    <a href={urltwitter}>
        <img src={imgtwitter} alt='Imagen enlazada'/>
    </a>

</div>
);

}
export default Redes;