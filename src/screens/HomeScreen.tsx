import React, {useEffect} from 'react';
import {View, ScrollView} from 'react-native';
import HorizontalSlider from '../components/HorizonalSlider/HorizontalSlider';
import Loading from '../components/Loading/Loading';
import MainCarousel from '../components/MainCarousel';
import useMovies from '../hooks/useMovies';

const HomeScreen = (): JSX.Element => {
  const {
    getMovies,
    isLoading,
    comingSoonMovies,
    currentMovies,
    popularMovies,
    topRatedMovies,
  } = useMovies();

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  return (
    <>
      {isLoading ? (
        <Loading text="Loading amazing films" size={100} color="red" />
      ) : (
        <ScrollView>
          <View>
            <MainCarousel movies={currentMovies} />
            <HorizontalSlider movies={popularMovies} title={'Populares'} />
            <HorizontalSlider movies={topRatedMovies} title={'Top rated'} />
            <HorizontalSlider
              movies={comingSoonMovies}
              title={'Proximamente'}
            />
          </View>
        </ScrollView>
      )}
    </>
  );
};

export default HomeScreen;
