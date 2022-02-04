import React from 'react';

// INTERNAL
import Inicio from '../src/components/inicio/Principal';

// HEAD
import Header from '../src/components/layout/Header';
import Nav from '../src/components/layout/Nav';

// FOOTER
import Footer from '../src/components/layout/Footer';

const Principal = () =>{

    return (
        <>
        <Header>
            <Nav/>
            <Inicio/>
            <Footer/>
            
        </Header>
        </>
    )

}

export default Principal;