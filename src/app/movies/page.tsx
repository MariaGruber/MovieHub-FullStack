import MovieCarousel from "@/components/movieCarousel/MovieCarousel"
import { getMovies } from "@/lib/data"
import Link from "next/link"

export default async function Movies() {

  const movies = await getMovies();
  console.log(movies)
  return (
    <main>
      <section>
        <h1 className="pb-10 pt-8">Welcome to your Dashboard</h1>
      </section>
      <MovieCarousel title="Trending for today" movies={movies}/>
      <div className="hover:cursor-pointer bg-yellow-500 mt-8 p-2 text-lg text-black font-bold rounded-lg text-center">
        <Link href="/movies/create">Create Movie Review</Link>
      </div>
          
    </main>
  );
}