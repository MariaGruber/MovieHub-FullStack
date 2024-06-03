import { Movies } from '@/types/movie.data'
import Image from 'next/image'
import React from 'react'

function MovieCard({ movies }: { movies: Movies }) {
    return (
        <div className='relative flex-shrink-0 cursor-pointer transform
         hover:scale-105 transition duration-200 ease-out
         hover:drop-shadow-lg'>

            <div className='absolute inset-0 bg-gradient-to-b from-gray-200/0
             via-gray-900/10 to-gray-300 dark:to-[#011f4b]/80 z-10'>

            </div>

            <p className='absolute z-20 bottom-5 left-5'>{movies?.name}</p>
            <Image
                className='w-fit lg:min-w-[400px] h-56 object-cover object-center
                shadow-md shadow-[#011f4b] drop-shadow-xl rounded-sm'
                src={movies?.image || ""}
                alt={movies?.name}
                width={1920}
                height={1080}
                key={movies?._id}
            />
        </div>
    )
}

export default MovieCard