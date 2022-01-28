import React from 'react';
// import Image from 'next/image';
import Head from 'next/head'
// import logo from '../../../public/img/aaaa.ico'

import Nav from './Nav';

const Header = props =>{

    const titulo = 'Inicio | Ondas Profeticas'

    return(
        <>
            <Head>
            <link href='https://fonts.googleapis.com/css?family=Open+Sans:300,300italic,400,400italic,600,600italic,700,700italic,800,800italic' rel='stylesheet' type='text/css'/>
            <link href='https://fonts.googleapis.com/css?family=Raleway:100,200,300,400,500,600,700,800,900' rel='stylesheet' type='text/css'/>

            <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
            <script src="https://cdn.tailwindcss.com"></script>
            <script src="https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp"></script>
            {/* <link rel="shortcut icon" href={logo.ico} /> */}
            <title>{titulo}</title>
            </Head>
            {/* <Nav/> */}
            
            <main>
                {props.children}
            </main>

        </>
    )
}

export default Header;