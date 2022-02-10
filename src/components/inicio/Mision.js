import React from 'react';

// EXTERNAL
import {LightBulbIcon, SearchIcon, GlobeAltIcon} from '@heroicons/react/outline';

export default function Mision(){

    return(
        <>
            <div className="md:flex md:justify-between bg-white ">
                {/* Vision */}
                <div className="my-12 ml-12 grid justify-items-center"> 
                    <div className="ICONO rounded-full border-2 overflow-hidden h-72 w-72">
                        <SearchIcon className="hover:bg-amber-400 hover:text-white h-72 w-72"/>
                    </div>
                    <div className="TITULO my-4">
                        <h1 className="text-3xl font-medium text-center text-black">Vision</h1>
                    </div>
                    <div className="DESCRIPCION">
                        <p className="text-base text-gray-400 text-center">
                            Reproducir el evangelio integral de Cristo, trayendo bendiciones, espirituales,emocionales, materiales o fisicas.
                        </p>
                    </div>
                </div>
                {/* Mision */}
                <div className="my-12 ml-12 grid justify-items-center"> 
                    <div className="ICONO rounded-full border-2 overflow-hidden h-72 w-72">
                        <GlobeAltIcon className="hover:bg-amber-400 hover:text-white h-72 w-72"/>
                    </div>
                    <div className="TITULO my-4">
                        <h1 className="text-3xl font-medium text-center text-black">Mision</h1>
                    </div>
                    <div className="DESCRIPCION">
                        <p className="text-base text-gray-400 text-center">
                        Mostrar en lugares indicados
                        por el Espiritu, el amor
                        de Dios en toda su plenitud.
                        </p>
                    </div>
                </div>
                {/* Objetivo */}
                <div className="my-12 ml-12 grid justify-items-center"> 
                    <div className="ICONO rounded-full border-2 overflow-hidden h-72 w-72">
                        <	LightBulbIcon className="hover:bg-amber-400 hover:text-white h-72 w-72"/>
                    </div>
                    <div className="TITULO my-4">
                        <h1 className="text-3xl font-medium text-center text-black">Objetivo</h1>
                    </div>
                    <div className="DESCRIPCION">
                        <p className="text-base text-gray-400 text-center">
                        Reproducir este formato de evangelio en todos los que formen parte del ministerio y los que nos vean desde afuera, como ejemplo.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}