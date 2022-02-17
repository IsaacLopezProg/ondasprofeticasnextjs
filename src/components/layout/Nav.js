import React from 'react';

// EXTERNAL
import Image from 'next/image';
import Link from 'next/link';

// IMG
import logo from '../../../public/img/aaaa.png';

export default function Nav(){

    return(
        <>
        <div className="container-auto">
            <div className="grid grid-cols-2 border-b">
                    <div className="md:ml-20"> 
                        <a className="text-xs md:text-base text-slate-400 font-normal" href="mailto:ondasprofeticas@gmail.com">
                            <i className="fa fa-envelope-o text-amber-400 "></i>
                            &nbsp;ondasprofeticas@gmail.com 
                        </a> 
                        <span className="ml-10 text-xs md:text-base text-slate-400 font-normal"><i className="fa fa-phone text-amber-400"></i> &nbsp;809-798-1578 </span> 
                    </div>
                <div className="overflow">
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
                            <div className="cursor-pointer h-24 w-24">
                                <Image
                                    src={logo}
                                    alt="Picture of the author"
                                />
                            </div>
                        </Link>

                    </div>

                </div>
                <div className="basis-2/3 md:visible ">
                        <ul className="md:mr-24 ml-10 grow  text-sm font-light uppercase ">
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
                            <li className="navlink active:border-t-2 border-t-2 border-amber-400 active:text-amber-400 ">
                                <Link href="/">
                                    <a>Inicio</a>
                                </Link>
                            </li>
                        </ul>
                </div>
            </div>
                {/* Navbar */}
        </div>
        </>
    );
}