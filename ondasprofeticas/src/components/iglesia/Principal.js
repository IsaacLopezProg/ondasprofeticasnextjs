import React from 'react';

// INTERNAL
import Bienvenida from '../layout/Bienvenida';
import Pastores from './Pastores';
import Vision from './Vision';
import Horario from './Horario';
import Ubicacion from './Ubicacion';

// IMG
import bg from '../../../public/img/bviglesia.jpg'

export default function Principal(){


    const bv = {
        src:bg,
        // layout:'fill', // fill or fixed
        texto1:'bienvenidos al',
        texto2:' ministerio',
        texto3:'ondas',
        texto4:'profeticas',
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