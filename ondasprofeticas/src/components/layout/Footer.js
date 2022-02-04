import React from 'react';

// EXTERNAL
import Link from 'next/link';

export default function Footer(){

    return (
        <>
            <div className="flex flex-row justify-center h-12 w-full bg-gray-800">
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
        </>
    )
}