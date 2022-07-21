import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import routes from './routes';
import {Home, Splash} from '@screen/index';

const Stack = createNativeStackNavigator<routes>();

const NavigationRoot = () => {
  const screenOptions = {headerShown: false};

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={screenOptions}
        initialRouteName={'SPLASH'}>
        <Stack.Screen name={'SPLASH'} component={Splash} />
        <Stack.Screen name={'HOME'} component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationRoot;
