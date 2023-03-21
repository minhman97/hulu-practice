import { HandThumbUpIcon } from '@heroicons/react/24/outline';
import Image from 'next/image'
import React from 'react'

function Thumnail({result}) {
    const BASE_URL = `https://image.tmdb.org/t/p/original/`;
  return (
    <div className='group cursor-pointer transition duration-100 ease-in transform sm:hover:scale-105 hover:z-50'>
        <Image
        layout='responsive'
        src={`${BASE_URL}${result.backdrop_path || result.poster_path}`}
        width={1920}
        height={1080}/>
        <div className="p-2">
            <p className="truncate max-w-md">{result.overview}</p>
            <h2 className=" text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">{result.title || result.oroginal_name}</h2>
            <p className="flex items-center opacity-0 group-hover:opacity-100">
                {result.media_type && `${result.media_type} -`}{" "}
                {result.release_date || result.first_air_date} -{" "}
                <HandThumbUpIcon className="h-2 mx-2" /> {result.vote_count}
            </p>
        </div>
    </div>    
  )
}

export default Thumnail
