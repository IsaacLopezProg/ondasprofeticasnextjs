import React,{Fragment} from 'react';

// EXTERNAL
import Image from 'next/image';
import {Tab} from '@headlessui/react';

// IMG
import foto from '../../../public/img/pastores.jpg'
import divider from '../../../public/img/divider.png'

// ICONS

import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/outline'

export default function Pastores(){

    return (
        <>
        <div className="h-auto flex flex-wrap bg-amber-400">
            <div className="basis-full md:basis-2/3">
                <div className="ml-16 mr-4 my-16">
                    <h1 className="uppercase font-bold text-5xl mb-2">
                    pastores
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
                                            <h5 className="text-xl font-light my-4 max-w-max"><span className="border-b border-black">Nathanael Veras Grullón</span> y <span className="border-b border-black">Marinelva Anabel Almonte Arnaud</span></h5>
                                                <p className="font-light">Somos la casa de Dios para ti, estamos listos para recibirte junto a tu familia y gozar de nuestro Dios en oración, alabanzas y exaltación, y asi bendecir tu vida a través de la poderosa palabra del señor.</p>
                                                <br/>
                                                <p className="font-light">SALMOS 23:6 Ciertamente el bien y la misericordia me seguirán todos los días de mi vida, Y en la casa de Jehová moraré por largos días.</p>
                                        </div>
                                    </Tab.Panel>
                                <Tab.Panel>
                                <div className="detalle-2 mb-8">
                                    <h5 className="text-xl font-light my-4 max-w-max"> Podemos ayudarte por la palabra con:</h5>
                                    <p className="text-slate-500 font-light"> - Consejería matrimonial.</p>
                                    <p className="text-slate-500 font-light"> - Consejería para tus niños.</p>
                                    <p className="text-slate-500 font-light"> - Consejería de negocios.</p>
                                    <p className="text-slate-500 font-light"> - Guía Espiritual.</p>
                                    <p className="text-slate-500 font-light"> - Ayuda Ministerial.</p>
                                    <p className="text-slate-500 font-light"> - Entre otros.</p>
                                    <br/>
                                    <span className="font-light">
                                        Permitenos ser tus amigos.<br/>
                                        Numeros de contacto: <br/>
                                        809-798-1578 / 829-427-8008
                                    </span>
                                    
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
            <div className="basis-full md:basis-1/3 grid justify-items-center">
                <div className="m-8 max-w-max text-center">
                    <Image 
                        height={500}
                        width={300}
                        src={foto}
                        objectFit="fill"
                        objectPosition="center"
                        quality={100}
                        alt="Foto"
                    />
                </div>
            </div>
        </div>
        </>
    )
}