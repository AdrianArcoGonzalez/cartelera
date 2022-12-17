import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import {Movie} from '../interfaces/interfaces';

export type RootStackParams = {
  HomeScreen: undefined;
  DetailsScreen: Movie;
};

const stack = createStackNavigator<RootStackParams>();
const Navigation = () => {
  return (
    <stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: 'white'},
      }}>
      <stack.Screen name="HomeScreen" component={HomeScreen} />
      <stack.Screen name="DetailsScreen" component={DetailsScreen} />
    </stack.Navigator>
  );
};
export default Navigation;
