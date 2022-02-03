import React from 'react';
import Image from 'next/image';

export default function Bienvenida({bv}){

    return(
        <>
            <div className="text-center h-72 relative max-w-full my-0 mx-auto">
                <Image
                    alt="Mountains"
                    src={bv.src}
                    layout='fill'
                    objectFit="cover"
                    objectPosition="center"
                    quality={100}
                />
                <div className=" absolute inset-y-20  text-5xl text-center uppercase  w-full mx-auto my-auto ">
                    <p className="font-bold mb-4" >
                        <span className="text-amber-400">
                            {bv.texto1}
                        </span>
                        <span className="text-white">
                            {bv.texto2}
                        </span>
                    </p>
                    <div className={bv.visible}>
                        <p className="font-light">
                            <span  className="text-amber-400">
                                {bv.texto3}
                            </span>
                            <span className="mx-4 text-white">
                                {bv.texto4}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}