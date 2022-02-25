import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import { NextSeo, SocialProfileJsonLd,LogoJsonLd  } from 'next-seo';
// import Title from './Title';

const Header = props =>{

    const titulo = 'Inicio | Ondas Profeticas'

    return(
        <>
            
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />   
                <link rel="icon" href="/favicon.ico" />
                {/* EL SEO */}
            </Head>
                {/* <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" /> */}
                <Script src="https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp" strategy="beforeInteractive" />
                <NextSeo
                    robotsProps={{
                        nosnippet: true,
                        notranslate: true,
                        noimageindex: true,
                        noarchive: true,
                        maxSnippet: -1,
                        maxImagePreview: 'none',
                        maxVideoPreview: -1,
                    }}
                    />
                <SocialProfileJsonLd
                    type="Person"
                    name="Nathanel Veras Grullon"
                    url="http://www.ondasprofeticas.com"
                    sameAs={[
                        'http://www.facebook.com/Profeta-Nathanael-Veras-G-106847647624852',
                        'http://instagram.com/profeta_nathanael.v.g',
                        'https://www.youtube.com/channel/UCTvx29fRpv9vWNUiRlHYjXQ',
                    ]}
                    />
                    <LogoJsonLd
                        logo="https://www.ondasprofeticas.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.51c16ff7.png&w=384&q=75"
                        url="http://www.ondasprofeticas.com"
                        />

            
            {/* <Nav/> */}
            
            <main>
                {props.children}
            </main>

        </>
    )
}

export default Header;