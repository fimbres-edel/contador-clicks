import React from 'react';
import '../css/Button.css';

function Button({ texto, esBotonClick, manejarClick }){
    return(
        <button className={esBotonClick ? 'button-click' : 'button-reiniciar'}
            onClick={manejarClick}>
            {texto}

            </button>
    )
}

export default Button