import React from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';

interface LoadingProps {
  text: string;
  size: number;
  color: string;
}

const Loading = ({text, size, color}: LoadingProps): JSX.Element => {
  return (
    <View style={style.loadingContainer}>
      <Text style={style.loadingText}>{text}...</Text>
      <ActivityIndicator color={color} size={size} />
    </View>
  );
};

export default Loading;

const style = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
  },
  loadingText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
  },
});
