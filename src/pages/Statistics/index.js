import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

import { useNavigation } from "@react-navigation/native";

const Statistics = () => {

	const navigation = useNavigation();	

	return(
		<View style={ styles.container } >			
		</View>
	); 
};

export default Statistics;