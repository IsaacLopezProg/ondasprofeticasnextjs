import React from 'react';

// INTERNAL
import Inicio from '../src/components/inicio/Principal';
// import Country from './Country';

// HEAD
import Header from '../src/components/layout/Header';
import Nav from '../src/components/layout/Nav';

// FOOTER
import Footer from '../src/components/layout/Footer';

// EXTERNAL
import Head from 'next/head';

const Principal = () =>{

    return (
        <>
        <Header>
            <Head>
                <title>INICIO | Ondas Profeticas</title>
            </Head>
            <Nav/>
            <Inicio/>
            <Footer/>
            
        </Header>
        </>
    )

}

export default Principal;