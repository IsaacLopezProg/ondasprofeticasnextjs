import React from 'react';

// HEAD
import Header from '../src/components/layout/Header';
import Nav from '../src/components/layout/Nav';

// FOOTER
import Footer from '../src/components/layout/Footer';

// INTERNAL
import Principal from '../src/components/contacto/Principal';

// EXTERNAL
import Head from 'next/head';
import Script from 'next/script';
import { NextSeo } from 'next-seo';

const Contacto = () =>{

    return (
        <>
        <NextSeo
            title="Intersecion Profetica"
            description="El ministerio esta interesado en que si alguna persona necesita la oracion puede contar con nosotros."
            canonical="https://www.ondasprofeticas.com/intersecion"
            />
        <Header>
            <Head>
                <title>INTERSECION | Ondas Profeticas</title>
            </Head>
            <Script src="https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp" strategy="beforeInteractive" />
            <Nav/>
            <Principal/>
            <Footer/>
        </Header>
        </>
    )

}

export default Contacto;