import React from 'react';

// INTERNAL
import Principal from '../src/components/iglesia/Principal';

// HEAD
import Header from '../src/components/layout/Header';
import Nav from '../src/components/layout/Nav';

// FOOTER
import Footer from '../src/components/layout/Footer';

// EXTERNAL
import Head from 'next/head';
import { NextSeo } from 'next-seo';

const Iglesia = () =>{

    return (
        <>
        <NextSeo
            title="Iglesia MORE"
            description="El ministerio tambien cuenta con una iglesia."
            canonical="https://www.ondasprofeticas.com/iglesia"
            />
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

export default Iglesia;