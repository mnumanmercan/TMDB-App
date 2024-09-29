const API_KEY = process.env.TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

async function fetchFromTMDB(endpoint) {
    const response = await fetch(`${BASE_URL}${endpoint}?api_key=${API_KEY}`);
    if (!response.ok) {
        throw new Error('Failed to fetch data from TMDB');
    }
    return response.json();
}

export async function getPopularMoviesAndShows() {
    const [movies, tvShows] = await Promise.all([
        fetchFromTMDB('/movie/popular'),
        fetchFromTMDB('/tv/popular')
    ]);

    const combinedResults = [
        ...movies.results.map(movie => ({
            id: movie.id,
            title: movie.title,
            image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            imdbRating: movie.vote_average,
            year: new Date(movie.release_date).getFullYear(),
            mediaType: 'movie'
        })),
        ...tvShows.results.map(show => ({
            id: show.id,
            title: show.name,
            image: `https://image.tmdb.org/t/p/w500${show.poster_path}`,
            imdbRating: show.vote_average,
            year: new Date(show.first_air_date).getFullYear(),
            mediaType: 'tv'
        }))
    ];

    return combinedResults.sort((a, b) => b.imdbRating - a.imdbRating).slice(0, 20);
}