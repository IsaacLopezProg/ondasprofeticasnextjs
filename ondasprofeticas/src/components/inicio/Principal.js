import React from 'react';

// INTERNAL
import Bienvenida from '../layout/Bienvenida';

// IMG
import bg from '../../../public/img/bvinicio.jpg'

export default function Principal(){


    const bv = {
        src:bg,
        layout:'fixed', // fill or fixed
        texto1:'bienvenidos al',
        texto2:' ministerio',
        texto3:'ondas',
        texto4:'profeticas',
        visible:'visible' //visible o invisible
    }

    return(
        <>
                <Bienvenida  bv={bv} />
        </>
    );
}