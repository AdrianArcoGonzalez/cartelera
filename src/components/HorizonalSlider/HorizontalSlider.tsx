/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {Movie} from '../../interfaces/interfaces';
import MoviePoster from '../MoviePoster';

interface HorizontalSliderProps {
  title?: string;
  movies: Movie[];
}

const HorizontalSlider = ({
  title,
  movies,
}: HorizontalSliderProps): JSX.Element => {
  return (
    <View style={{height: title ? 260 : 220}}>
      {title && (
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: 'black',
            marginLeft: 10,
            marginBottom: 10,
          }}>
          {title}
        </Text>
      )}

      <FlatList
        data={movies}
        renderItem={({item}) => (
          <MoviePoster movie={item} width={140} height={200} />
        )}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
export default HorizontalSlider;
