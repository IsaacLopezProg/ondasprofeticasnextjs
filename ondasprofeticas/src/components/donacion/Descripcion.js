import React from 'react';

// IMG
import foto from '../../../public/img/accion.jpeg';
import divider from '../../../public/img/divideraccion.png';

// EXTERNAL
import Image from 'next/image';

export default function Descripcion(){

    return (
        <>
        <div className="CONTAIN">
            <div className="TITULO py-4  border-b border-slate-300">
                <h1 className="text-3xl font-light ml-16">
                    Accion Profetica
                </h1>
            </div>
            <div className="IMAGEN_PARRAFO md:flex md:flex-row mt-8">
                <div className="IMAGEN md:basis-1/2 ">
                    <div className="my-8 md:ml-8">
                        <Image 

                            src={foto}
                            quality={100}

                        />
                    </div>
                </div>
                <div className="PARRAFO md:basis-1/2 mt-8 text-center md:text-left">
                    <h1 className="text-3xl font-bold uppercase">Accion Profetica</h1>
                    <Image src={divider} />
                    <div className="font-light text-gray-500 mr-16">
                        <p className="mt-4">
                        Es la parte operacional del ministerio <span className="uppercase font-extralight">ONDAS PROFÉTICAS</span> dónde se lleva de la palabra a la acción por medios de obras sociales para mostrar a Cristo a través del servicio y donaciones.
                        </p>
                        <br/>
                        <span className="uppercase font-bold">SANTIAGO 2:15-17</span> 
                        <p>15 Y si un hermano o una hermana están desnudos, y tienen necesidad del mantenimiento de cada día,</p>
                        <p>16 y alguno de vosotros les dice: Id en paz, calentaos y saciaos, pero no les dais las cosas que son necesarias para el cuerpo, ¿de qué aprovecha?</p>
                        <p>17 Así también la fe, si no tiene obras, es muerta en sí misma.</p>
                        <p className="mt-2 mb-8">Tu también puedes ser un patrocinador de este ministerio y accionar tu fé por medio de tus donaciones, bendiciendo a familias completas. </p>

                    </div>
                    
                    
                    

                    
                    
                </div>

            </div>
        </div>
        </>
    )
}