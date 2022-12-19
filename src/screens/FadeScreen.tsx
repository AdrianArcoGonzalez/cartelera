import React from 'react';
import {View, Animated, Button, StyleSheet} from 'react-native';
import useFade from '../hooks/useFade';

const FadeInScreen = (): JSX.Element => {
  const {fadeIn, fadeOut, opacityRef} = useFade();

  return (
    <View style={styles.fadeInContainer}>
      <Animated.View style={{...styles.fadein, opacity: opacityRef}} />
      <Button onPress={fadeIn} title={'Fadein'} />
      <Button onPress={fadeOut} title={'Fadeout'} />
    </View>
  );
};
export default FadeInScreen;

const styles = StyleSheet.create({
  fadeInContainer: {
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  fadein: {
    backgroundColor: 'blue',
    width: 150,
    height: 150,
    borderColor: 'white',
    borderWidth: 10,
  },
});
