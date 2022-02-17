import React from 'react';

// IMG
import divider from '../../public/img/divideriglesia2.png';
import divider2 from '../../public/img/divideraccion.png';
// import divider from '../../public'

// EXTERNAL
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

// import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { format } from 'date-fns';
// import { es } from 'date-fns/locale';



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

    console.log(posts)
    

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
        const cortado = p.slice(0,200);
        const agregado = cortado.concat(cortado,'...');
        return agregado;
    }

    return(
        <>
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
                                <iframe width="560" height="315" src={post.data.video} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                            <div className="VIDEO md:hidden mb-12">
                                <iframe width="290" height="150" src={post.data.video} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                            <div className="TEMA ">
                                <h1 className="uppercase font-light text-4xl text-center md:text-left -mb-2">{post.data.tema}</h1>
                                <Image src={divider2} alt='divider2'/>
                                <p className="font-light max-w-4xl text-gray-500 mt-4">{parrafo(post.data.descripcion)}</p>
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
            <p>HOLA</p>
            <Footer/>
        </Header>
        </>
    )
}


export async function getServerSideProps(){

    const api = await fetch('https://cdn.builder.io/api/v2/content/post?apiKey=fb0e5cc283ee41ed967bd97a41783fce&limit=10');
    const res = await api.json();
    const posts = res.results;

    return {
        props: {
            posts
        }
    }
}