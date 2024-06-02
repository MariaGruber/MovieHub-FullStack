import { Movies } from "@/types/movie.data"
import MovieCard from "@/components/MovieCard/MovieCard"
import Link from "next/link"



type Props = {
    title?: string
    isVertical?: boolean
    movies?:Movies[]
  };

  function MovieCarousel({ title, movies, isVertical }: Props) {
    return (
        <div>
        <div className="z-50">
        <h2 className="text-xl font-mono px-10 py-2">
          {title}
        </h2>
      </div>
      <div className='flex space-x-4 overflow-scroll px-5 lg:px-10 py-5 scrollbar-hide'>
        {isVertical
          ? movies?.map((movies:Movies) => (
            <div
              key={movies._id}
              className='flex flex-col space-y-5 mb-5 items-center lg:flex-row space-x-5'
            >
              <Link href={`/movies/${movies._id}`}>
                <MovieCard movies={movies} />
                <div className="max-w-2xl">
                  <p className="font-bold">
                    {movies.name}
                    {' '}
                  </p>
                  <hr className="mb-3" />
                  <p className="">{movies.synopsis}</p>
                </div>
              </Link>
            </div>
          )) : (
            movies?.map((movies:Movies) => (
              <Link key={movies._id} href={`/movies/${movies._id}`}>
                <MovieCard key={movies._id} movies={movies} />
              </Link>
            ))
          )}
        </div>
    </div>
    )}

    export default MovieCarousel