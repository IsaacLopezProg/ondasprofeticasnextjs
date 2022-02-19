import React from 'react';

// EXTERNAL
import Image from 'next/image';
import styles from '/styles/Home.module.css';
// import {ChartPieIcon} from '@heroicons/react/outline';

// IMAGENES
import bg from '/public/img/bgemprende2.jpg'
import foto from '/public/img/bgemprendeforma.jpg';
import divider from '/public/img/divideremprende.png'

export default function Forma(){

    return(
        <>
            <div className={`${styles.altoemprende3} ${styles.altoemprende4} text-center relative max-w-full my-0 mx-auto`}>
                <Image
                    alt="Mountains"
                    src={bg}
                    layout='fill'
                    objectFit="cover"
                    objectPosition="center"
                    quality={60}
                    placeholder="blur"
                />
                <div className="absolute inset-y-20  w-full mx-auto my-auto ">
                    <div className="flex flex-col">
                        <div className="COLS-1 text-center">
                            <h1 className=" font-medium uppercase text-6xl text-amber-400"> FORMA DE TRABAJO </h1>
                            <Image src={divider} alt='divider'/>
                        </div>
                        <div className="COLS-2">
                            <div className="md:flex md:flex-row">
                                <div className="md:basis-1/2">
                                    <div className="m-16">
                                        <Image 
                                            src={foto}
                                            layout='responsive'
                                            objectFit="cover"
                                            objectPosition="center"
                                            quality={100}
                                            alt='foto'
                                            placeholder="blur"
                                        />
                                    </div>
                                </div>
                                <div className="md:basis-1/2">
                                    <div className="w-full px-4 pt-16">
                                        <div className="w-full p-2 mx-auto max-w-xl bg-white hover:bg-amber-400">
                                            <div className="flex p-4 border border-black hover:border-white">
                                                    <span className="inline-flex items-center ">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 stroke-1 hover:stroke-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round"  d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round"  d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                                                    </svg>
                                                    {/* <ChartPieIcon className="h-24 w-24 stroke-1"/> */}
                                                    </span>
                                                    <div className="text-left font-light ml-2">
                                                        <h1 className="text-2xl mb-2 uppercase">Nuestra parte.</h1>
                                                        <p>El programa aportará toda la accesoria para desarrollo de los proyectos, desde llevar la idea inicial hasta un plan concreto con descripción y programa de captación de recursos.</p>
                                                    </div>
                                            </div>
                                        </div>
                                        <div className="w-full p-2 mx-auto max-w-xl bg-white my-4 hover:bg-amber-400">
                                            <div className="flex p-4 border border-black hover:border-white">
                                                        <span className="inline-flex items-center ">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 stroke-1 hover:stroke-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                        </svg>
                                                        {/* <ChartPieIcon className="h-24 w-24 stroke-1"/> */}
                                                        </span>
                                                        <div className="text-left font-light ml-2">
                                                            <h1 className="text-2xl mb-2 uppercase">Su parte.</h1>
                                                            <p>Todos las ideas y emprendimientos que Sean negocios o funcionen como empresas aportarán por un tiempo de terminado al momento del análisis, un 20% a emprende. </p>
                                                        </div>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}