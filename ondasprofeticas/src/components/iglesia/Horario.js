import React from 'react';

// IMG
import divider from '../../../public/img/divideriglesia2.png';

// EXTERNAL
import Image from 'next/image';

export default function Horario() {

    return (
        <>
        <div className="CONTAIN">
            <div className="flex flex-col mx-auto">
                <div className="TITULO basis-full text-center">
                    <h1 className="text-4xl uppercase font-bold mt-8">
                        Nuestros Dias De Servicios
                    </h1>
                    <Image src={divider} />
                </div>
            </div>
        <div className="md:flex md:justify-evenly w-full mx-auto md:max-w-5xl bg-white my-4 hover:bg-amber-400  border border-black text-center">
            <div className=" md:border-r border-b md:border-b-0  py-4 pr-8 border-black text-center">
                <h1 className="text-xl font-normal">Martes</h1>
                <p className="font-light">Servicio de adoracion</p>
                <p>5:30pm a 7:00pm </p>
            </div>
            <div className=" md:border-r border-b md:border-b-0 py-4 pr-16 border-black text-center">
                <h1 className="text-xl font-normal">Jueves</h1>
                <p className="font-light">Estudio de la palabra de Dios</p>
                <p>6:00pm a 7:15pm </p>
            </div>
            <div className="py-4 pr-8 text-center">
                <h1 className="text-xl font-normal ">Domingo</h1>
                <p className="font-light">Culto evangelistico</p>
                <p>5:00pm a 7:00pm </p>
            </div>
                        
            </div>

        </div>
        <div className="w-full bg-gray-500 mt-8" style={{height:'0.25px'}}></div>
        </>
    )
}