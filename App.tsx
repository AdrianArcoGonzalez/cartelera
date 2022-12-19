import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';
import {GradientProvider} from './src/context/GradientContext';
// import FadeInScreen from './src/screens/FadeScreen';

const App = (): JSX.Element => {
    return (
        <NavigationContainer>
            <GradientProvider>
                <Navigation />
                {/* <FadeInScreen /> */}
            </GradientProvider>
        </NavigationContainer>
    );
};

export default App;
