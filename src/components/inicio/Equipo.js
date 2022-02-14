import React from 'react';

// IMG
import bg from '../../../public/img/bginicio.jpg';
import divider from '../../../public/img/divideremprende.png';
import iglesia from '../../../public/img/iglesia.jpg';
import orar from '../../../public/img/orar.jpg';
import accion from '../../../public/img/accion.jpeg'
import emprende from '../../../public/img/bgemprendeforma.jpg'

// EXTERNAL
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// CSS
import styles from '../../../styles/Home.module.css';



export default function Equipo(){


    return(
        <>
        <div className={`${styles.altoemprende1} ${styles.altoemprende2} text-center relative max-w-full my-0 mx-auto`}>
            <Image src={bg} 
                    alt="foto"
                    layout='fill'
                    objectFit="cover"
                    objectPosition="center"
                    quality={100}
                />

            <div className="PADRE absolute inset-y-8  w-full mx-auto my-auto">
                <div className="flex flex-col">
                    <div className="TITULO  text-center my-8 grid justify-items-center">
                        <h1 className="text-5xl font-bold mb-2 uppercase text-amber-400 text">nuestros equipos</h1>
                        <Image src={divider} height={3} alt="divider" />
                    </div>
                    <div className="CARDS">
                        <Swiper loop={true} navigation={true} modules={[Navigation]} className="mySwiper">
                            <SwiperSlide className="IGLESIA ">
                                <div className="md:flex md:flex-row max-w-6xl md:text-left"> 
                                {/* max-w-6xl */}
                                    <div className="DESCRIPCION md:basis-1/2 my-12 text-white mx-4">
                                        <h1 className="text-5xl uppercase">
                                            iglesia more casa de adoracion
                                        </h1>
                                        <br/>
                                        <p className="font-light">Somos la casa de Dios para ti, estamos listos para recibirte junto a tu familia y gozar de nuestro Dios en oración, alabanzas y exaltación, y asi bendecir tu vida a través de la poderosa palabra del señor.</p>
                                        <br/>
                                        <p className="font-light text-gray-400 text-base">Somos Iglesia, nuestro equipo tambien va de la mano con la primera iglesia del ministrio MORE INTERNATIONAL en el pais.</p>
                                        <Link href="/iglesia" passHref >
                                            <button className="divide-y-4 uppercase font-medium mt-8 border-2 border-amber-400 py-2 px-4 rounded hover:bg-amber-400">ver mas</button>
                                        </Link>
                                    </div>
                                    <div className="FOTO md:basis-1/2 basis-full">
                                        <div className="h-96  border-8 relative  mx-4 my-8">
                                            <Image
                                                src={iglesia}
                                                alt="iglesia"
                                                quality={100}
                                                layout="fill"
                                                objectFit="cover"
                                                objectPosition="center"
                                            />
                                        </div>

                                    </div>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide className="INTERSECION_PROFETICA ">
                                <div className="md:flex md:flex-row max-w-6xl md:text-left"> 
                                {/* max-w-6xl */}
                                    <div className="DESCRIPCION md:basis-1/2 my-12 text-white mx-4">
                                        <h1 className="text-5xl uppercase">
                                            INTERSECION PROFETICA
                                        </h1>
                                        <br/>
                                        <p className="font-light">Si tiene alguna necesidad por la que desea la oración o contar algun testimonio, por favor siéntase libre de comunicarse con nosotros a través de este portal de comunicación.</p>
                                        <br/>
                                        <p className="font-light text-gray-400 text-base">Equipo que se encarga de orar, a consejar, escuchar testimonios, dialogar con las personas que necesiten todo tipo de ayuda espiritual o personal.</p>
                                        <Link href="/intersecion" passHref >
                                            <button className="divide-y-4 uppercase font-medium mt-8 border-2 border-amber-400 py-2 px-4 rounded hover:bg-amber-400">ver mas</button>
                                        </Link>
                                    </div>
                                    <div className="FOTO md:basis-1/2 basis-full">
                                        <div className="h-96 border-8 relative  mx-4 my-8">
                                            <Image
                                                src={orar}
                                                alt="orar"
                                                quality={100}
                                                layout="fill"
                                                objectFit="cover"
                                                objectPosition="center"
                                            />
                                        </div>

                                    </div>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide className="Accion_Profetica ">
                                <div className="md:flex md:flex-row max-w-6xl md:text-left"> 
                                {/* max-w-6xl */}
                                    <div className="DESCRIPCION md:basis-1/2 my-12 text-white mx-4">
                                        <h1 className="text-5xl uppercase">
                                            Accion Profetica
                                        </h1>
                                        <br/>
                                        <p className="font-light">Es la parte operacional del ministerio ONDAS PROFÉTICAS dónde se lleva de la palabra a la acción por medios de obras sociales para mostrar a Cristo a través del servicio y donaciones. </p>
                                        <br/>
                                        <p className="font-light text-gray-400 text-base">Equipo de hombres y mujeres que se encargan de ir a los lugares donde hay mas necesidad a llevar raciones de comida, ropa, utensilios de primera necesidad, etc.</p>
                                        <Link href="/accion" passHref >
                                            <button className="divide-y-4 uppercase font-medium mt-8 border-2 border-amber-400 py-2 px-4 rounded hover:bg-amber-400">ver mas</button>
                                        </Link>
                                    </div>
                                    <div className="FOTO md:basis-1/2 basis-full">
                                        <div className="h-96 border-8 relative  mx-4 my-8">
                                            <Image
                                                src={accion}
                                                alt="accion"
                                                quality={100}
                                                layout="fill"
                                                objectFit="cover"
                                                objectPosition="center"
                                            />
                                        </div>

                                    </div>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide className="IGLESIA ">
                                <div className="md:flex md:flex-row max-w-6xl md:text-left"> 
                                {/* max-w-6xl */}
                                    <div className="DESCRIPCION md:basis-1/2 my-12 text-white mx-4">
                                        <h1 className="text-5xl uppercase">
                                            EMPRENDE
                                        </h1>
                                        <br/>
                                        <p className="font-light">Desarrollo Personal y Ministerial</p>
                                        <br/>
                                        <p className="font-light text-gray-400 text-base">Equipo que se encarga de las areas ministeriales y de negocios, donde esta un personal capacitado para lanzar y apoyar a emprendedores como tambien a ministros.</p>
                                        <Link href="/emprende" passHref >
                                            <button className="divide-y-4 uppercase font-medium mt-8 border-2 border-amber-400 py-2 px-4 rounded hover:bg-amber-400">ver mas</button>
                                        </Link>
                                    </div>
                                    <div className="FOTO md:basis-1/2 basis-full">
                                        <div className="h-96 border-8 relative  mx-4 my-8">
                                            <Image
                                                src={emprende}
                                                alt="emprende"
                                                quality={100}
                                                layout="fill"
                                                objectFit="cover"
                                                objectPosition="center"
                                            />
                                        </div>

                                    </div>
                                </div>
                                </SwiperSlide>
                            </Swiper>
                    </div>
                </div>
                
            </div>
        </div>
        </>
    )
}