import React from 'react';

// IMG
import bg from '../../../public/img/bginicodonacion.jpg';
import divider from '../../../public/img/divideremprende.png';

// EXTERNAL
import Image from 'next/image';
import {BadgeCheckIcon, CheckIcon} from '@heroicons/react/outline';

// CSS
import styles from '../../../styles/Home.module.css';

export default function Donacion(){

    return(
        <>
        <div className={`${styles.altoemprende1} ${styles.altoemprende2} text-center relative max-w-full my-0 mx-auto`}>
            <Image src={bg} 
                    alt="foto"
                    layout='fill'
                    objectFit="cover"
                    objectPosition="center"
                    quality={60}
                    placeholder="blur"
                />

            <div className="PADRE absolute inset-y-8  w-full mx-auto my-auto">
                <div className="TITULO  text-center my-8 grid justify-items-center">
                    <h1 className="text-5xl font-bold mb-2 uppercase text-amber-400">Ofrendas y Donaciones</h1>
                        <Image src={divider} height={3} alt="divider" />
                    <p className="text-white text-sm font-light max-w-4xl mt-4 mx-8">El ministerio se sustenta a través de patrocinadores comprometidos de manera voluntarias a contribuir Semanal, Quincenal o Mensual con aportes económicos para el sustento de dicho Ministerio y cada una de sus Ramificaciones y ofrendas de personas que Dios mueve a sembrar una semilla de fé en nuestra tierra. </p>
                    </div>
                    <div className="w-full p-2 mx-auto max-w-sm bg-white my-4 hover:bg-amber-400">
                        <div className="p-4 border border-black hover:border-white  grid justify-items-center">
                                    <div className="text-left font-light ml-2">
                                        <h1 className="text-3xl mb-2 uppercase text-center">suscribirse</h1>
                                        <div className="CADR text-center">
                                            <h2 className="">
                                                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                                                    <input type="hidden" name="cmd" value="_s-xclick" />
                                                    <input type="hidden" name="hosted_button_id" value="R3ARS4QLVG262" />
                                                    <table>
                                                    <tr><td><input type="hidden" name="on0" value="Opciones de pago" /></td></tr><tr><td><select name="os0">
                                                        <option value="Opción 1">Opción 1 : $10.00 USD - semanal</option>
                                                        <option value="Opción 2">Opción 2 : $20.00 USD - semanal</option>
                                                        <option value="Opción 3">Opción 3 : $30.00 USD - semanal</option>
                                                        <option value="Opción 4">Opción 4 : $30.00 USD - mensual</option>
                                                        <option value="Opción 5">Opción 5 : $40.00 USD - mensual</option>
                                                        <option value="Opción 6">Opción 6 : $50.00 USD - mensual</option>
                                                        <option value="Opción 7">Opción 7 : $1.00 USD - semanal</option>
                                                    </select> </td></tr>
                                                    </table>
                                                    <input type="hidden" name="currency_code" value="USD" />
                                                    <h1 className="text-xl my-2">SUSCRIBIRSE</h1>
                                                    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_subscribeCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                                                    <img alt="" border="0" src="https://www.paypalobjects.com/es_XC/i/scr/pixel.gif" width="1" height="1" />
                                                </form>
                                            </h2>
                                            <h2 className="text-xl my-2">DONAR</h2>
                                            
                                            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                                                <input type="hidden" name="cmd" value="_s-xclick" />
                                                <input type="hidden" name="hosted_button_id" value="TWVKWG48WK26Y" />
                                                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                                                <img alt="" border="0" src="https://www.paypal.com/en_DO/i/scr/pixel.gif" width="1" height="1" />
                                            </form>
                                        </div>
                                    </div>
                            </div>
                    </div>
                    <div className="BTTOM mt-8 text-center grid justify-items-center mx-8">
                        <h1 className="text-2xl text-white">Nuestros patrocinadores reciben de nosotros:</h1>
                        <div className="inline-flex my-2 text-white">
                            <CheckIcon className="h-6 w-6 text-amber-400"/>
                            <p className="ml-2 ">Diversas capacitaciones para desarrollo Personal</p>
                        </div>
                        <div className="inline-flex my-2 text-white">
                            <CheckIcon className="h-6 w-6 text-amber-400"/>
                            <p className="ml-2 ">Seguimiento de sus planes ministeriales y empresariales</p>
                        </div>
                        <div className="inline-flex my-2 text-white">
                            <CheckIcon className="h-6 w-6 text-amber-400"/>
                            <p className="ml-2 ">Folletos, virtuales o Materiales de nuestras conferencias de Desarrollo</p>
                        </div>
                    </div>
            </div>
        </div>
        </>
    )
}