import React, {useContext, useEffect} from 'react';
import {View, Animated, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {GradientContext} from '../../context/GradientContext';
import useFade from '../../hooks/useFade';

interface GradientBackgroundProps {
    children: JSX.Element | JSX.Element[];
}

const GradientBackground = ({
    children,
}: GradientBackgroundProps): JSX.Element => {
    const {colors, setPreviousMainColors, previousColors} =
        useContext(GradientContext);
    const {fadeIn, fadeOut, opacityRef} = useFade();

    useEffect(() => {
        fadeIn(() => {
            setPreviousMainColors(colors);
            fadeOut();
        });
    }, [colors, fadeIn, fadeOut, setPreviousMainColors]);

    return (
        <View style={styles.gradientContainer}>
            <LinearGradient
                colors={[
                    previousColors.primary,
                    previousColors.secondary,
                    'white',
                ]}
                style={StyleSheet.absoluteFillObject}
                start={{x: 0.1, y: 0.1}}
                end={{x: 0.4, y: 0.9}}
            />

            <Animated.View
                style={{
                    ...StyleSheet.absoluteFillObject,
                    opacity: opacityRef,
                }}>
                <LinearGradient
                    colors={[colors.primary, colors.secondary, 'white']}
                    style={StyleSheet.absoluteFillObject}
                    start={{x: 0.1, y: 0.1}}
                    end={{x: 0.4, y: 0.9}}
                />
            </Animated.View>
            {children}
        </View>
    );
};

export default GradientBackground;

const styles = StyleSheet.create({
    gradientContainer: {
        flex: 1,
    },
});
