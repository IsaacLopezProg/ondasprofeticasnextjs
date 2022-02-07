import React from 'react';

// IMG
import divider from '../../../public/img/divideriglesia.png'
import iglesia from '../../../public/img/iglesia.jpg'; 

// EXTERNAL
import Image from 'next/image';
import { css } from '@emotion/react';

// CSS
import {imageniglesia} from '../../../styles/Home.module.css';
// import '../../../styles/globals.css';

export default function Vision(){

    // const 
    const color = 'white'

    return (
        <>
        <div className="CONTENT">
            <div className="flex flex-col bg-black">
                <div className="TITULO text-center m-8 ">
                    <h1 className="text-3xl font-bold uppercase text-amber-400">iglesia more casa de adoracion</h1>
                    <Image src={divider} />
                    <p className="text-slate-500 font-bold mt-4">Abundante vida para todos</p>
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
                            />
                        </div>
                    </div>
                    <div className="VISION basis-full md:basis-1/2 text-center md:text-left">
                        <div className="mx-auto my-12">
                            <h1 className="text-3xl font-bold uppercase">nuestra vision</h1>
                            <br/>
                            <p className="text-xl font-light">Abundante Vida Para Todos</p>
                            <br/>
                            <p className="text-base font-light">- Conquistar</p>
                            <p className="text-base font-light">- Conectar</p>
                            <p className="text-base font-light">- Construir</p>
                            <p className="text-base font-light">- Comisionar</p>
                            <p className="text-base font-light mt-2">    Hombres y mujeres para ejercer toda buena obra en el llamado que Dios les ha dado</p>

                        </div>
                    </div>
                </div>

            </div>
        </div>


        </>
    )
}