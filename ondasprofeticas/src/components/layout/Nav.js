import React from 'react';
import Image from 'next/image';
import { Disclosure, Menu, Transition } from '@headlessui/react'

// IMG
import logo from '../../../public/img/aaaa.png';

export default function Nav(){

    return(
        <>
        <div className="container-auto">
            <div className="grid grid-cols-2 border-b">
                    <div class="md:ml-20"> 
                        <a className="text-sm text-slate-400 font-normal" href="mailto:ondasprofeticas@gmail.com">
                            <i className="fa fa-envelope-o text-amber-400 "></i>
                            &nbsp;ondasprofeticas@gmail.com 
                        </a> 
                        <span className="ml-10 text-sm text-slate-400 font-normal"><i className="fa fa-phone text-amber-400"></i> &nbsp;809-798-1578 </span> 
                    </div>
                <div className="overflow">
                        <ul className="mr-24">
                            <li className=" px-2 border-l hover:opacity-50 inline float-right text-red-600"><a target="_blank" href="https://www.youtube.com/channel/UCTvx29fRpv9vWNUiRlHYjXQ"><i class="fa fa-youtube-play"></i></a></li>
                            <li className=" px-2 border-l hover:opacity-50 inline float-right text-purple-600"><a target="_blank" href="https://instagram.com/profeta_nathanael.v.g/"><i class="fa fa-instagram"></i></a></li>
                            <li className=" px-2 border-x hover:opacity-50  inline float-right text-blue-800"><a target="_blank" href="https://www.facebook.com/Profeta-Nathanael-Veras-G-106847647624852/"><i class="fa fa-facebook"></i></a></li>
                        </ul>
                </div>
            </div> 
            {/* top mail & phone & redes */}



            <div className="bg-white mt-0 w-full sm:h-52 md:h-36 shadow-lg border  overflow-hidden sticky top-0 flex flex-row" >
                <div className="basis-1/3 "> 
                    <div className="md:ml-24 md:mt-6 sm:mt-14 ">
                    <Image
                        src={logo}
                        height={90}
                        width={90}
                        alt="Picture of the author"
                    />

                    </div>

                </div>
                <div className="basis-2/3 md:visible ">
                        <ul className="mr-24 grow md:mt-10 text-sm font-light uppercase ">
                            <li className="pt-2 px-2 ml-2 opacity-60 hover:text-amber-400  md:inline md:float-right "><a target="_blank" href="">Iglesia</a></li>
                            <li className="pt-2 px-2 ml-2 opacity-60 hover:text-amber-400  md:inline md:float-right "><a target="_blank" href="">Accion Profetica</a></li>
                            <li className="pt-2 px-2 ml-2 opacity-60 hover:text-amber-400  md:inline md:float-right "><a target="_blank" href="">Ebenezer</a></li>
                            <li className="pt-2 px-2 ml-2 opacity-60 hover:text-amber-400  md:inline md:float-right "><a target="_blank" href="">Ebenezer</a></li>
                            <li className="pt-2 px-2 ml-2 opacity-60 hover:text-amber-400  md:inline md:float-right "><a target="_blank" href="">Emprende</a></li>
                            <li className="pt-2 px-2 ml-2 opacity-60 hover:text-amber-400  md:inline md:float-right "><a target="_blank" href="">Intercesion Profetica</a></li>
                            <li className="pt-2 px-2 ml-2 opacity-60  hover:text-amber-400 md:inline md:float-right active:border-t-2 border-t-2 border-amber-400 active:text-amber-400 "><a target="_blank" href="">Inicio</a></li>
                        </ul>
                </div>
            </div>
                {/* Navbar */}
        </div>
        </>
    );
}