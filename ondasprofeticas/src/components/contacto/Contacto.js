import React from 'react';

export default function Contacto(){

    return(
        <>
            <div className="PADRE flex flex-wrap">
                <div className="flex flex-col w-full">
                    <div className="TITULO py-4 ml-16 divide-y-4 divide-slate-400/25 border-b border-slate-300">
                        <h1 className="text-3xl font-light divide-y-4 divide-slate-400/25 ">
                            Intercesión Profética
                        </h1>
                    </div>
                    <div className="FORM Y CARD flex flex-row">
                        <div className="FORM basis-1/2">
                            <div className="DESCRIPCION my-8 ml-16">
                                <p className="text-base text-gray-600">
                                    Si tiene alguna necesidad por la que desea la oración o contar algun testimonio, por favor siéntase libre de comunicarse con nosotros a través de este portal de comunicación.
                                    <br/>
                                    <br/>
                                    Por favor se paciente nosotros te responderemos.
                                </p>
                            </div>
                        </div>
                        <div className="CARD baseline-1/2"></div>
                    </div>
                </div>
            </div>
        </>
    )
}