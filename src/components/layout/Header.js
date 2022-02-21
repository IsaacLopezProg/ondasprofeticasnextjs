import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
// import Title from './Title';

const Header = props =>{

    const titulo = 'Inicio | Ondas Profeticas'

    return(
        <>
            
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />   
                {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossOrigin="anonymous" referrerPolicy="no-referrer" /> */}
                <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
                {/* EL SEO */}
            </Head>
                {/* <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" /> */}
                {/* <Script src="https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp" strategy="beforeInteractive" /> */}


            
            {/* <Nav/> */}
            
            <main>
                {props.children}
            </main>

        </>
    )
}

export default Header;