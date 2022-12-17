import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import {Cast} from '../../interfaces/interfaces';
import avatarPictures from '../../utils/avatar';

interface ActorProps {
  actor: Cast;
}

const Actor = ({actor}: ActorProps) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;

  return (
    <View style={style.cardContainer}>
      {actor.profile_path ? (
        <Image style={style.actorPicture} source={{uri: imageUrl}} />
      ) : actor.gender === 1 ? (
        <Image
          style={style.actorPicture}
          source={{uri: avatarPictures.femaleAvatar}}
        />
      ) : (
        <Image
          style={style.actorPicture}
          source={{uri: avatarPictures.maleAvatar}}
        />
      )}

      <View>
        <Text style={style.actorText}>{actor.name}</Text>
        <Text style={style.characterText}>{actor.character}</Text>
      </View>
    </View>
  );
};

export default Actor;

const style = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginVertical: 10,
    marginHorizontal: 10,
    paddingRight: 10,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    borderColor: 'black',
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
  },

  actorText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  characterText: {
    fontSize: 16,
    opacity: 0.7,
  },
  actorPicture: {
    width: 50,
    height: 50,
    borderRadius: 20,
  },
});
