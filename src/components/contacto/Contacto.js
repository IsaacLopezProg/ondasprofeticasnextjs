import React, { useRef } from 'react';

// ICONOS
import {AtSymbolIcon,UserIcon, ChatAltIcon} from '@heroicons/react/outline';

// EXTERNAL
import Link from 'next/link';
import emailjs from '@emailjs/browser';

export default function Contacto(){

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        // try {
        //     if(e.target.name === ''){

        //     }
        // } catch (error) {
            
        // }
    
        emailjs.sendForm('service_idk3oef', 'template_arkb75q', form.current, 'user_ZD7NZWGeqvxof2nWBvuqm')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

    return(
        <>
            <div  className="PADRE flex flex-wrap">
                <div className="flex flex-col w-full">
                    <div className="TITULO py-4  border-b border-slate-300">
                        <h1 className="text-3xl font-light ml-16">
                            Intercesión Profética
                        </h1>
                    </div>
                    <div className="FORM Y CARD md:flex md:flex-row">
                        <div className="DESCRIPCION md:basis-1/2">
                            <div className="DESCRIPCION_DETALLE my-8 ml-16 mr-8">
                                <p className="text-base text-gray-600">
                                    Si tiene alguna necesidad por la que desea la oración o contar algun testimonio, por favor siéntase libre de comunicarse con nosotros a través de este portal de comunicación.
                                    <br/>
                                    <br/>
                                    Por favor se paciente nosotros te responderemos.
                                </p>
                            </div>
                            <br/>
                            <div className="FORM ml-16 mr-8">
                                <div className="TITULO_DEL_FORM">
                                    <h1 className="text-3xl font-bold uppercase">
                                        Envianos un mensaje
                                    </h1>
                                </div>
                                <div className="FORMULARIO">
                                    <form ref={form} onSubmit={sendEmail} className="flex flex-col my-8" >
                                        <div className="NOMBRE_EMAIL flex flex-row">
                                            <div className="NOMBRE basis-full md:basis-1/2">
                                                <label className="font-light mb-2" >Nombre</label>
                                                <div className="flex mr-4 mt-2">
                                                    <span className="inline-flex items-center px-3 border border-r-0 text-gray-500 bg-gray-50 border-gray-500 ">
                                                    <UserIcon className="h-8 w-8"/>
                                                    </span>
                                                    <input
                                                    type="text"
                                                    name="user_name"
                                                    id="company-website"
                                                    className="focus:ring-black focus:border-black flex-1 block w-full sm:text-sm border-gray-500"
                                                    // placeholder="www.example.com"
                                                    />
                                                </div>
                                            </div>
                                            <div className="EMAIL basis-full md:basis-1/2">
                                                <label className="font-light mb-2">Email</label>
                                                <div className="flex mt-2">
                                                    <span className="inline-flex items-center px-3 border border-r-0 text-gray-500 bg-gray-50 border-gray-500 ">
                                                    <AtSymbolIcon className="h-8 w-8"/>
                                                    </span>
                                                    <input
                                                    type="text"
                                                    name="user_email"
                                                    id="company-website"
                                                    className="focus:ring-black focus:border-black flex-1 block w-full sm:text-sm border-gray-500"
                                                    // placeholder="www.example.com"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="TEMA mt-8 w-full">
                                            <label className="font-light my-2 ">Tema</label>
                                            <br/>
                                            <select className="w-full mt-2" name="tipo" defaultValue="">
                                                <option  value="" disabled>Selecciona una opcion</option>
                                                <option value="Testimonio">Testimonio</option>
                                                <option value="Peticion de Oracion">Peticion de Oracion</option>
                                                <option value="Preguntas">Preguntas</option>
                                            </select>
                                        </div>
                                        <div className="MENSAJE mt-8 w-full">
                                            <label className="font-light mb-2" >Mensaje</label>
                                            <div className="flex mr-4 mt-2">
                                                <span className="inline-flex items-center px-3 border border-r-0 text-gray-500 bg-gray-50 border-gray-500 ">
                                                <ChatAltIcon className="h-8 w-8"/>
                                                </span>
                                                <textarea
                                                    name="message"
                                                    id="company-website"
                                                    className="focus:ring-black focus:border-black flex-1 block w-full sm:text-sm border-gray-500"
                                                >
                                                </textarea>
                                            </div>
                                        </div>
                                        <div className="BOTON mt-8 w-full ">
                                            <button className="text-center w-full bg-amber-400 py-4 border uppercase">
                                                Enviar mensaje  
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="CARD md:baseline-1/2 ">
                            <div className="sm:m-8 md:ml-16 md:mt-8 border border-slate-300 w-full sm:w-96 ">
                                <div className="m-8">
                                    <h1 className="text-2xl font-normal ">
                                        Informacion de Ubicacion
                                    </h1>
                                    <p className="text-lg font-light my-4">
                                        Ondas Profeticas
                                    </p>
                                    <p className="text-base text-gray-500 ">
                                        Moca, Espaillat, Republica Dominicana.
                                    </p>
                                    <p className="text-base text-gray-500 ">
                                        Telefono: 809-798-1578
                                    </p>
                                    <p className="text-base text-gray-500 ">
                                        E-mail: <a className="text-amber-400" href="mailto:email@example.com">ondasprofeticas@gmail.com</a>
                                    </p>
                                    <p className="text-base text-gray-500 ">
                                        Website: 
                                            <Link href="/principal">
                                                <a className="text-amber-400" > ondasprofeticas.com</a>
                                            </Link>
                                    </p>
                                </div>
                                {/* <br/> */}

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}