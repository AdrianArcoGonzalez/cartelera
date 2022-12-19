import React, {createContext, useState} from 'react';

export const GradientContext = createContext({} as ContextProps);

interface GradientContextProvidersProps {
    children: JSX.Element | JSX.Element[];
}
interface ImageColors {
    primary: string;
    secondary: string;
}

interface ContextProps {
    colors: ImageColors;
    previousColors: ImageColors;
    setMainColors: (colorsToSet: ImageColors) => void;
    setPreviousMainColors: (colorsToSet: ImageColors) => void;
}
const initialColorsState: ImageColors = {
    primary: 'transparent',
    secondary: 'transparent',
};

export const GradientProvider = ({children}: GradientContextProvidersProps) => {
    const [colors, setColors] = useState<ImageColors>(initialColorsState);

    const [previousColors, setPreviousColors] =
        useState<ImageColors>(initialColorsState);

    const setMainColors = (colorsToSet: ImageColors) => {
        setColors(colorsToSet);

        return colors;
    };

    const setPreviousMainColors = (colorsToSet: ImageColors) => {
        setPreviousColors(colorsToSet);
    };

    return (
        <GradientContext.Provider
            value={{
                colors,
                setMainColors,
                previousColors,
                setPreviousMainColors,
            }}>
            {children}
        </GradientContext.Provider>
    );
};
