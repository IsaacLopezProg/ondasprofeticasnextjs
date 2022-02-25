import React from 'react';

// EXTERNAL
import Image from 'next/image';
import Link from 'next/link';
import { Disclosure } from '@headlessui/react'
import { MenuIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';


// IMG
import logo from '/public/img/logo.png';

export default function Nav(){

    const activo = useRouter();
    // console.log(activo.pathname === '/');
    const pathname = activo.pathname;


    return(
        <>
        
        
        <div className="container-auto">
            <div className="flex flex-row border-b">
                    <div className="md:ml-20 basis-2/3 text-center md:text-left"> 
                        <a className="text-xs md:text-base text-slate-400 font-light" href="mailto:ondasprofeticas@gmail.com">
                        <i className="fa fa-envelope-o text-amber-400"></i>
                            &nbsp;ondasprofeticas@gmail.com 
                        </a>
                        <br className="md:hidden"/> 
                        <span className="text-xs md:ml-10 md:text-base text-slate-400 font-light"><i className="fa fa-phone text-amber-400"></i> &nbsp;809-798-1578 </span> 
                    </div>
                    <div className="overflow basis-1/4">
                        <ul className="float-right md:mr-24">
                            <li className=" px-2 border-l hover:opacity-50 inline float-right text-red-600">
                                <Link href="https://www.youtube.com/channel/UCTvx29fRpv9vWNUiRlHYjXQ">
                                    <a target="_blank" rel="noreferrer"><i className="fa fa-youtube-play"></i></a>
                                </Link>
                            </li>
                            <li className=" px-2 border-l hover:opacity-50 inline float-right text-purple-600">
                                <Link href="https://instagram.com/profeta_nathanael.v.g">
                                    <a target="_blank" rel="noreferrer"><i className="fa fa-instagram"></i></a>
                                </Link>
                            </li>
                            <li className=" px-2 border-x hover:opacity-50  inline float-right text-blue-800">
                                <Link href="https://www.facebook.com/Profeta-Nathanael-Veras-G-106847647624852/">
                                    <a target="_blank" rel="noreferrer" ><i className="fa fa-facebook"></i></a>
                                </Link>
                            </li>
                        </ul>
                </div>
            </div> 
            {/* top mail & phone & redes */}



            <div className="bg-white mt-0 items-center w-full sm:h-52 md:h-36 shadow-lg border  overflow-hidden sticky top-0 flex flex-row" >
                <div className="basis-1/3"> 
                    <div className="md:ml-24  sm:ml-3  ml-4 ">
                        <Link href="/" passHref >
                            <div className="cursor-pointer  md:h-24 md:w-24">
                                <Image
                                    height={140}
                                    width={140}
                                    src={logo}
                                    alt="Picture of the author"
                                />
                            </div>
                        </Link>

                    </div>

                </div>
                <div className="hidden">
                <Disclosure>
                    <Disclosure.Button className="py-2 max-w-max text-center">
                        <MenuIcon className="h-5 w-5 text-amber-400"/>
                    </Disclosure.Button>
                    <Disclosure.Panel className="text-gray-500">
                        <ul className="md:mr-24 ml-10 grow  text-xs font-light uppercase ">
                            <li className="navlink">
                                <Link href="/iglesia">
                                    <a>Iglesia</a>
                                </Link>
                            </li>
                            <li className="navlink ">
                                <Link href="/accion">
                                    <a>Accion Profetica</a>
                                </Link>
                            </li>
                            {/* <li className="navlink "><a href="">Ebenezer</a></li> */}
                            <li className="navlink ">
                                <Link href="/emprende">
                                    <a>Emprende</a>
                                </Link>
                            </li>
                            <li className="navlink ">
                                <Link href="/intersecion">
                                    <a >Intercesion Profetica</a>
                                </Link>
                            </li>
                            
                            {activo.pathname === '/'?
                            <li className="navlink  ">
                                <Link href="/">
                                    <a>Inicio</a>
                                </Link>
                            </li>
                            :
                            <li className="navlink ">
                                <Link href="/">
                                    <a>Inicio</a>
                                </Link>
                            </li>
                            
                            }
                        </ul>
                    </Disclosure.Panel>
                </Disclosure>
                </div>
                <div className="md:flex md:basis-2/3 ">
                        <ul className="md:mr-24 md:ml-10 grow text-xs md:text-sm font-light uppercase ml-2">
                            <li className="navlink">
                                <Link href="/iglesia">
                                {pathname === '/iglesia' ? 
                                    <a className="activo">iglesia</a>
                                    :
                                    <a>iglesia</a>
                                }
                                </Link>
                            </li>
                            <li className="navlink ">
                                <Link href="/accion">
                                {pathname === '/accion' ? 
                                    <a className="activo">accion profetica</a>
                                    :
                                    <a>accion profetica</a>
                                }
                                </Link>
                            </li>
                            {/* <li className="navlink "><a href="">Ebenezer</a></li> */}
                            <li className="navlink ">
                                <Link href="/emprende">
                                {pathname === '/emprende' ? 
                                    <a className="activo">emprende</a>
                                    :
                                    <a>emprende</a>
                                }
                                </Link>
                            </li>
                            <li className="navlink ">
                                <Link href="/intersecion">
                                {pathname === '/intersecion' ? 
                                    <a className="activo">Intercesion Profetica</a>
                                    :
                                    <a>Intercesion Profetica</a>
                                }
                                </Link>
                            </li>
                            <li className="navlink  ">
                                <Link href="/">
                                    {pathname === '/' ? 
                                    <a className="activo">Inicio</a>
                                    :
                                    <a>Inicio</a>
                                    }
                                </Link>
                            </li>
                        </ul>
                </div>
            </div>
                {/* Navbar */}
                <style jsx>{`
                        .hello {
                            font-size: 8px ;
                        }
                    `}
                </style>
        </div>
        </>


        
    );
}