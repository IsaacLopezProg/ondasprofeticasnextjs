import React, {useState, useEffect} from 'react';

// IMG
import divider from '../../public/img/divideriglesia2.png';
import divider2 from '../../public/img/dividerid.png';
import bg from '../../public/img/bvaccion.jpg'

// EXTERNAL
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// // CSS
// import styles from '../../../styles/Home.module.css';

// HEAD
import Header from '../../src/components/layout/Header'
import Nav from '../../src/components/layout/Nav';

// FOOTER
import Footer from '../../src/components/layout/Footer';


// INTERNAL
import Bienvenida from '../../src/components/layout/Bienvenida';



export default function Detalle({posts}){

    const bv = {
        src:bg,
        layout:'fill', // fill or fixed
        texto1:'somos',
        texto2:' accion',
        texto3:'Y queremos acc',
        texto4:'ionar por ti',
        visible:'visible' //visible o invisible
    }

    const {descripcion, lugar, tema, fecha,
            } = posts;

    // const facebook = null;

        const [video, editVideo] = useState('');

        const [facebook, editFacebook] = useState({
            nombre:''
        });
        const [instagram, editInstagram] = useState({
            instagram:''
        });

        const [foto1, editFoto1] = useState('');
        const [foto2, editFoto2] = useState('');
        const [foto3, editFoto3] = useState('');
        const [foto4, editFoto4] = useState('');
        const [foto5, editFoto5] = useState('');

        useEffect(() => {
            if(posts.video){
                editVideo(posts.video);
            }
        },[posts.video])

        useEffect(()=>{
            if(posts.facebook){
                editFacebook(posts.facebook);
            }
            else{
                editFacebook({
                    facebook:''
                })
            }

            if(posts.instagram){
                editInstagram(posts.instagram);
            }
            else{
                editInstagram({
                    instagram:''
                })
            }
            if(posts.foto1){
                editFoto1(posts.foto1);
            }
            if(posts.foto2){
                editFoto2(posts.foto2);
            }
            if(posts.foto3){
                editFoto3(posts.foto3)
            }
            if(posts.foto4){
                editFoto4(posts.foto4)
            }
            if(posts.foto5){
                editFoto5(posts.foto5);
            }

        },[posts.facebook, posts.instagram, posts.foto1, 
            posts.foto2, posts.foto3,posts.foto4,posts.foto5]);


    
    return (
        <>
         <Header>
            <Head>
                <title>ACCION | Ondas Profeticas</title>
            </Head>
            <Nav/>
            <Bienvenida  bv={bv} />
            <div className="CONTAIN">
                <div className="TITULO py-4  border-b border-slate-300">
                    <h1 className="text-3xl font-light ml-16">
                        Detalles de la Mision
                    </h1>
                </div>
                <div className="md:flex md:flex-row mt-8">
                    <div className="TITULO basis-full text-center my-8">
                        <h1 className="text-5xl uppercase font-semibold mt-8">
                            {tema}
                        </h1>
                        <Image src={divider}  alt='divider'/>
                        <p className="text-gray-500 my-4 font-light">Accion Profetica estuvo en {lugar} el <span className="uppercase">{ format( new Date(fecha), 'dd MMMM', {locale:es})}</span> del { format( new Date(fecha), 'yyyy')}</p>
                        <div className="ICONOS">
                            {facebook.length > 0 ? 
                            <Link href={facebook}>
                                <a target="_blank">
                                    <i className="fa fa-facebook text-black border-2 rounded-full p-4 hover:bg-black hover:text-white "></i>
                                </a>
                            </Link> :
                            null
                            }
                            {instagram.length > 0 ? 
                            <Link href={instagram}>
                                <a target="_blank">
                                    <i className="fa fa-instagram text-black border-2 rounded-full p-4 hover:bg-black hover:text-white mr-2"></i>
                                </a>
                            </Link> :
                            null
                            }
                            {/* {youtube ? 
                            <Link href={youtube}>
                                <a target="_blank">
                                    <i className="fa fa-youtube-play text-black border-2 rounded-full p-4 hover:bg-black hover:text-white mr-2"></i>
                                </a>
                            </Link> :
                            null
                            } */}
                        </div>
                    </div>
                </div>
                <div className="max-w-6xl md:flex md:flex-row">
                    <div className="md:basis-1/2">
                            {video.length >0 ?
                                <div className="VIDEO mb-12 md:ml-36 ml-4">
                                    <iframe className="hidden md:flex" height={315} width={560} src={video} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    <iframe className="md:hidden" height={315} width={300} src={video} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </div>
                                :
                                null
                            }
                    </div>
                    <div className="md:basis-1/2">
                        <div className="DESCRIPCION ml-8">
                            <p className="text-sm text-gray-500">{descripcion}</p>
                        </div>
                    </div>
                </div>
                <div className="FOTOS max-w-5xl">
                    <div className="TEXT ml-4 md:ml-36">
                            <h1 className="text-2xl uppercase ">Fotos</h1>
                            <Image src={divider2}  alt='divider2'/>
                    </div>
                    <div className="FOTOS md:ml-44 ml-4  my-8">
                    <Swiper pagination={{type: "fraction",}} loop={true} navigation={true} modules={[Pagination, Navigation]} className="mySwiper">
                        {foto1
                            ?
                                <SwiperSlide className="IGLESIA bg-black w-full">
                                    <div className="hidden md:flex relative" style={{width:'600px',height:'500px'}}>
                                        <Image src={foto1} 
                                            // width={500} 
                                            // height={300} 
                                            alt='foto1' 
                                            quality={100}
                                            layout='fill'
                                            objectFit="cover"
                                            objectPosition="center"
                                        />
                                    </div>
                                    <div className="md:hidden " style={{width:'300px',height:'200px'}}>
                                        <Image src={foto1} 
                                            width={300} 
                                            height={200} 
                                            alt='foto1' 
                                            quality={100}
                                            layout='fixed'
                                            objectFit="cover"
                                            objectPosition="center"
                                        />
                                    </div>
                                </SwiperSlide>
                            :
                            null
                        }
                        {foto2
                            ?
                                <SwiperSlide className="IGLESIA bg-black w-full">
                                    <div className="hidden md:flex relative" style={{width:'600px',height:'500px'}}>
                                        <Image src={foto2} 
                                            // width={500} 
                                            // height={500} 
                                            alt='foto1' 
                                            quality={100}
                                            layout='fill'
                                            objectFit="cover"
                                            objectPosition="center"
                                        />
                                    </div>
                                    <div className="md:hidden " style={{width:'300px',height:'200px'}}>
                                        <Image src={foto2} 
                                            width={300} 
                                            height={200} 
                                            alt='foto1' 
                                            quality={100}
                                            layout='fixed'
                                            objectFit="cover"
                                            objectPosition="center"
                                        />
                                    </div>
                                </SwiperSlide>
                            :
                            null
                        }{foto3
                            ?
                                <SwiperSlide className="IGLESIA bg-black w-full">
                                    <div className="hidden md:flex relative" style={{width:'600px',height:'500px'}}>
                                        <Image src={foto3} 
                                            // width={500} 
                                            // height={500} 
                                            alt='foto1' 
                                            quality={100}
                                            layout='fill'
                                            objectFit="cover"
                                            objectPosition="center"
                                        />
                                    </div>
                                    <div className="md:hidden " style={{width:'300px',height:'200px'}}>
                                        <Image src={foto3} 
                                            width={300} 
                                            height={200} 
                                            alt='foto1' 
                                            quality={100}
                                            layout='fixed'
                                            objectFit="cover"
                                            objectPosition="center"
                                        />
                                    </div>
                                </SwiperSlide>
                            :
                            null
                        }{foto4
                            ?
                                <SwiperSlide className="IGLESIA bg-black w-full">
                                    <div className="hidden md:flex relative" style={{width:'600px',height:'500px'}}>
                                        <Image src={foto4} 
                                            width={500} 
                                            height={500} 
                                            alt='foto1' 
                                            quality={100}
                                            // layout='fill'
                                            objectFit="cover"
                                            objectPosition="center"
                                        />
                                    </div>
                                    <div className="md:hidden " style={{width:'300px',height:'200px'}}>
                                        <Image src={foto4} 
                                            width={300} 
                                            height={200} 
                                            alt='foto1' 
                                            quality={100}
                                            layout='fixed'
                                            objectFit="cover"
                                            objectPosition="center"
                                        />
                                    </div>
                                </SwiperSlide>
                            :
                            null
                        }{foto5
                            ?
                                <SwiperSlide className="IGLESIA bg-black w-full">
                                    <div className="hidden md:flex relative" style={{width:'600px',height:'500px'}}>
                                        <Image src={foto5} 
                                            width={500} 
                                            height={500} 
                                            alt='foto1' 
                                            quality={100}
                                            // layout='fill'
                                            objectFit="cover"
                                            objectPosition="center"
                                        />
                                    </div>
                                    <div className="md:hidden " style={{width:'300px',height:'200px'}}>
                                        <Image src={foto5} 
                                            width={300} 
                                            height={200} 
                                            alt='foto1' 
                                            quality={100}
                                            layout='fixed'
                                            objectFit="cover"
                                            objectPosition="center"
                                        />
                                    </div>
                                </SwiperSlide>
                            :
                            null
                        }
                        {/* {foto6
                            ?
                                <SwiperSlide className="IGLESIA bg-black w-full">
                                    <div className="hidden md:flex relative" style={{width:'600px',height:'500px'}}>
                                        <Image src={foto6} 
                                            width={500} 
                                            height={500} 
                                            alt='foto1' 
                                            quality={100}
                                            // layout='fill'
                                            objectFit="cover"
                                            objectPosition="center"
                                        />
                                    </div>
                                    <div className="md:hidden " style={{width:'300px',height:'200px'}}>
                                        <Image src={foto6} 
                                            width={300} 
                                            height={200} 
                                            alt='foto1' 
                                            quality={100}
                                            layout='fixed'
                                            objectFit="cover"
                                            objectPosition="center"
                                        />
                                    </div>
                                </SwiperSlide>
                            :
                            null
                        }{foto7
                            ?
                                <SwiperSlide className="IGLESIA bg-black w-full">
                                    <div className="hidden md:flex relative" style={{width:'600px',height:'500px'}}>
                                        <Image src={foto7} 
                                            width={500} 
                                            height={500} 
                                            alt='foto1' 
                                            quality={100}
                                            // layout='fill'
                                            objectFit="cover"
                                            objectPosition="center"
                                        />
                                    </div>
                                    <div className="md:hidden " style={{width:'300px',height:'200px'}}>
                                        <Image src={foto7} 
                                            width={300} 
                                            height={200} 
                                            alt='foto1' 
                                            quality={100}
                                            layout='fixed'
                                            objectFit="cover"
                                            objectPosition="center"
                                        />
                                    </div>
                                </SwiperSlide>
                            :
                            null
                        }{foto8
                            ?
                                <SwiperSlide className="IGLESIA bg-black w-full">
                                    <div className="hidden md:flex relative" style={{width:'600px',height:'500px'}}>
                                        <Image src={foto8} 
                                            width={500} 
                                            height={500} 
                                            alt='foto1' 
                                            quality={100}
                                            // layout='fill'
                                            objectFit="cover"
                                            objectPosition="center"
                                        />
                                    </div>
                                    <div className="md:hidden " style={{width:'300px',height:'200px'}}>
                                        <Image src={foto8} 
                                            width={300} 
                                            height={200} 
                                            alt='foto1' 
                                            quality={100}
                                            layout='fixed'
                                            objectFit="cover"
                                            objectPosition="center"
                                        />
                                    </div>
                                </SwiperSlide>
                            :
                            null
                        }{foto9
                            ?
                                <SwiperSlide className="IGLESIA bg-black w-full">
                                    <div className="hidden md:flex relative" style={{width:'600px',height:'500px'}}>
                                        <Image src={foto9} 
                                            width={500} 
                                            height={500} 
                                            alt='foto1' 
                                            quality={100}
                                            // layout='fill'
                                            objectFit="cover"
                                            objectPosition="center"
                                        />
                                    </div>
                                    <div className="md:hidden " style={{width:'300px',height:'200px'}}>
                                        <Image src={foto9} 
                                            width={300} 
                                            height={200} 
                                            alt='foto1' 
                                            quality={100}
                                            layout='fixed'
                                            objectFit="cover"
                                            objectPosition="center"
                                        />
                                    </div>
                                </SwiperSlide>
                            :
                            null
                        }{foto10
                            ?
                                <SwiperSlide className="IGLESIA bg-black w-full">
                                    <div className="hidden md:flex relative" style={{width:'600px',height:'500px'}}>
                                        <Image src={foto10} 
                                            width={500} 
                                            height={500} 
                                            alt='foto1' 
                                            quality={100}
                                            // layout='fill'
                                            objectFit="cover"
                                            objectPosition="center"
                                        />
                                    </div>
                                    <div className="md:hidden " style={{width:'300px',height:'200px'}}>
                                        <Image src={foto10} 
                                            width={300} 
                                            height={200} 
                                            alt='foto1' 
                                            quality={100}
                                            layout='fixed'
                                            objectFit="cover"
                                            objectPosition="center"
                                        />
                                    </div>
                                </SwiperSlide>
                            :
                            null
                        }{foto11
                            ?
                                <SwiperSlide className="IGLESIA bg-black w-full">
                                    <div className="hidden md:flex relative" style={{width:'600px',height:'500px'}}>
                                        <Image src={foto11} 
                                            width={500} 
                                            height={500} 
                                            alt='foto1' 
                                            quality={100}
                                            // layout='fill'
                                            objectFit="cover"
                                            objectPosition="center"
                                        />
                                    </div>
                                    <div className="md:hidden " style={{width:'300px',height:'200px'}}>
                                        <Image src={foto11} 
                                            width={300} 
                                            height={200} 
                                            alt='foto1' 
                                            quality={100}
                                            layout='fixed'
                                            objectFit="cover"
                                            objectPosition="center"
                                        />
                                    </div>
                                </SwiperSlide>
                            :
                            null
                        }{foto12
                            ?
                                <SwiperSlide className="IGLESIA bg-black w-full">
                                    <div className="hidden md:flex relative" style={{width:'600px',height:'500px'}}>
                                        <Image src={foto12} 
                                            width={500} 
                                            height={500} 
                                            alt='foto1' 
                                            quality={100}
                                            // layout='fill'
                                            objectFit="cover"
                                            objectPosition="center"
                                        />
                                    </div>
                                    <div className="md:hidden " style={{width:'300px',height:'200px'}}>
                                        <Image src={foto12} 
                                            width={300} 
                                            height={200} 
                                            alt='foto1' 
                                            quality={100}
                                            layout='fixed'
                                            objectFit="cover"
                                            objectPosition="center"
                                        />
                                    </div>
                                </SwiperSlide>
                            :
                            null
                        } */}
                    </Swiper>
                    </div>

                </div>
        </div>

   
            <Footer/>
        </Header>
        </>
    )
}


 export async function getServerSideProps({ params }) {
    const apikey = process.env.API_KEY;
     const api = await fetch(`https://cdn.builder.io/api/v2/content/post?apiKey=${apikey}&query.id=${params.id}`);
     const res = await api.json();
     const posts = res.results[0].data;
     return {
       props: {
           posts
       }
     }
   }


