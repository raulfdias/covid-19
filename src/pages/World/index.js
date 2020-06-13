import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

import { useNavigation } from "@react-navigation/native";

const World = () => {

	const navigation = useNavigation();	

	return(
		<View style={ styles.container } >
			<TouchableOpacity
				style={ styles.button }
				onPress={ () => navigation.navigate('Detail') }
			>
				<Text style={{ color: '#fff' }} >
					Go to detail
				</Text>
			</TouchableOpacity>
		</View>
	); 
};

export default World;