import React from 'react';

// EXTERNAL
import Image from 'next/image';

// IMG
import foto from '../../../public/img/foto.jpg'
import divider from '../../../public/img/divider.png'

export default function Detalle(){

    return (
        <>
        <div className="h-auto flex flex-wrap bg-amber-400">
            <div className="basis-full md:basis-1/2">
                <div className="ml-16 mr-4 my-16">
                    <h1 className="uppercase font-bold text-5xl text-center mb-2">
                    MINISTERIO ONDAS 
                    <br/>
                    PROFETICAS
                    </h1>
                    <div className="basis-2/3 mb-12">
                        <Image 
                            src={divider}
                            objectFit="responsive"
                            objectPosition="center"
                            quality={100}
                        />
                    </div>
                    <div className="basis-1/4 mb-12">
                        
                    </div>
                    <div className="">
                        <h5 className="text-xl font-light my-4">Somos un ministerio dedicado a predicar la palabra de manera objetiva.</h5>
                            <p className="font-light text-base">Llevando el mensaje de Jesucristo a través de:</p>
                            <p className="text-slate-500 font-light"> - Predicaciones en linea y presenciales.</p>
                            <p className="text-slate-500 font-light"> - Capacitaciones a líderes.</p>
                            <p className="text-slate-500 font-light"> - Conferencias para desarrollo personal, familiar y ministerial.</p>
                            <p className="text-slate-500 font-light"> - Obras sociales.</p>
                    </div>
                    <div>
                        <h5> Nuestro llamado está basado en la palabra dicha en:</h5>
                        <p class="black"> <span style={{borderBottom: "1px solid black"}}> JEREMIAS 1:10 </span>
                        Mira que te he puesto en este día sobre naciones y sobre reinos, para arrancar y para destruir, para arruinar y para derribar, para edificar y para plantar. </p>
                        <p>  Y Actualmente predicamos la palabra a fin de arrancar, destruir, arruinar y derribar todo argumento que se levanté en contra del conocimiento de Cristo y así poder edificar y plantar la semilla del evangelio en cada persona que nos escuche.</p>
        
                    </div>
                </div>
            </div>
            <div className="basis-full md:basis-1/2">
                <div className="m-8">
                    <Image 
                        src={foto}
                        objectFit="cover"
                        objectPosition="center"
                        quality={100}
                    />
                </div>
            </div>


        </div>
        </>
    )
}