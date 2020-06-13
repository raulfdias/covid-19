import 'react-native-gesture-handler';

import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import World from './pages/World';
import Virus from './pages/Virus';

const Tab = createBottomTabNavigator();

const Routes = () => {
	return(
    <NavigationContainer>
      <Tab.Navigator
      	screenOptions={({ route }) => ({
				  tabBarIcon: ({ focused, color, size }) => {
				  	let iconName;

				    if (route.name === 'World') {
				      iconName = 'earth';
				    } else if (route.name === 'Virus') {
				      iconName = 'bacteria-outline';
				    }

				    return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
	  			},
				})}
				tabBarOptions={{
				  activeTintColor: '#d63226',
				  inactiveTintColor: 'gray',
				}}
      >
        <Tab.Screen name="World" component={World} />
        <Tab.Screen name="Virus" component={Virus} />
      </Tab.Navigator>
    </NavigationContainer>
	);
};

export default Routes;