/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {Movie} from '../interfaces/interfaces';
import {useNavigation} from '@react-navigation/core';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface MovieProps {
  movie: Movie;
  height?: number;
  width?: number;
}

const MoviePoster = ({
  movie,
  height = 360,
  width = 240,
}: MovieProps): JSX.Element => {
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('DetailsScreen' as never, movie as never)
      }
      activeOpacity={0.8}
      style={{
        width: width,
        height: height,
        justifyContent: 'center',
        alignSelf: 'center',
        marginHorizontal: 5,
        paddingBottom: 20,
        paddingHorizontal: 7,
      }}>
      <View style={moviePosterStyle.posterContainer}>
        <Image source={{uri: imageUrl}} style={moviePosterStyle.image} />
      </View>
    </TouchableOpacity>
  );
};

export default MoviePoster;

const moviePosterStyle = StyleSheet.create({
  posterContainer: {
    flex: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
  },
  image: {
    borderRadius: 18,
    flex: 1,
  },
});
