import React from 'react';

// INTERNAL
import Bienvenida from '../layout/Bienvenida';
import Mision from './Mision';
import Forma from './Forma';

// IMG
import bg from '/public/img/bvemprende.jpg'

export default function Principal(){


    const bv = {
        src:bg,
        // layout:'fill', // fill or fixed
        texto1:'somos',
        texto2:' emprendedores',
        texto3:'ondas',
        texto4:'profeticas',
        visible:'invisible' //visible o invisible
    }

    return(
        <>
                <Bienvenida  bv={bv} />
                <Mision />
                <Forma />
        </>
    );
}