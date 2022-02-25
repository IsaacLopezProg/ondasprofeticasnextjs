import React from 'react';

// IMG
import divider from '../../public/img/divideriglesia2.png';
import divider2 from '../../public/img/divideraccion.png';
// import {API_KEY} from '../../.env.local'
// import divider from '../../public'

// EXTERNAL
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

// import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { format } from 'date-fns';
// import { es } from 'date-fns/locale';

import { NextSeo } from 'next-seo';



// HEAD
import Header from '../../src/components/layout/Header'
import Nav from '../../src/components/layout/Nav';

// FOOTER
import Footer from '../../src/components/layout/Footer';


// INTERNAL
import Bienvenida from '../../src/components/layout/Bienvenida';
import Descripcion from '../../src/components/donacion/Descripcion';
import Ofrendas from '../../src/components/donacion/Ofrendas';

// IMG
import bg from '../../public/img/bvaccion.jpg'






export default function Conocenos({posts}){

    

    const bv = {
        src:bg,
        layout:'fill', // fill or fixed
        texto1:'somos',
        texto2:' accion',
        texto3:'Y queremos acc',
        texto4:'ionar por ti',
        visible:'visible' //visible o invisible
    }

    function parrafo(p){
        const cortado = p.slice(0,100);
        const agregado = cortado.concat(cortado,'...');
        return agregado;
    }

    function video(v){
        const entrada = 'https://www.youtube.com/embed/';
        const video = entrada.concat(v);
        return video;
    }

    return(
        <>
        <NextSeo
            title="Accion Profetica"
            description="El ministerio extiende la mano a los mas necesitados atravez de obras sociales."
            canonical="https://www.ondasprofeticas.com/accion"
            />
        <Header>
            <Head>
                <title>ACCION | Ondas Profeticas</title>
            </Head>
            <Nav/>
            <Bienvenida  bv={bv} />
            <Descripcion />
            <Ofrendas />
        <div className="CONTAIN">
                <div className="flex flex-col mx-auto ">
                    <div className="TITULO basis-full text-center my-8">
                        <h1 className="text-4xl uppercase font-bold mt-8">
                            Conocenos
                        </h1>
                        <Image src={divider} alt='divider'/>
                    </div>
                    <div className="CONTENIDO w-full" >
                    {posts.map(post =>(

                        <div key={post.id} className="PADRE md:ml-36 p-8 mt-8 ">
                            <div className="FECHA  absolute  w-16 md:w-24 h-16 md:h-24 text-sm md:text-base text-center mt-10 md:mt-24 -ml-6 md:-ml-12 z-10 bg-amber-400">
                                <span className=" text-xl md:text-4xl font-bold block text-center mt-2 md:py-2">{ format( new Date(post.createdDate), 'dd' )}</span>
                                <p>
                                    { format( new Date(post.createdDate), 'MMM, yyyy' )} </p>
                                    {/* { format( new Date(post.createdDate), 'MMM, yyyy', {locale: es} )} */}
                                <p>
                                </p>
                            </div>
                            <div className="VIDEO mb-8 hidden md:flex">
                                <iframe width="560" height="315" src={video(post.data.video)} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                            <div className="VIDEO md:hidden mb-12">
                                <iframe width="290" height="150" src={video(post.data.video)} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                            <div className="TEMA ">
                                <h1 className="uppercase font-light text-3xl  md:text-4xl text-center md:text-left -mb-2">{post.data.tema}</h1>
                                <Image src={divider2} alt='divider2'/>
                                <p className="font-light max-w-4xl text-gray-500 mt-4 text-sm md:text-base">{parrafo(post.data.descripcion)}</p>
                                <Link href={`/accion/[id]`} as={`/accion/${post.id}`} key={post.id} passHref>
                                    <button className="divide-y-4 uppercase font-medium mt-8 border-2 border-amber-400 py-2 px-4 rounded hover:bg-amber-400">ver mas</button>
                                </Link>
                            </div>
                            <div className="w-full bg-gray-500 mt-8" style={{height:'2px'}}></div>

                        </div>

        ))}
                    </div>
                </div>
            </div>
            <Footer/>
        </Header>
        </>
    )
}


export async function getServerSideProps(){

    const apikey = process.env.API_KEY;
    // const api = await fetch(`https://cdn.builder.io/api/v2/content/post?apiKey=${apikey}&limit=10`);
    const api = await fetch(`https://cdn.builder.io/api/v2/content/post?apiKey=${apikey}&fields=id,data.tema,data.descripcion,data.video,createdDate&limit=100`);
    const res = await api.json();
    const posts = res.results;

    // console.log(apikey);
    return {
        props: {
            posts
        }
    }
}
