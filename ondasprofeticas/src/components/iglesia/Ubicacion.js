import React from 'react';

// IMG
import divider from '../../../public/img/divideriglesia2.png';

// EXTERNAL
import Image from 'next/image';

export default function Ubicacion(){

    return (
        <>
            <div className="CONTAIN">
                <div className="flex flex-col mx-auto ">
                    <div className="TITULO basis-full text-center my-8">
                        <h1 className="text-4xl uppercase font-bold mt-8">
                            Nuestros Dias De Servicios
                        </h1>
                        <Image src={divider} />
                    </div>
                    <div>
                    <iframe className="google-map two" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.7924162244763!2d-70.44228073112619!3d19.42137304893203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDI1JzE5LjYiTiA3MMKwMjYnMjMuOSJX!5e0!3m2!1ses!2sdo!4v1612299890527!5m2!1ses!2sdo" width="100%"  height="450" frameborder="0" style={{border:'0'}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </div>
                </div>

            </div>
        </>
    )
}