import React from 'react';

// IMG
import divider from '../../../public/img/divideriglesia2.png';
import divider2 from '../../../public/img/divideraccion.png';

// EXTERNAL
import Image from 'next/image';


export default function Conocenos(){

    return(
        <>
        <div className="CONTAIN">
                <div className="flex flex-col mx-auto ">
                    <div className="TITULO basis-full text-center my-8">
                        <h1 className="text-4xl uppercase font-bold mt-8">
                            Conocenos
                        </h1>
                        <Image src={divider} />
                    </div>
                    <div className="CONTENIDO w-full" >
                        <div className="PADRE md:ml-36 p-8 mt-8 ">
                            <div className="FECHA  absolute w-24 h-24 text-base text-center mt-24 -ml-12 z-10 bg-amber-400">
                                <span className="text-4xl font-bold block text-center py-2">22</span>
                                <p>
                                Oct, 2020
                                </p>
                            </div>
                            <div className="VIDEO mb-8">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/pOKnOk-jaTk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <div className="TEMA ">
                                <h1 className="uppercase font-light text-4xl text-center md:text-left -mb-2">cuarta prueba</h1>
                                <Image src={divider2} />
                                <p className="font-light max-w-4xl text-gray-500 mt-4">Desde un punto de vista técnico, el concepto de educación describe a un proceso continuo, en el que se desarrollan las facultades intelectuales, morales y físicas del hombre, con el objetivo de que se incorpore de manera eficiente en la …</p>
                                <button className="divide-y-4 uppercase font-medium mt-8 border-2 border-amber-400 py-2 px-4 rounded hover:bg-amber-400">ver mas</button>
                            </div>
                            <div className="w-full bg-gray-500 mt-8" style={{height:'2px'}}></div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}