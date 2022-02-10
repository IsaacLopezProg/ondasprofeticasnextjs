import React,{Fragment} from 'react';

// EXTERNAL
import Image from 'next/image';
import {Tab} from '@headlessui/react';

// IMG
import foto from '../../../public/img/foto.jpg'
import divider from '../../../public/img/divider.png'

// ICONS

import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/outline'

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
                    <div className="mb-12">
                        <Image 
                            src={divider}
                            objectFit="responsive"
                            objectPosition="center"
                            quality={100}
                            alt='foto'
                        />
                    </div>
                    <div className="tab">
                        <Tab.Group>
                            <Tab.List >
                                <Tab.Panels>
                                    <Tab.Panel>
                                        <div className="detalle-1 mb-8">
                                            <h5 className="text-xl font-light my-4">Somos un ministerio dedicado a predicar la palabra de manera objetiva.</h5>
                                                <p className="font-light text-base">Llevando el mensaje de Jesucristo a través de:</p>
                                                <p className="text-slate-500 font-light"> - Predicaciones en linea y presenciales.</p>
                                                <p className="text-slate-500 font-light"> - Capacitaciones a líderes.</p>
                                                <p className="text-slate-500 font-light"> - Conferencias para desarrollo personal, familiar y ministerial.</p>
                                                <p className="text-slate-500 font-light"> - Obras sociales.</p>
                                        </div>
                                    </Tab.Panel>
                                <Tab.Panel>
                                <div className="detalle-2 mb-8">
                                    <h5 className="text-xl font-light my-4"> Nuestro llamado está basado en la palabra dicha en:</h5>
                                    <p className="font-light text-base"> <span className="border-b border-black"> JEREMIAS 1:10 </span>
                                    Mira que te he puesto en este día sobre naciones y sobre reinos, para arrancar y para destruir, para arruinar y para derribar, para edificar y para plantar. </p>
                                    <p className="text-slate-500 font-light">  Y Actualmente predicamos la palabra a fin de arrancar, destruir, arruinar y derribar todo argumento que se levanté en contra del conocimiento de Cristo y así poder edificar y plantar la semilla del evangelio en cada persona que nos escuche.</p>
                                </div>
                            </Tab.Panel>
                                </Tab.Panels>
                                <Tab as={Fragment}>
                            {({ selected}) =>(
                                <button className={
                                    selected ? 'hidden ' : 'mr-2 ml-24 md:ml-40 bg-white text-amber-400 hover:text-white hover:bg-black'
                                }>
                                    <ArrowLeftIcon className="h-auto w-12"/>
                                </button>
                            )}
                        </Tab>
                                <Tab as={Fragment} >
                            {({ selected}) =>(
                                <button className={
                                    selected ? 'hidden' : ' mr-2 ml-24 md:ml-40 bg-white text-amber-400 hover:text-white hover:bg-black'
                                }>
                                    <ArrowRightIcon className="h-auto w-12"/>
                                </button>
                            )}
                        </Tab>
                                {/* <Tab className="p-4 bg-gray-50 text-center text-lg font-bold active:text-amber-400 hover:text-white hover:bg-gray-900">
                                    <ArrowRightIcon className="h-5 w-5  "/>
                                </Tab> */}
                            </Tab.List>
                        </Tab.Group>
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
                        alt='foto'
                    />
                </div>
            </div>
        </div>
        </>
    )
}