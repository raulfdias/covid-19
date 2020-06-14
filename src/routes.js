import 'react-native-gesture-handler';

import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Home from './pages/Home';
import Statistics from './pages/Statistics';

const Tab = createBottomTabNavigator();

const Routes = () => {
	return(
    <NavigationContainer>
      <Tab.Navigator
      	screenOptions={({ route }) => ({
				  tabBarIcon: ({ focused, color, size }) => {
				  	let iconName;

				    if (route.name === 'Home') {
				      iconName = 'home';
				    } else if (route.name === 'Statistics') {
				      iconName = 'chart-bar';
				    }

				    return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
	  			},
				})}
				tabBarOptions={{
				  activeTintColor: '#473f97',
				  inactiveTintColor: 'gray',
				  showLabel: false
				}}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Statistics" component={Statistics} />
      </Tab.Navigator>
    </NavigationContainer>
	);
};

export default Routes;