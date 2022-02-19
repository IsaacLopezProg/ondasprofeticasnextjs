import React from 'react';

// IMG
import bgdonacion from '/public/img/bgdonacion.jpg';
import divider from '/public/img/divideremprende.png';
// import divider2 from '/public/img/dividerdonacion.png';
import paypal from '/public/img/paypal.png';
import cashapp from '/public/img/cashapp.png';
import western from '/public/img/western-union.png';
import popular from '/public/img/popular.ico';
import personal from '/public/img/contact.png'

// EXTERNAL
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// CSS
import styles from '/styles/Home.module.css';


export default function Ofrendas(){

    return(
        <>
        <div className={`${styles.altoemprende1} ${styles.altoemprende2} text-center relative max-w-full my-0 mx-auto`}>
            <Image src={bgdonacion} 
                alt="foto"
                layout='fill'
                objectFit="cover"
                objectPosition="center"
                placeholder="blur"
            />
            <div className="PADRE absolute inset-y-8  w-full mx-auto my-auto">
                <div className="flex flex-col">
                    <div className="TITULO  text-center my-8 grid justify-items-center">
                        <h1 className="text-5xl font-bold mb-2 uppercase">Ofrendas y Donaciones</h1>
                        <Image src={divider} height={3} alt="divider" />
                        <p className="font-medium mt-2">MATEO 10:41</p>
                        <p className="max-w-lg font-light text-sm">El que recibe a un profeta por cuanto es profeta, recompensa de profeta recibirá; y el que recibe a un justo por cuanto es justo, recompensa de justo recibirá.
                            Aqui estan las diferentes formas en la que te puedes contactar con nosotros</p>
                    </div>
                    <div className="CARDS">
                        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                            <SwiperSlide className="">
                                <div className="md:flex md:justify-between max-w-max">
                                    <div className="PAYPAL my-12 ml-12 grid justify-items-center bg-white hover:text-white hover:bg-black w-64 h-72 md:w-80 md:h-80  ">
                                        <div className="my-4 mx-4">
                                            <div className="border rounded-full p-8 border-slate-300 hover:border-black">
                                                <Image src={paypal} height={50} width={50} alt="paypal"/>
                                            </div>

                                        </div>
                                        <div className="w-52">
                                            <h1>PAYPAL</h1>
                                            <div className="mb-2">
                                                <Image src={divider} height={2} width={250} alt="divider" />
                                            </div>
                                            <div className="TEXT">
                                            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                                                <input type="hidden" name="cmd" value="_s-xclick" />
                                                <input type="hidden" name="hosted_button_id" value="TWVKWG48WK26Y" />
                                                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                                                <Image alt="paypal" src="https://www.paypal.com/en_DO/i/scr/pixel.gif" width={1} height={1} />
                                            </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="CASHAPP  my-12 ml-12 grid justify-items-center bg-black hover:bg-white w-64 h-72 md:w-80 md:h-80">
                                        <div className="my-4 mx-4">
                                                <div className="border rounded-full p-8  hover:border-slate-300">
                                                    <Image src={cashapp} height={50} width={50} alt="paypal"/>
                                                </div>
                                        </div>
                                        <div className="w-52 text-white hover:text-black">
                                            <h1>CASHAPP</h1>
                                            <div className="mb-2">
                                                <Image src={divider} height={2} width={250} alt="divider" />
                                            </div>
                                            <div className="TEXT text-sm text-gray-500 font-light">
                                                <p><span className="font-bold">Nombre: </span>Profeta Nathanel Veras </p>
                                                <p><span className="font-bold">Cuenta:</span> $OndasProfeticas </p>
                                                <p>El Extranjero </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="WESTERUNION  my-12 ml-12 grid justify-items-center bg-white hover:text-white hover:bg-black w-64 h-72 md:w-80 md:h-80">
                                    <div className="my-4 mx-4">
                                            <div className="border rounded-full p-8 border-slate-300 hover:border-black">
                                                <Image src={western} height={50} width={50} alt="paypal"/>
                                            </div>

                                        </div>
                                        <div className="w-52">
                                            <h1>WESTER UNION</h1>
                                            <div className="mb-2">
                                                <Image src={divider} height={2} width={250} alt="divider" />
                                            </div>
                                            <div className="TEXT text-sm text-gray-500 font-light">
                                                <p><span className="font-bold">Nombre: </span>Profeta Nathanel Veras </p>
                                                <p><span className="font-bold">Cedula: </span> 054-0136934-2  </p>
                                                <p>Republica Dominicana  </p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                </SwiperSlide>
                            <SwiperSlide>
                                <div className="md:flex md:justify-between max-w-max">
                                    <div className="PERSONAL  my-12 ml-12 grid justify-items-center bg-white w-64 h-72 md:w-80 md:h-80">
                                        <div className="my-4 mx-4">
                                                <div className="border rounded-full p-8  border-slate-300">
                                                    <Image src={personal} height={50} width={50} alt="paypal"/>
                                                </div>
                                        </div>
                                        <div className="w-52 text-black">
                                            <h1>PERSONAL</h1>
                                            <div className="mb-2">
                                                <Image src={divider} height={2} width={250} alt="divider" />
                                            </div>
                                            <div className="TEXT text-sm text-gray-500 font-light">
                                                <p><span className="font-bold">Nombre: </span> Nathanel Veras </p>
                                                <p><span className="font-bold">Telefono Movil:</span> 809-798-1578  </p>
                                                <p>Republica Dominicana </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="BANCOPOPULAR  my-12 ml-12 grid justify-items-center bg-white hover:text-white hover:bg-black w-64 h-72 md:w-80 md:h-80">
                                    <div className="my-4 mx-4">
                                            <div className="border rounded-full p-8 border-slate-300 hover:border-black">
                                                <Image src={popular} height={50} width={50} alt="paypal"/>
                                            </div>

                                        </div>
                                        <div className="w-52">
                                            <h1>BANCO POPULAR</h1>
                                            <div className="mb-2">
                                                <Image src={divider} height={2} width={250} alt="divider" />
                                            </div>
                                            <div className="TEXT text-sm text-gray-500 font-light">
                                                <p><span className="font-bold">Nombre: </span> Nathanel Veras Grullon  </p>
                                                <p><span className="font-bold">Cuenta: </span> 805446283   </p>
                                                <p>Republica Dominicana  </p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>

                </div>

            </div>

        </div>
        </>
    )
}