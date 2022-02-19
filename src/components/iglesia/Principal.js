import React from 'react';

// INTERNAL
import Bienvenida from '../layout/Bienvenida';
import Pastores from './Pastores';
import Vision from './Vision';
import Horario from './Horario';
import Ubicacion from './Ubicacion';

// IMG
import bg from '/public/img/bviglesia.jpg'

export default function Principal(){


    const bv = {
        src:bg,
        // layout:'fill', // fill or fixed
        texto1:'somos',
        texto2:' iglesia',
        texto3:'iglesia',
        texto4:'more',
        visible:'visible' //visible o invisible
    }

    return(
        <>
                <Bienvenida  bv={bv} />
                <Pastores />
                <Vision />
                <Horario />
                <Ubicacion />
        </>
    );
}