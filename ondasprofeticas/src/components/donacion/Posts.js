import React from 'react';

export function Posts(post) {
    return(
        <>
        <div className="PADRE md:ml-36 p-8 mt-8 ">
                            <div className="FECHA  absolute w-24 h-24 text-base text-center mt-24 -ml-12 z-10 bg-amber-400">
                                <span className="text-4xl font-bold block text-center py-2">22</span>
                                <p>
                                Oct, 2020
                                </p>
                            </div>
                            <div className="VIDEO mb-8">
                                <iframe width="560" height="315" src={post.data.video} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                            <div className="TEMA ">
                                <h1 className="uppercase font-light text-4xl text-center md:text-left -mb-2">{post.data.tema}</h1>
                                <Image src={divider2} alt='divider2'/>
                                <p className="font-light max-w-4xl text-gray-500 mt-4">{post.data.descripcion}</p>
                                <button className="divide-y-4 uppercase font-medium mt-8 border-2 border-amber-400 py-2 px-4 rounded hover:bg-amber-400">ver mas</button>
                            </div>
                            <div className="w-full bg-gray-500 mt-8" style={{height:'2px'}}></div>

                        </div>
        </>
    )
}