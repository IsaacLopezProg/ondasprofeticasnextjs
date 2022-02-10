import React from 'react';

// INTERNAL
import Bienvenida from '../layout/Bienvenida';
import Descripcion from './Descripcion';
import Conocenos from './Conocenos';

// IMG
import bg from '../../../public/img/bvaccion.jpg'

export default function Principal(){


    const bv = {
        src:bg,
        layout:'fill', // fill or fixed
        texto1:'somos',
        texto2:' accion',
        texto3:'Y queremos acc',
        texto4:'ionar por ti',
        visible:'visible' //visible o invisible
    }

    return(
        <>
                <Bienvenida  bv={bv} />
                <Descripcion />
                <Conocenos />
        </>
    );
}