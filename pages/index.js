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
import { NextSeo } from 'next-seo';

const Principal = () =>{

    return (
        <>
        <NextSeo
            title="Ondas Profeticas"
            description="Sitio web cristiano donde se da a conocer el ministerio de ondas profeticas y sus distintas obras y formas de trabajo para difundir el evangelio de Jesucristo"
            canonical="https://www.ondasprofeticas.com/"
            />
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