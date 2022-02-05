import React from 'react';

// EXTERNAL
import Image from 'next/image';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/solid';
// import {altoemprende1, altoemprende2} from '../../../styles/Home.module.css';
import styles from '../../../styles/Home.module.css';

// IMAGENES
import bg from '../../../public/img/bgemprende1.jpeg'
import foto from '../../../public/img/bgemprendemision.jpg';
import divider from '../../../public/img/divideremprende.png'

export default function Mision(){

    return(
        <>
            <div className={`${styles.altoemprende1} ${styles.altoemprende2} text-center relative max-w-full my-0 mx-auto`}>
                <Image
                    alt="Mountains"
                    src={bg}
                    layout='fill'
                    objectFit="cover"
                    objectPosition="center"
                    quality={100}
                />
                <div className="absolute inset-y-20  w-full mx-auto my-auto ">
                    <div className="flex flex-col">
                        <div className="COLS-1 text-center">
                            <h1 className=" font-medium uppercase text-6xl text-amber-400"> EMPRENDE </h1>
                            <Image src={divider} />
                            <p className="mt-4 text-gray-500 ">Desarrollo personal y ministerial. </p>
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
                                        />
                                    </div>
                                </div>
                                <div className="md:basis-1/2">
                                <div className="w-full px-4 pt-16">
                                <div className="w-full p-2 mx-auto max-w-lg">
                                    <Disclosure>
                                    {({ open }) => (
                                        <>
                                        <Disclosure.Button className="botonemprende bg-neutral-700">
                                            <span className="text-xl">VISION</span>
                                            <ChevronUpIcon
                                            className={`${
                                                open ? 'transform rotate-180' : ''
                                            } w-5 h-5 text-white`}
                                            />
                                        </Disclosure.Button>
                                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm  text-gray-500">
                                            <span className="font-bold">
                                                Complementar a emprendedores a lograr su visión de negocio y vida.
                                            </span>
                                            <br/>
                                            Emprende es un proyecto que trabaja para fomentar el emprendimiento 
                                            y la superación, es así como emprendedores pueden hacer aportaciones
                                            a su comunidad para mejorar la calidad de vida de las personas. 
                                        </Disclosure.Panel>
                                        </>
                                    )}
                                    </Disclosure>
                                    <Disclosure as="div" className="mt-2">
                                    {({ open }) => (
                                        <>
                                        <Disclosure.Button className="botonemprende bg-neutral-700">
                                            <span className="text-xl">VALORES</span>
                                            <ChevronUpIcon
                                            className={`${
                                                open ? 'transform rotate-180' : ''
                                            } w-5 h-5 text-white`}
                                            />
                                        </Disclosure.Button>
                                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                        <span className="font-bold">
                                            Excelencia: 
                                        </span>
                                            El único resultado que se persigue en todas las metas es el más óptimo.
                                        <br/>
                                        <span className="font-bold">
                                            Persistencia: 
                                        </span>
                                            Trabajo constante y revisiones periódicas a los progresos.
                                        <br/>
                                        <span className="font-bold">
                                            Comunidad: 
                                        </span>
                                             Los proyectos que se apoyan deben contribuir con una comunidad.
                                        <br/>
                                        <span className="font-bold">
                                            Disciplina: 
                                        </span>
                                            Cambiar la manera de vivir en el presente para afectar la manera de vivir en el futuro. 
                                        </Disclosure.Panel>
                                        </>
                                    )}
                                    </Disclosure>
                                    <Disclosure as="div" className="mt-2">
                                    {({ open }) => (
                                        <>
                                        <Disclosure.Button className="botonemprende bg-neutral-700">
                                            <span className="text-xl">DISCIPLINA</span>
                                            <ChevronUpIcon
                                            className={`${
                                                open ? 'transform rotate-180' : ''
                                            } w-5 h-5 text-white`}
                                            />
                                        </Disclosure.Button>
                                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                        Cambiar la manera de vivir en el presente para afectar la manera de vivir en el futuro. 
                                        </Disclosure.Panel>
                                        </>
                                    )}
                                    </Disclosure>
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