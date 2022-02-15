import React from 'react';
import { useRouter } from 'next/router';


export default function Detalle(){
    const router = useRouter();
    console.log(router.query.id)
    
    return (
        <>
        <p>PRUEBA</p>
        </>
    )
}