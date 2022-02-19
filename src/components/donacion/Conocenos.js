import React,{useState,useEffect} from 'react';

// IMG
import divider from '/public/img/divideriglesia2.png';
import divider2 from '/public/img/divideraccion.png';

// import accionp from '/public/img/accionp.jpg';
// import accionp2 from '/public/img/accionp2.jpg';
// import accionp3 from '/public/img/accionp3.jpg';
// import accionp4 from '/public/img/accionp4.jpg';

// EXTERNAL
import Image from 'next/image';
// import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { format } from 'date-fns';
// import { es } from 'date-fns/locale';


// import { builder } from '@builder.io/sdk';
// builder.init('fb0e5cc283ee41ed967bd97a41783fce');

export default function Conocenos(){
    
    // const getPost = async () => {
        
        //     const api = await builder.get('post').promise().then(content => {
            //         const result = content;
            //         setContenido(result);
            //     });
            // }
        
        // useEffect( () => {
            //     getPost();
            // }, [])
            
            // como usar builder en la consola, solo hace
            // falta un getAll que imprima todos los resultados
            // console.log(contenido);
            
    const [contenido, setContenido] = useState([]);

    const consultarAPI = async () => {
        const api = await fetch('https://cdn.builder.io/api/v2/content/post?apiKey=fb0e5cc283ee41ed967bd97a41783fce&limit=10');
        const resultado = await api.json()
        setContenido(resultado.results);
        console.log(resultado.results);
        // guardarFrase(frase[0]);
      }

    useEffect( () => {

        if(contenido.length !== 0){
            consultarAPI();
        }
    }, [contenido])


    return(
        <>
        <div className="CONTAIN">
                <div className="flex flex-col mx-auto ">
                    <div className="TITULO basis-full text-center my-8">
                        <h1 className="text-4xl uppercase font-bold mt-8">
                            Conocenos
                        </h1>
                        <Image src={divider} alt='divider'/>
                    </div>
                    <div className="CONTENIDO w-full" >
                    {contenido.map(post =>(

                        <div key={post.id} className="PADRE md:ml-36 p-8 mt-8 ">
                            <div className="FECHA  absolute  w-16 md:w-24 h-16 md:h-24 text-sm md:text-base text-center mt-10 md:mt-24 -ml-6 md:-ml-12 z-10 bg-amber-400">
                                <span className=" text-xl md:text-4xl font-bold block text-center mt-2 md:py-2">{ format( new Date(post.createdDate), 'dd' )}</span>
                                <p>
                                    { format( new Date(post.createdDate), 'MMM, yyyy' )} </p>
                                    {/* { format( new Date(post.createdDate), 'MMM, yyyy', {locale: es} )} */}
                                <p>
                                </p>
                            </div>
                            <div className="VIDEO mb-8 hidden md:flex">
                                <iframe width="560" height="315" src={post.data.video} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                            <div className="VIDEO md:hidden mb-12">
                                <iframe width="290" height="150" src={post.data.video} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                            <div className="TEMA ">
                                <h1 className="uppercase font-light text-4xl text-center md:text-left -mb-2">{post.data.tema}</h1>
                                <Image src={divider2} alt='divider2'/>
                                <p className="font-light max-w-4xl text-gray-500 mt-4">{post.data.descripcion}</p>
                                <button className="divide-y-4 uppercase font-medium mt-8 border-2 border-amber-400 py-2 px-4 rounded hover:bg-amber-400">ver mas</button>
                            </div>
                            <div className="w-full bg-gray-500 mt-8" style={{height:'2px'}}></div>

                        </div>

        ))}
                    </div>
                </div>
            </div>
        </>
    )
}