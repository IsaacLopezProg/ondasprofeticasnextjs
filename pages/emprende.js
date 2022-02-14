import React from 'react';

// INTERNAL
import Principal from '../src/components/emprende/Principal';

// HEAD
import Header from '../src/components/layout/Header';
import Nav from '../src/components/layout/Nav';

// FOOTER
import Footer from '../src/components/layout/Footer';

// EXTERNAL
import Head from 'next/head';

const Emprende = () =>{

    return (
        <>
        <Header>
            <Head>
                <title>EMPRENDE | Ondas Profeticas</title>
            </Head>
            <Nav/>
            <Principal/>
            <Footer/>
            
        </Header>
        </>
    )

}

export default Emprende;