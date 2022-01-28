import React from 'react';

// INTERNAL
import Inicio from '../src/components/inicio/Principal';

// HEAD
import Header from '../src/components/layout/Header';
import Nav from '../src/components/layout/Nav';

const Principal = () =>{

    return (
        <>
        <Header>
            <Nav/>
            <Principal/>
            
        </Header>
        </>
    )

}

export default Principal;