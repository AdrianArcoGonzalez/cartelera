import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Cast, FullMovie} from '../../interfaces/interfaces';
import Actors from '../Actors/Actors';
import Icon from 'react-native-vector-icons/Ionicons';

interface DetailsMovieInterface {
  casts: Cast[];
  movie: FullMovie;
}

const DetailsMovie = ({casts, movie}: DetailsMovieInterface) => {
  return (
    <View style={style.detailsContainer}>
      <View style={style.movieInfo}>
        <Icon name="star-outline" size={20} color={'grey'} />
        <Text style={style.blackText}> {movie.vote_average} - </Text>
        <Text style={style.blackText}>
          {movie.genres.map(genre => genre.name).join(', ')}
        </Text>
      </View>
      <Text style={style.title}>Historia</Text>

      <Text style={style.paragraph}>{movie.overview}</Text>

      <Text style={style.title}>Actores</Text>

      <Actors actors={casts} />
    </View>
  );
};

const style = StyleSheet.create({
  detailsContainer: {
    marginHorizontal: 20,
  },
  movieInfo: {
    flexDirection: 'row',
  },
  blackText: {
    color: 'black',
  },
  title: {
    fontSize: 23,
    marginTop: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  paragraph: {
    color: 'black',
  },
});

export default DetailsMovie;
