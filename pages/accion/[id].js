import React, {useState, useEffect} from 'react';

import { useRouter } from 'next/router';


export default function Detalle({posts}){
    // console.log(posts);

    const {descripcion, lugar, tema, video} = posts;
    
    // const router = useRouter();
    // console.log(router.query.id)
    // const params = router.query.id
    
    // const [contenido, setContenido] = useState([]);
    
    
    // useEffect( () => {

    //     const consultarAPI = async () => {
    //         const api = await fetch(`https://cdn.builder.io/api/v2/content/post?apiKey=fb0e5cc283ee41ed967bd97a41783fce&query.id=${params}`);
    //         const resultado = await api.json()
    //         setContenido(resultado.results);
    //         console.log(resultado.results);
    //         // guardarFrase(frase[0]);
    //       }
    //     consultarAPI();
    // }, [contenido])
    // // console.log(post)
    
    return (
        <>
        {/* {posts.map(post => (
             <div key={post.id} className="PADRE md:ml-36 p-8 mt-8 ">
             <div className="FECHA  absolute  w-16 md:w-24 h-16 md:h-24 text-sm md:text-base text-center mt-10 md:mt-24 -ml-6 md:-ml-12 z-10 bg-amber-400">
                 <span className=" text-xl md:text-4xl font-bold block text-center mt-2 md:py-2">{ format( new Date(post.createdDate), 'dd' )}</span>
                 <p>
                     { format( new Date(post.createdDate), 'MMM, yyyy' )} </p>
                     {/* { format( new Date(post.createdDate), 'MMM, yyyy', {locale: es} )} 
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
        ))}  */}
   
        <p>hola <br/> {tema}</p>
        <p>hola <br/> {descripcion}</p>
        <p>hola <br/> {lugar}</p>
        <p>hola <br/> {video}</p>
        </>
    )
}


 export async function getServerSideProps({ params }) {
    //  console.log(params);
     // const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);  const api = await fetch(`https://cdn.builder.io/api/v2/content/post?apiKey=fb0e5cc283ee41ed967bd97a41783fce&query.id=${params.id}`);
     const api = await fetch(`https://cdn.builder.io/api/v2/content/post?apiKey=fb0e5cc283ee41ed967bd97a41783fce&query.id=${params.id}`);
     const res = await api.json();
     const posts = res.results[0].data;
     return {
       props: {
           posts
       }
     }
   }

//   export async function getServerSideProps() {
//     // console.log(params);
//     // const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
//     // const api = await fetch(`https://cdn.builder.io/api/v2/content/post?apiKey=fb0e5cc283ee41ed967bd97a41783fce&query.id=${params.id}`);
//     // const api = await fetch(`https://cdn.builder.io/api/v2/content/post?apiKey=fb0e5cc283ee41ed967bd97a41783fce&query.id=${params}`);
//     // const post = await res.json();
//     const api = await fetch('https://cdn.builder.io/api/v2/content/post?apiKey=fb0e5cc283ee41ed967bd97a41783fce&limit=10');
//     const resultado = await api.json()
//     //         setContenido(resultado.results);
//     // console.log(resultado.results);
//     const posts = resultado.results
//     return {
//       props: {
//           posts
//       }
//     }
//   }

