
import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../components/Home';
import ShowsList from '../components/ShowsList';
import Show from '../components/Show';


const Stack = createStackNavigator();

const MainStackNavigator =  () =>  {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="All Shows"
          component={ShowsList}
        />
        <Stack.Screen
          name="Show"
          component={Show}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigator;