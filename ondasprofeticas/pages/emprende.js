import React from 'react';

// INTERNAL
import Principal from '../src/components/emprende/Principal';

// HEAD
import Header from '../src/components/layout/Header';
import Nav from '../src/components/layout/Nav';

// FOOTER
import Footer from '../src/components/layout/Footer';

const Emprende = () =>{

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

export default Emprende;