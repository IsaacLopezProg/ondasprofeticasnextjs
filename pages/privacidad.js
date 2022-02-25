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

const Privacidad = () =>{

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
                        Politicas de Privacidad
                    </h1>
                </div>
                <div className="CONTENIDO">
                <article className="mx-4 md:mx-16 my-8 text-gray-500 font-light md:text-base text-xs">
                    <div className="">
                    <div >
            <h3 className="permisotitulo">Responsable – ¿quién es el responsable del tratamiento de los datos?</h3>
                    
            <strong>Identidad:</strong> Ministerio Ondas Profeticas<br/>
            <strong>Domicilio social:</strong> Calle Rosario Abajo, Moca, Republica Dominicana<br/>
            <strong >Cedula:</strong> 054-0136934-2<br/>
            <strong>Teléfono:</strong>  809-798-1578<br/>
            <strong>Correo Electrónico:</strong> ondasprofeticas@gmail.com<br/>
            <strong>Contacto:</strong> Nathanael Veras<br/>
            <strong>Nombre del dominio:</strong> ondasprofeticas.com<br/>


            <h3 className="permisotitulo">Finalidades – ¿con qué finalidades tratamos tus datos?</h3>

            <p>En cumplimiento de lo dispuesto en el Reglamento Europeo 2016/679 General de Protección de Datos, te informamos de que trataremos los datos que nos facilitas para:</p>
            <ul>
                <li>Gestionar la contratación de servicios que realice a través de la Plataforma, así como la facturación y entrega correspondiente.</li>
                <li >Remitir periódicamente comunicaciones sobre servicios, eventos y noticias relacionadas con las actividades desarrolladas por Ministerio Ondas Profeticas, por cualquier medio (teléfono, correo postal o email), salvo que se indique lo contrario o el usuario se oponga o revoque su consentimiento.</li>
                <li>Remitir información comercial y / o promocional relacionada con el sector de servicios contratados y valor añadido para usuarios finales, salvo que se indique lo contrario o el usuario se oponga o revoque su consentimiento.</li>
                    <li>Dar cumplimiento a las obligaciones legalmente establecidas, así como verificar el cumplimiento de las obligaciones contractuales, incluía la prevención de fraude.</li>
                        <li>Cesión de datos a organismos y autoridades, siempre y cuando sean requeridos de conformidad con las disposiciones legales y reglamentarias.</li>
            </ul>



                    

            <h3 className="permisotitulo">Categorías de datos – ¿Qué datos tratamos?</h3>

            <p >Derivada de las finalidades antes mencionadas, en Ministerio Ondas Profeticas  gestionamos las siguientes categorías de datos:</p>
            <ul>
            <li>Datos identificativos</li>
            <li>Metadatos de comunicaciones electrónicas</li>
            <li >Datos de información comercial. En caso de que el usuario facilite datos de terceros, manifiesta contar con el consentimiento de estos y se compromete a trasladarle la información contenida en esta cláusula, eximiendo a Ministerio Ondas Profeticas de cualquier responsabilidad en este sentido.</li>
            <li >No obstante,  Ministerio Ondas Profeticas  podrá llevar a cabo las verificaciones para constatar este hecho, adoptando las medidas de diligencia debida que correspondan, conforme a la normativa de protección de datos.</li>
            </ul>





            <h3 className="permisotitulo">Legitimación – ¿cuál es la legitimación para el tratamiento de tus datos?</h3>

            <p >El tratamiento de datos cuyo fin es el envío de boletines periódicos (newslettering) sobre servicios, eventos y noticias relacionadas con nuestra actividad profesional se basa en el consentimiento del interesado, solicitado expresamente para llevar a cabo dichos tratamientos, de acuerdo con la normativa vigente.<br/>
            Además, la legitimación para el tratamiento de los datos relacionados con ofertas  o colaboraciones se basan en el consentimiento del usuario que remite sus datos, que puede retirar en cualquier momento, si bien ello puede afectar a la posible comunicación de forma fluida y obstrucción de procesos que desea realizar.<br/>
            Por último, los datos se podrán utilizar para dar cumplimiento a las obligaciones legales aplicables a Ministerio Ondas Profeticas
            </p>





            <h3 className="permisotitulo">Plazo de Conservación de los Datos – ¿Por cuánto tiempo conservaremos tus datos?</h3>

            <p >Ministerio Ondas Profeticas  conservará los datos personales de los usuarios únicamente durante el tiempo necesario para la realización de las finalidades para las que fueron recogidos, mientras no revoque los consentimientos otorgados. Posteriormente, en caso de ser necesario, mantendrá la información bloqueada durante los plazos legalmente establecidos.</p>

            <h3 className="permisotitulo">Destinatarios ¿A qué destinatarios se comunicarán tus datos?</h3>

            <p >Tus datos podrán ser accedidos por aquellos proveedores que prestan servicios a Ministerio Ondas Profeticas, tales como servicios de alojamiento, herramientas de marketing  y  sistemas  de contenido u otros profesionales, cuando dicha comunicación sea necesaria normativamente, o para la ejecución de los servicios contratados.<br/><br/>
            Ministerio Ondas Profeticas, ha suscrito los correspondientes contratos de encargo de tratamiento con cada uno de los proveedores que prestan servicios a Ministerio Ondas Profeticas, con el objetivo de garantizar que dichos proveedores tratarán tus datos de conformidad con lo establecido en la legislación vigente.<br/><br/>
            También podrán ser cedidos a las Fuerzas y Cuerpos de Seguridad del Estado en los casos que exista una obligación legal.<br/><br/>
            Bancos y entidades financieras, para el cobro de los servicios.<br/>
            Administraciones públicas con competencia en los sectores de actividad, cuando así lo establezca la normativa vigente.
            </p>

            <h3 className="permisotitulo">
            Seguridad de la Información – ¿Qué medidas de seguridad implantamos para cuidar sus datos?
            </h3>
            <p>
            Para proteger las diferentes tipologías de datos reflejados en esta política de privacidad llevará a cabo las medidas de seguridad técnicas necesarias para evitar su pérdida, manipulación, difusión o alteración.
            </p>
            <ul>
            <li >Encriptación de las comunicaciones entre el dispositivo del usuario y los servidores de Ministerio Ondas Profeticas </li>
            <li >Encriptación de la información en los propios servidores de Ministerio Ondas Profeticas</li>
            <li>Otras medidas que eviten el acceso a los datos del usuario por parte de terceros.</li>
            <li >En aquellos casos en los que Ministerio Ondas Profeticas  cuente con prestadores de servicio para el mantenimiento de la plataforma que se encuentren fuera de la Unión Europea, estas trasferencias internacionales se hayan regularizadas atendiendo al compromiso de Ministerio Ondas Profeticas  con la protección, integridad y seguridad de los datos personales de los usuarios.</li>
            </ul>            

            <h3 className="permisotitulo">Derechos – ¿Cuáles son tus derechos cuando nos facilitas tus datos y cómo puedes ejercerlos?</h3>
            <p >
            Tienes derecho a obtener confirmación sobre si en Ministerio Ondas Profeticas estamos tratando datos personales que te conciernan, o no.<br/>
            Asimismo, tienes derecho a acceder a tus datos personales, así como a solicitar la rectificación de los datos inexactos o, en su caso, solicitar su supresión cuando, entre otros motivos, los datos ya no sean necesarios para los fines que fueron recogidos.<br/><br/>
            En determinadas circunstancias, podrás solicitar la limitación del tratamiento de tus datos, en cuyo caso únicamente los conservaremos para el ejercicio o la defensa de reclamaciones.<br/>
            En determinadas circunstancias y por motivos relacionados con tu situación particular, podrás oponerte al tratamiento de tus datos. Ministerio Ondas Profeticas  dejará de tratar los datos, salvo por motivos legítimos imperiosos, o el ejercicio o la defensa de posibles reclamaciones.<br/><br/>
            Asimismo, puedes ejercer el derecho a la portabilidad de los datos, así como retirar los consentimientos facilitados en cualquier momento, sin que ello afecte a la licitud del tratamiento basado en el consentimiento previo a su retirada.<br/><br/>

            Si deseas hacer uso de cualquiera de tus derechos puede dirigirse a <a className="permisolink" href="mailto:ondasprofeticas@gmail.com" >ondasprofeticas@gmail.com</a>. <br/><br/>
            Por último, te informamos que puedes dirigirte ante la Agencia Española de Protección de Datos y demás organismos públicos competentes para cualquier reclamación derivada del tratamiento de tus datos personales.

            </p>


            <h3 className="permisotitulo">Modificación de la política de privacidad </h3>


            <p >
            Ministerio Ondas Profeticas podrá modificar la presente Política de Privacidad en cualquier momento, siendo publicadas las sucesivas versiones en el Sitio Web. En cualquier caso, Ministerio Ondas Profeticas comunicará con previo aviso las modificaciones de la presente política que afecten a los usuarios a fin de que puedan aceptar las mismas. <br/><br/>
            La presente Política de Privacidad se encuentra actualizada a fecha 27/12/2018 Ministerio Ondas Profeticas  (España). Reservados todos los derechos.
            <br/><br/>
            Si lo deseas también puedes consultar nuestra  <strong>
                    <Link href="/cookies">
                        <a className="permisolink">Política de Cookies</a>
                    </Link>
                </strong>

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

export default Privacidad;