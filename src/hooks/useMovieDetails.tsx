import {useState, useCallback} from 'react';
import {Cast, Creadits, FullMovie} from '../interfaces/interfaces';
import movieDB from '../utils/customAxios';

export interface MovieDetails {
  isLoadingDetails: boolean;
  cast: Cast[];
  fullMovie?: FullMovie;
}
const initialMovieDetailsState: MovieDetails = {
  isLoadingDetails: true,
  cast: [],
};

const useMovieDetails = () => {
  const [movieDetails, setMovieDetail] = useState<MovieDetails>(
    initialMovieDetailsState,
  );

  const getMovieDetails = useCallback(
    async (id: number) => {
    const detailsPromise = movieDB.get<FullMovie>(`/${id}`);
    const creditsPromise = movieDB.get<Creadits>(`/${id}/credits`);

    const [movieDetailsResponse, creditsResponse] = await Promise.all([
      detailsPromise,
      creditsPromise,
    ]);

    setMovieDetail({
      isLoadingDetails: false,
      fullMovie: movieDetailsResponse.data,
      cast: creditsResponse.data.cast,
    });
  },[])
  
  return {getMovieDetails, ...movieDetails};
};

export default useMovieDetails;
