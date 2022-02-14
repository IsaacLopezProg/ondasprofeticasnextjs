import React from 'react';

// EXTERNAL
import Bienvenida from '../layout/Bienvenida';

// INTERNAL
import Detalle from './Detalle';
import Mision from './Mision';
import Equipo from './Equipo';
import Donacion from './Donacion';

// IMG
import bg from '../../../public/img/bvinicio.jpg'



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
                <Detalle />
                <Mision />
                <Equipo />
                <Donacion />
        </>
    );
}