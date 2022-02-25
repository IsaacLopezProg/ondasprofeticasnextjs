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
import { NextSeo } from 'next-seo';

const Emprende = () =>{

    return (
        <>
        <NextSeo
            title="Emprende"
            description="Es la parte del ministerio que se encarga de incentivar a los emprendedores"
            canonical="https://www.ondasprofeticas.com/emprende"
            />
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