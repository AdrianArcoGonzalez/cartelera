import React from 'react';
import {View, FlatList} from 'react-native';
import {Cast} from '../../interfaces/interfaces';
import Actor from '../Actor/Actor';

interface ActorsProps {
  actors: Cast[];
}

const Actors = ({actors}: ActorsProps): JSX.Element => {
  return (
    <View>
      <FlatList
        data={actors}
        keyExtractor={actor => actor.id.toString()}
        renderItem={({item: actor}) => <Actor actor={actor} />}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{height: 70, marginLeft: 20}}
      />
    </View>
  );
};

export default Actors;
