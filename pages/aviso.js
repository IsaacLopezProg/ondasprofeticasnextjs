import React from 'react';

// HEAD
import Header from '../src/components/layout/Header';
import Nav from '../src/components/layout/Nav';
import Bienvenida from '../src/components/layout/Bienvenida';

// FOOTER
import Footer from '../src/components/layout/Footer';

// INTERNAL
import bg from '../public/img/bvcookies.jpg';

// EXTERNAL
import Link from 'next/link';

const Aviso = () =>{

    const bv = {
        src:bg,
        // layout:'fill', // fill or fixed
        texto1:'somos',
        texto2:' ministerio',
        texto3:'ondas',
        texto4:'profeticas',
        visible:'visible' //visible o invisible
    }

    return (
        <>
        <Header>
            <Nav/>
            <Bienvenida bv={bv} />
            <div className="flex flex-col w-full justify-center">
                <div className="TITULO  w-full border border-b border-gray-300">
                    <h1 className="text-3xl font-light text-center my-8">
                        Aviso Legal
                    </h1>
                </div>
                <div className="CONTENIDO">
                        <article className="mx-4 md:mx-16 my-8 text-gray-500 font-light md:text-base text-xs">
                                    <div className="">
                                    <div className="">



                                    <p >
                                    En este espacio, el USUARIO, podrá encontrar toda la información relativa a los términos y condiciones legales que definen las relaciones entre los usuarios y nosotros como responsables de esta web. Como usuario, es importante que conozcas estos términos antes de continuar tu navegación.
                                    Nathanel Veras.Como responsable de esta web, asume el compromiso de procesar la información de nuestros usuarios y clientes con plenas garantías y cumplir con los requisitos nacionales y europeos que regulan la recopilación y uso de los datos personales de nuestros usuarios.
                                    Esta web, por tanto, cumple rigurosamente con el RGPD (REGLAMENTO (UE) 2016/679 de protección de datos) y  la LSSI-CE la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la información y de comercio electrónico.

                                    </p>

                                    <h3 className="permisotitulo">CONDICIONES GENERALES DE USO</h3>

                                    <p >Las presentes Condiciones Generales regulan el uso (incluyendo el mero acceso) de las páginas de la web, integrantes del sitio web de  ondasprofeticas.com incluidos los contenidos y servicios puestos a disposición en ellas. Toda persona que acceda a la web, ondasprofeticas.com (“Usuario”) acepta someterse a las Condiciones Generales vigentes en cada momento del portal ondasprofeticas.com.</p>


                                    <h3 className="permisotitulo">DATOS PERSONALES QUE RECABAMOS Y CÓMO LO HACEMOS</h3>

                                    Leer 
                                    <Link href="/privacidad">
                                        <a className="permisolink">Política de Privacidad</a>
                                    </Link>

                                    <h3 className="permisotitulo">COMPROMISOS Y OBLIGACIONES DE LOS USUARIOS</h3>


                                    <p >
                                    El Usuario queda informado, y acepta, que el acceso a la presente web no supone, en modo alguno, el inicio de una relación comercial con ondasprofeticas.com. De esta forma, el usuario se compromete a utilizar el sitio Web, sus servicios y contenidos sin contravenir la legislación vigente, la buena fe y el orden público.<br/>
                                    Queda prohibido el uso de la web, con fines ilícitos o lesivos, o que, de cualquier forma, puedan causar perjuicio o impedir el normal funcionamiento del sitio web. Respecto de los contenidos de esta web, se prohíbe:Su reproducción, distribución o modificación, total o parcial, a menos que se cuente con la autorización de sus legítimos titulares;Cualquier vulneración de los derechos del prestador o de los legítimos titulares;Su utilización para fines comerciales o publicitarios.<br/>

                                    <br/>
                                    En la utilización de la web, ondasprofeticas.com, el Usuario se compromete a no llevar a cabo ninguna conducta que pudiera dañar la imagen, los intereses y los derechos de ondasprofeticas.com o de terceros o que pudiera dañar, inutilizar o sobrecargar el portal (indicar dominio)  o que impidiera, de cualquier forma, la normal utilización de la web.
                                    No obstante, el Usuario debe ser consciente de que las medidas de seguridad de los sistemas informáticos en Internet no son enteramente fiables y que, por tanto ondasprofeticas.com  no puede garantizar la inexistencia de virus u otros elementos que puedan producir alteraciones en los sistemas informáticos (software y hardware) del Usuario o en sus documentos electrónicos y ficheros contenidos en los mismos.

                                    </p>
                                            
                                    <h3 className="permisotitulo">MEDIDAS DE SEGURIDAD</h3>
                                    <p >
                                    Los datos personales comunicados por el usuario a ondasprofeticas.com pueden ser almacenados en bases de datos automatizadas o no, cuya titularidad corresponde en exclusiva a ondasprofeticas.com, asumiendo ésta todas las medidas de índole técnica, organizativa y de seguridad que garantizan la confidencialidad, integridad y calidad de la información contenida en las mismas de acuerdo con lo establecido en la normativa vigente en protección de datos.<br/>
                                    La comunicación entre los usuarios y ondasprofeticas.com utiliza un canal seguro, y los  datos transmitidos son cifrados gracias a protocolos a https, por tanto, garantizamos las mejores condiciones de seguridad para que la confidencialidad de los usuarios esté garantizada.

                                    </p>

                                    <h3 className="permisotitulo">RECLAMACIONES</h3>
                                    <p >ondasprofeticas.com informa que existen hojas de reclamación a disposición de usuarios y clientes.
                                    El Usuario podrá realizar reclamaciones solicitando su hoja de reclamación o remitiendo un correo electrónico a <a className="permisolink" href="mailto:ondasprofeticas@gmail.com" >ondasprofeticas@gmail.com</a> indicando su nombre y apellidos, el servicio y/o producto adquirido y exponiendo los motivos de su reclamación.<br/><br/>
                                    El usuario/comprador podrá notificarnos la reclamación, bien a través de correo electrónico a: <a className="permisolink" href="mailto:ondasprofeticas@gmail.com" >ondasprofeticas@gmail.com</a>, si lo desea adjuntando el siguiente formulario de reclamación:
                                    El servicio/producto:
                                    Adquirido el día:
                                    Nombre del usuario:
                                    Domicilio del usuario:
                                    Firma del usuario (solo si se presenta en papel):
                                    Fecha:
                                    Motivo de la reclamación:
                                    </p>

                                    <h3 className="permisotitulo">PLATAFORMA DE RESOLUCIÓN DE CONFLICTOS</h3>




                                    <p>Por si puede ser de tu interés, para someter tus reclamaciones puedes utilizar también la plataforma de resolución de litigios que facilita la Comisión Europea y que se encuentra disponible en el siguiente enlace: <a className="permisolink" href="http://ec.europa.eu/consumers/odr/" rel="no-follow">http://ec.europa.eu/consumers/odr/</a></p>





                                    <h3 className="permisotitulo">DERECHOS DE PROPIEDAD INTELECTUAL E INDUSTRIAL</h3>

                                    <p >En virtud de lo dispuesto en los artículos 8 y 32.1, párrafo segundo, de la Ley de Propiedad Intelectual, quedan expresamente prohibidas la reproducción, la distribución y la comunicación pública, incluida su modalidad de puesta a disposición, de la totalidad o parte de los contenidos de esta página web, con fines comerciales, en cualquier soporte y por cualquier medio técnico, sin la autorización de ondasprofeticas.com. El usuario se compromete a respetar los derechos de Propiedad Intelectual e Industrial titularidad de ondasprofeticas.com.<br/>
                                    El usuario conoce y acepta que la totalidad del sitio web, conteniendo sin carácter exhaustivo el texto, software, contenidos (incluyendo estructura, selección, ordenación y presentación de los mismos) podcast, fotografías, material audiovisual y gráficos, está protegida por marcas, derechos de autor y otros derechos legítimos, de acuerdo con los tratados internacionales en los que España es parte y otros derechos de propiedad y leyes de España.
                                    En el caso de que un usuario o un tercero consideren que se ha producido una violación de sus legítimos derechos de propiedad intelectual por la introducción de un determinado contenido en la web,  deberá notificar dicha circunstancia a  ondasprofeticas.com  indicando:<br/>

                                    </p><ul>
                                    <li>
                                    Datos personales del interesado titular de los derechos presuntamente infringidos, o indicar la representación con la que actúa en caso de que la reclamación la presente un tercero distinto del interesado.
                                    </li>

                                    <li>
                                    Señalar los contenidos protegidos por los derechos de propiedad intelectual y su ubicación en la web, la acreditación de los derechos de propiedad intelectual señalados y declaración expresa en la que el interesado se responsabiliza de la veracidad de las informaciones facilitadas en la notificación
                                    </li>
                                    </ul>

                                    <p></p>

                                    <h3 className="permisotitulo">ENLACES EXTERNOS</h3>

                                    <p >Las páginas de la web ondasprofeticas.com, podría proporcionar enlaces a otros sitios web propios y contenidos que son propiedad de terceros.
                                    El único objeto de los enlaces es proporcionar al Usuario la posibilidad de acceder a dichos enlaces.
                                    ondasprofeticas.com  no se responsabiliza en ningún caso de los resultados que puedan derivarse al Usuario por acceso a dichos enlaces.<br/>
                                    Asimismo, el usuario encontrará dentro de este sitio, páginas, promociones, programas de afiliados que acceden a los hábitos de navegación de los usuarios para establecer perfiles. Esta información siempre es anónima y no se identifica al usuario.<br/><br/>
                                    La Información que se proporcione en estos Sitios patrocinado o enlaces de afiliados está sujeta a las políticas de privacidad que se utilicen en dichos Sitios y no estará sujeta a esta política de privacidad. Por lo que recomendamos ampliamente a los Usuarios a revisar detalladamente las políticas de privacidad de los enlaces de afiliado.<br/>
                                    El Usuario que se proponga establecer cualquier dispositivo técnico de enlace desde su sitio web al portal ondasprofeticas.com deberá obtener la autorización previa y escrita de ondasprofeticas.com El establecimiento del enlace no implica en ningún caso la existencia de relaciones entre ondasprofeticas.com y el propietario del sitio en el que se establezca el enlace, ni la aceptación o aprobación por parte de  ondasprofeticas.com de sus contenidos o servicios
                                    </p>

                                    <h3 className="permisotitulo">POLÍTICA DE COMENTARIOS</h3>
                                    <p>En nuestra web y se permiten realizar comentarios para enriquecer los contenidos y realizar consultas.
                                    No se admitirán comentarios que no estén relacionados con la temática de esta web, que incluyan difamaciones, agravios, insultos, ataques personales o faltas de respeto en general hacia el autor o hacia otros miembros.
                                    También serán suprimidos los comentarios que contengan información que sea obviamente engañosa o falsa, así como los comentarios que contengan información personal, como, por ejemplo, domicilios privado o teléfonos y que vulneren nuestra política de protección de datos.<br/>
                                    Se desestimará, igualmente, aquellos comentarios creados sólo con fines promocionales de una web, persona o colectivo y todo lo que pueda ser considerado spam en general.<br/>
                                    No se permiten comentarios anónimos, así como aquellos realizados por una misma persona con distintos apodos. No se considerarán tampoco aquellos comentarios que intenten forzar un debate o una toma de postura por otro usuario.
                                    </p>


                                    <h3 className="permisotitulo">EXCLUSIÓN DE GARANTÍAS Y  RESPONSABILIDAD</h3>




                                    <p>El Prestador no otorga ninguna garantía ni se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran traer causa de:


                                    </p><ul>
                                    <li>
                                    La falta de disponibilidad, mantenimiento y efectivo funcionamiento de la web, o de sus servicios y contenidos;
                                    </li>
                                    <li>
                                    La existencia de virus, programas maliciosos o lesivos en los contenidos;
                                    </li>
                                    <li>
                                    El uso ilícito, negligente, fraudulento o contrario a este Aviso Legal;
                                    </li>
                                    <li>
                                    La falta de licitud, calidad, fiabilidad, utilidad y disponibilidad de los servicios prestados por terceros y puestos a disposición de los usuarios en el sitio web.
                                    </li>
                                    <li>
                                    El prestador no se hace responsable bajo ningún concepto de los daños que pudieran dimanar del uso ilegal o indebido de la presente página web.
                                    </li>
                                    </ul>
                                    <p></p>




                                    <h3 className="permisotitulo">LEY APLICABLE Y JURISDICCIÓN</h3>
                                    <p >Con carácter general las relaciones entre ondasprofeticas.com con los Usuarios de sus servicios telemáticos, presentes en esta web se encuentran sometidas a la legislación y jurisdicción españolas y a los tribunales.</p>


                                    <h3 className="permisotitulo">CONTACTO</h3>
                                    <p >En caso de que cualquier Usuario tuviese alguna duda acerca de estas Condiciones legales o cualquier comentario sobre el portal ondasprofeticas.com, por favor diríjase a <a className="permisolink" href="mailto:ondasprofeticas@gmail.com" >ondasprofeticas@gmail.com</a></p>
                                    <p >
                                    De parte del equipo que formamos Nathanel Veras te agradecemos el tiempo dedicado en leer este Aviso Legal
                                    </p>



                        </div>
                        </div>
                    </article>
                </div>
            </div>
            <Footer/>
            
        </Header>
        </>
    )

}

export default Aviso;