import { getMovieById } from "@/lib/data"
import Link from "next/link"

type Props = {
    params: {
      id: string
    }
}

export default async function MovieDetails({ params: { id }}:Props){
    const movie = await getMovieById(id)
    console.log(movie)
return (
    <div className="pl-8">
        <img className="w-2/4" src={movie.image} alt="poster" />
        <div>
            <h1 className="text-2xl font-bold mt-2">{movie.name}</h1>
            <p className="text-2xl font-bold mt-2">{movie.score}/10</p>
            <p className="text-lg mt-2 pr-4" >{movie.synopsis}</p>
        </div>
        <div className="hover:cursor-pointer bg-yellow-500 mt-8 p-2 text-lg text-black font-bold rounded-lg text-center mx-32">
        <Link href="/movies">Go back</Link>
        </div>
    </div>
)
}