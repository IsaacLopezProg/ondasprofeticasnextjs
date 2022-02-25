import React, { useRef, useState } from 'react';

// ICONOS
import {AtSymbolIcon,UserIcon, ChatAltIcon} from '@heroicons/react/outline';

// EXTERNAL
import Link from 'next/link';
import emailjs from '@emailjs/browser';
import { set } from 'date-fns';

export default function Contacto(){

    const form = useRef();
    
    const user = process.env.NEXT_PUBLIC_MAILJS_USER;
    const template = process.env.NEXT_PUBLIC_MAILJS_TEMPLATE;
    const service = process.env.NEXT_PUBLIC_MAILJS_SERVICE;

    function limpiar() { 
        document.getElementById("FORM").reset();
      }

    const [aprobado, setAprobado] = useState(false);
    const [error, setError] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(service, template, form.current, user)
          .then((result) => {
              console.log(result.text);
              setAprobado(true);
              limpiar();
                setTimeout(function() {
                    setAprobado(false);
                },5000)
          }, (error) => {
              console.log(error.text);
              setError(true);
              limpiar();
                setTimeout(function() {
                    setError(false);
                },5000)
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
                            <div className="DESCRIPCION_DETALLE my-4 ml-4 md:my-8 md:ml-16 md:mr-8 mr-4">
                                <p className="text-sm md:text-base text-gray-600">
                                    Si tiene alguna necesidad por la que desea la oración o contar algun testimonio, por favor siéntase libre de comunicarse con nosotros a través de este portal de comunicación.
                                    <br/>
                                    <br/>
                                    Por favor se paciente nosotros te responderemos.
                                </p>
                            </div>
                            <br/>
                            <div className="FORM ml-16 mr-8">
                                <div className="TITULO_DEL_FORM">
                                    <h1 className="text-xl md:text-3xl font-bold uppercase">
                                        Envianos un mensaje
                                    </h1>
                                </div>
                                <div className="FORMULARIO">
                                    <form id="FORM" ref={form} onSubmit={sendEmail} className="flex flex-col my-8" >
                                        <div className="NOMBRE_EMAIL md:flex md:flex-row">
                                            <div className="NOMBRE md:basis-1/2">
                                                <label className="font-light mb-2" >Nombre</label>
                                                <div className="flex mr-4 mt-2">
                                                    <span className="inline-flex items-center px-3 border border-r-0 text-gray-500 bg-gray-50 border-gray-500 ">
                                                    <UserIcon className="h-8 w-8"/>
                                                    </span>
                                                    <input
                                                    type="text"
                                                    name="user_name"
                                                    id="company-website"
                                                    required
                                                    minLength="5"
                                                    className="focus:ring-black focus:border-black flex-1 block w-full sm:text-sm border-gray-500"
                                                    // placeholder="www.example.com"
                                                    />
                                                </div>
                                            </div>
                                            <div className="EMAIL  md:basis-1/2 mt-8 md:mt-0">
                                                <label className="font-light mb-2">Email</label>
                                                <div className="flex mt-2">
                                                    <span className="inline-flex items-center px-3 border border-r-0 text-gray-500 bg-gray-50 border-gray-500 ">
                                                    <AtSymbolIcon className="h-8 w-8"/>
                                                    </span>
                                                    <input
                                                    type="email"
                                                    name="user_email"
                                                    id="company-website"
                                                    required
                                                    className="focus:ring-black focus:border-black flex-1 block w-full sm:text-sm border-gray-500"
                                                    // placeholder="www.example.com"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="TEMA mt-8 w-full">
                                            <label className="font-light my-2 ">Tema</label>
                                            <br/>
                                            <select className="w-full mt-2" name="tipo" defaultValue="" required>
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
                                                    required
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
                                        {aprobado ?
                                            <div id="ALERTA" className="flex p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800" role="alert">
                                                <svg className="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
                                                <div>
                                                    <span className="font-medium">Enviado!</span> Mensaje enviado exitosamente.
                                                    Nos pondremos en contacto con usted lo mas pronto posible.
                                                </div>
                                            </div>
                                    :
                                        null
                                    }
                                    { error ? 
                                    <div id="ALERTA" className="flex p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
                                        <svg className="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
                                        <div>
                                            <span className="font-medium">No enviado!</span> Confirmar todos los campos esten correctamente llenos sino intentar mas tarde.
                                        </div>
                                    </div>
                                    :
                                    null
                                    }
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="CARD md:baseline-1/2 ">
                            <div className="m-8 md:ml-16 md:mt-8 border border-slate-300 sm:w-96 ">
                                <div className="m-8">
                                    <h1 className="text-xl md:text-2xl font-normal ">
                                        Informacion de Ubicacion
                                    </h1>
                                    <p className="text-base md:text-lg font-light my-4">
                                        Ondas Profeticas
                                    </p>
                                    <p className="text-sm md:text-base text-gray-500 ">
                                        Moca, Espaillat, Republica Dominicana.
                                    </p>
                                    <p className="text-sm md:text-base  text-gray-500 ">
                                        Telefono: 809-798-1578
                                    </p>
                                    <p className="text-xs md:text-base text-gray-500 ">
                                        E-mail: <br className="md:hidden "/>
                                        <a className="text-amber-400 " href="mailto:email@example.com">ondasprofeticas@
                                        gmail.com</a>
                                    </p>
                                    <p className="text-xs md:text-base text-gray-500 ">
                                        Website: 
                                            <Link href="/">
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