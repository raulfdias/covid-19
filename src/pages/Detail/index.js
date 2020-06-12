import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

import { useNavigation } from "@react-navigation/native";

const Detail = () => {

	const navigation = useNavigation();	

	return(
		<View style={ styles.container } >
			<TouchableOpacity
				style={ styles.button }
				onPress={ () => navigation.goBack() }
			>
				<Text style={{ color: '#fff' }} >
					Back to home
				</Text>
			</TouchableOpacity>
		</View>
	); 
};

export default Detail;