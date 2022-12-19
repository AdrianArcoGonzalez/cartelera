import React, {useContext, useEffect} from 'react';
import Carousel from 'react-native-snap-carousel';
import {Dimensions, View} from 'react-native';
import MoviePoster from './MoviePoster';
import {Movie} from '../interfaces/interfaces';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import getBackGroundColorsFromPicture from '../utils/getBackGroundColorsFromPicture';
import {GradientContext} from '../context/GradientContext';

const {width} = Dimensions.get('window');

interface MainCarouselProps {
    movies: Movie[];
}

const MainCarousel = ({movies}: MainCarouselProps): JSX.Element => {
    const {top} = useSafeAreaInsets();
    const {setMainColors} = useContext(GradientContext);

    const getPosterColor = async (index: number) => {
        const imageUrl = `https://image.tmdb.org/t/p/w500${movies[index].poster_path}`;
        try {
            const [primary = 'green', secondary = 'orange'] =
                await getBackGroundColorsFromPicture(imageUrl);
            setMainColors({primary, secondary});
        } catch (error) {
            console.log('no colors');
        }
    };

    useEffect(() => {
        if (movies.length > 0) {
            getPosterColor(0);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [movies]);

    return (
        <View style={{marginTop: top + 20}}>
            <View style={{height: 400}}>
                <Carousel
                    data={movies}
                    renderItem={({item}) => <MoviePoster movie={item} />}
                    sliderWidth={width}
                    itemWidth={250}
                    inactiveSlideOpacity={0.8}
                    onSnapToItem={index => getPosterColor(index)}
                />
            </View>
        </View>
    );
};

export default MainCarousel;
