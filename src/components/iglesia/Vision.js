import React from 'react';

// IMG
import divider from '/public/img/divideriglesia.png'
import divider2 from '/public/img/dividerdonacion.png';
import iglesia from '/public/img/visioniglesia.jpeg'; 
// import 

// EXTERNAL
import Image from 'next/image';
// import { css } from '@emotion/react';

// CSS
// import {imageniglesia} from '../../../styles/Home.module.css';
// import '../../../styles/globals.css';

export default function Vision(){

    // const 
    const color = 'white'

    return (
        <>
        <div className="CONTENT">
            <div className="flex flex-col bg-black">
                <div className="TITULO text-center m-8 ">
                    <h1 className="text-3xl font-bold uppercase text-amber-400">iglesia sobrenatural more</h1>
                    <Image src={divider} alt='divider'/>
                    <p className="text-slate-500 font-bold mt-4">Casa De Adoracion</p>
                </div>
                <div className="IMAGEN_VISION md:flex md:flex-row bg-amber-400">
                    <div className="IMAGEN basis-full md:basis-1/2">
                        <div  className=" imageniglesia border-8 relative  mx-auto my-8">
                            <Image 
                                
                                src={iglesia}
                                layout="fill"
                                objectFit="cover"
                                objectPosition="center"
                                quality={100}
                                alt='foto'
                                placeholder="blur"
                            />
                        </div>
                    </div>
                    <div className="VISION basis-full md:basis-1/2 text-center md:text-left">
                        <div className="mx-auto my-12">
                            <h1 className="text-3xl font-bold uppercase -mb-4">nuestra vision</h1>
                            <Image src={divider2} alt='divider'/>
                            <br/>
                            <p className="text-sm md:text-xl font-light mt-2">Abundante Vida Para Todos</p>
                            <div className="text-slate-500 font-light text-xs md:text-base mt-2">
                                <p className="mt-2">- Conquistar</p>
                                <p className="mt-2">- Conectar</p>
                                <p className="mt-2">- Construir</p>
                                <p className="mt-2">- Comisionar</p>
                                <p className="mt-2">Hombres y mujeres para ejercer toda buena obra en el llamado que Dios les ha dado</p>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>


        </>
    )
}