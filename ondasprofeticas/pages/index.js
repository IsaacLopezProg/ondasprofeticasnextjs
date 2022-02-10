import React from 'react';

// INTERNAL
import Inicio from '../src/components/inicio/Principal';
// import Country from './Country';

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
            {/* <Country countryCode="AU" /> */}
            <Footer/>
            
        </Header>
        </>
    )

}

export default Principal;