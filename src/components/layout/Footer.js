import React from 'react';

// EXTERNAL
import Link from 'next/link';

export default function Footer(){

    return (
        <>
        <div className="flex flex-col  h-24 w-full bg-gray-800">
            <div className="flex flex-row justify-center text-xs md:text-base">
                <div className="grid justify-items-center">
                    <Link href="/cookies">
                        <a className="my-4 text-amber-400 mr-4 hover:text-white">
                            Politica de Cookies <span className="ml-2 text-gray-600">|</span>
                        </a>
                    </Link>
                </div>
                <div className="grid justify-items-center ">
                    <Link href="/aviso">
                        <a className="my-4 text-amber-400 mr-4 hover:text-white">
                            Aviso Legal <span className="ml-2 text-gray-600">|</span>
                        </a>
                    </Link>
                </div>
                <div className="grid justify-items-center">
                    <Link href="/privacidad">
                        <a className="my-4 text-amber-400 hover:text-white">
                            Politica de Privacidad
                        </a>
                    </Link>
                </div>
            </div>
            <div className="text-center text-white md:text-base text-xs">
                Copyright <i className="fa fa-copyright"></i> {'    '} 
                2022. 
                Diseñado y Desarrollado por <b> Isaac Lopez</b>
            </div>
        </div>
        </>
    )
}