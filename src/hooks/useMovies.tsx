import {useCallback, useState} from 'react';
import movieDB from '../utils/customAxios';
import {Movie, MovieDBNowResponse} from '../interfaces/interfaces';

interface MoviesState {
  currentMovies: Movie[];
  popularMovies: Movie[];
  topRatedMovies: Movie[];
  comingSoonMovies: Movie[];
}

const initialMoviesState: MoviesState = {
  currentMovies: [],
  comingSoonMovies: [],
  popularMovies: [],
  topRatedMovies: [],
};

const useMovies = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [movies, setMovies] = useState<MoviesState>(initialMoviesState);

  const getMovies = useCallback(async () => {
    try {
      const nowPlayingPromise = movieDB.get<MovieDBNowResponse>('/now_playing');
      const popularPromise = movieDB.get<MovieDBNowResponse>('/popular');
      const topRatedPromise = movieDB.get<MovieDBNowResponse>('/top_rated');
      const upcomingPromise = movieDB.get<MovieDBNowResponse>('/upcoming');

      const response = await Promise.all([
        nowPlayingPromise,
        popularPromise,
        topRatedPromise,
        upcomingPromise,
      ]);
      setMovies({
        currentMovies: response[0].data.results,
        popularMovies: response[1].data.results,
        topRatedMovies: response[2].data.results,
        comingSoonMovies: response[3].data.results,
      });
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log('error', error);
    }
  }, []);

  return {
    getMovies,
    ...movies,
    isLoading,
  };
};

export default useMovies;
