import React from 'react';

// INTERNAL
import Contacto from './Contacto';

// EXTERNAL
import Bienvenida from '../layout/Bienvenida';

// IMG
import bg from '/public/img/bvintersecion.jpg'

export default function Principal(){


    const bv = {
        src:bg,
        // layout:'fill', // fill or fixed
        texto1:'somos',
        texto2:' Intercesores',
        texto3:'Y queremos',
        texto4:'orar por ti',
        visible:'visible' //visible o invisible
    }

    return(
        <>
                <Bienvenida  bv={bv} />
                <Contacto/>
        </>
    );
}