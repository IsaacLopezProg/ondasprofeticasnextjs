import React from 'react';

// HEAD
import Header from '../src/components/layout/Header';
import Nav from '../src/components/layout/Nav';

// FOOTER
import Footer from '../src/components/layout/Footer';

// INTERNAL
import Principal from '../src/components/iglesia/Principal';

// EXTERNAL
import Head from 'next/head';

const Contacto = () =>{

    return (
        <>
        <Header>
            <Head>
                <title>IGLESIA | Ondas Profeticas</title>
            </Head>
            <Nav/>
            <Principal/>
            <Footer/>
        </Header>
        </>
    )

}

export default Contacto;