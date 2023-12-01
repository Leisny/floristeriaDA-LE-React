import './Opciones.css';
import React, { useState } from 'react';
import IniciarSeccion from '../iniciar-Seccion/IniciarSeccion';

function Opciones(){

    const[estadoModal1, cambiarModal1] = useState(false);
    return(
        <div className="opciones">
            <div className="a"><a href="#">Catálogo de Productos</a></div>
            <div className="a"><a href="#">Sistema de Pedido</a></div>
            <div className="a"><a href="#">Inventario</a></div>
            <div className="a"><a href="#">Preferencias de Arreglos</a></div>
            <div className="a"><a href="#">Seguimiento y Confirmación de entregas</a></div>
            <div className='a'>
                <a href='#' onClick={()=> cambiarModal1(!estadoModal1)}>Iniciar Sesión</a>
                <IniciarSeccion 
                    estado={estadoModal1}
                    cambiarEstado={cambiarModal1}
                    id="login-form"
                >
                    <div className='Contenido'>
                        <h1>Iniciar Sección</h1>
                        <labe className="label" for="username">Usuario</labe>
                        <input className='input' type='text' id="username" placeholder='Ingresa tu Usuario'/>
                        <labe className="label" for="password">Contraseña</labe>
                        <input className='input' type='password' id="password" placeholder='Ingresa tu Contraseña'/>
                        <h2><button >Iniciar</button></h2> 
                        <h2><button >Registrarse</button></h2> 
                    </div>
                </IniciarSeccion>  
            </div>
        </div>
    );
}

export default Opciones;