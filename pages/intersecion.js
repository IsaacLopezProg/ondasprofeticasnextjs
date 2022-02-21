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

const Contacto = () =>{

    return (
        <>
        <Header>
            <Head>
                <title>INTERSECION | Ondas Profeticas</title>
            </Head>
            <Script src="https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp" strategy="afterInteractive"/>
            <Nav/>
            <Principal/>
            <Footer/>
        </Header>
        </>
    )

}

export default Contacto;