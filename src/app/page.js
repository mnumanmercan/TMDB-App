import MovieCard from '../components/MovieCard';
import { getPopularMoviesAndShows } from '../lib/tmdb';

export default async function Home() {
  const mediaItems = await getPopularMoviesAndShows();

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Popular Movies and Shows</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {mediaItems.map((item) => (
          <MovieCard
            key={item.id}
            title={item.title}
            image={item.image}
            imdbRating={item.imdbRating}
            year={item.year}
          />
        ))}
      </div>
    </main>
  );
}