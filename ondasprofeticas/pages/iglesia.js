import React from 'react';

// HEAD
import Header from '../src/components/layout/Header';
import Nav from '../src/components/layout/Nav';

// FOOTER
import Footer from '../src/components/layout/Footer';

// INTERNAL
import Principal from '../src/components/iglesia/Principal';

const Contacto = () =>{

    return (
        <>
        <Header>
            <Nav/>
            <Principal/>
            <Footer/>
        </Header>
        </>
    )

}

export default Contacto;