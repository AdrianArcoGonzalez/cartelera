import ImageColors from 'react-native-image-colors';

const getBackGroundColorsFromPicture = async (uriImage: string) => {
    let primary;
    let secondary;
    let third;
    try {
        const colors = await ImageColors.getColors(uriImage, {});

        if (colors.platform === 'android') {
            primary = colors.dominant;
            secondary = colors.average;
        } else if (colors.platform === 'ios') {
            primary = colors.primary;
            secondary = colors.secondary;
        }
    } catch (error) {
        console.log('no colors');
    }

    return [primary, secondary, third];
};

export default getBackGroundColorsFromPicture;
