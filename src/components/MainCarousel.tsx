import React from 'react';
import Carousel from 'react-native-snap-carousel';
import {Dimensions, View} from 'react-native';
import MoviePoster from './MoviePoster';
import {Movie} from '../interfaces/interfaces';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const {width} = Dimensions.get('window');

interface MainCarouselProps {
  movies: Movie[];
}

const MainCarousel = ({movies}: MainCarouselProps): JSX.Element => {
  const {top} = useSafeAreaInsets();

  return (
    <View style={{marginTop: top + 20}}>
      <View style={{height: 440}}>
        <Carousel
          data={movies}
          renderItem={({item}) => <MoviePoster movie={item} />}
          sliderWidth={width}
          itemWidth={250}
          inactiveSlideOpacity={0.8}
        />
      </View>
    </View>
  );
};

export default MainCarousel;
