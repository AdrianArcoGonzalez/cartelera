import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {RootStackParams} from '../navigation/Navigation';
import useMovieDetails from '../hooks/useMovieDetails';
import Loading from '../components/Loading/Loading';
import DetailsMovie from '../components/DetailsMovie/DetailsMovie';
import Icon from 'react-native-vector-icons/Ionicons';

interface DetailsScreenProps
  extends StackScreenProps<RootStackParams, 'DetailsScreen'> {}

const screenHeight = Dimensions.get('screen').height;

const DetailsScreen = ({
  route,
  navigation,
}: DetailsScreenProps): JSX.Element => {
  const {getMovieDetails, cast, isLoadingDetails, fullMovie} =
    useMovieDetails();

  const movie = route.params;
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  useEffect(() => {
    getMovieDetails(movie.id);
  }, [getMovieDetails, movie.id]);

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <View style={styles.imageBorder}>
          <Image source={{uri: imageUrl}} style={styles.posterImage} />
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.subTitle}>{movie.original_title}</Text>
        <Text style={styles.title}>{movie.title}</Text>
        <Text>{}</Text>
      </View>

      {isLoadingDetails ? (
        <Loading size={20} text="" color="grey" />
      ) : (
        <>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.pop()}>
            <Icon name="arrow-back-outline" color={'white'} size={60} />
          </TouchableOpacity>
          <DetailsMovie movie={fullMovie!} casts={cast} />
        </>
      )}
    </ScrollView>
  );
};

export default DetailsScreen;
const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: screenHeight * 0.7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
  imageBorder: {
    flex: 1,
    overflow: 'hidden',
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
  posterImage: {
    flex: 1,
  },
  textContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  subTitle: {
    fontSize: 16,
    opacity: 0.8,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 5,
  },
});
