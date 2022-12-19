import {useRef} from 'react';
import {Animated} from 'react-native';
const useFade = () => {
    const opacityRef = useRef(new Animated.Value(0)).current;

    const fadeIn = (callback?: () => void) => {
        Animated.timing(opacityRef, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
        }).start(() => (callback ? callback() : null));
    };

    const fadeOut = () => {
        Animated.timing(opacityRef, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start();
    };

    return {fadeIn, fadeOut, opacityRef};
};

export default useFade;
