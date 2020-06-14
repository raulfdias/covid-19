import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import styles from './styles';

const Statistics = () => {

	const [ countryTotal, setCountryTotal ] = useState({Confirmed: 0, Deaths: 0, Recovered: 0, Active: 0});

	const searchCountryTotal = (country = 'brazil') => {
		fetch(`https://api.covid19api.com/country/${country}?from=${getYesterday()}T00:00:00Z&to=${getToday()}T00:00:00Z`)
			.then(res => res.json())
			.then((res) => setCountryTotal(res[0]))
	};

	const formatNumber = number => number.toLocaleString().replace(',', '.'); 

	const getToday = () => {
		const date = new Date();
		const today = date.getFullYear() +'-'+ ('0' + (date.getMonth() + 1)) +'-'+ date.getDate();
		return today;
	};

	const getYesterday = () => {
		const date = new Date();
		const yesterday = date.getFullYear() +'-'+ ('0' + (date.getMonth() + 1)) +'-'+ (date.getDate() - 1);
		return yesterday;
	};

	searchCountryTotal();

	return(
		<ScrollView vertical style={ styles.container } >
			<View style={ styles.headerCard } >
				<View style={[ styles.line, { marginBottom: 30 } ]} >
					<TouchableOpacity
						onPress={ () => {} }
					>
						<MaterialCommunityIcons name={'menu'} size={25} color={'#fefefe'} />
					</TouchableOpacity>
					<TouchableOpacity
						onPress={ () => {} }
					>
						<MaterialCommunityIcons name={'bell-outline'} size={25} color={'#fefefe'} />
					</TouchableOpacity>
				</View>

				<View style={ styles.line } >
					<Text style={ styles.title } >Estatísticas</Text>
				</View>

				<View style={ styles.switch } >
					<Text style={[ styles.switchTxt, { backgroundColor: '#fefefe', color: '#333', } ]} >Meu país</Text>
					<Text style={ styles.switchTxt } >Global</Text>
				</View>

				<View style={ styles.days } >
					<TouchableOpacity>
						<Text style={ styles.day } >Total</Text>
					</TouchableOpacity>
					<TouchableOpacity>
						<Text style={[ styles.day, { color: '#aaa' } ]} >Hoje</Text>
					</TouchableOpacity>
					<TouchableOpacity>
						<Text style={[ styles.day, { color: '#aaa' } ]}>Ontem</Text>
					</TouchableOpacity>
				</View>

				<View style={ styles.squares } >
					<View style={ styles.squareLine } >
						<TouchableOpacity style={[ styles.square, { backgroundColor: '#ffb259' } ]} >
							<Text style={ styles.label } >Infectados</Text>
							<Text style={ styles.number } >{ formatNumber(countryTotal.Confirmed) }</Text>
						</TouchableOpacity>
						<TouchableOpacity style={[ styles.square, { backgroundColor: '#ff5959' } ]} >
							<Text style={ styles.label } >Mortes</Text>
							<Text style={ styles.number } >{ formatNumber(countryTotal.Deaths) }</Text>
						</TouchableOpacity>
					</View>
					<View style={ styles.squareLine } >
						<TouchableOpacity style={[ styles.square, { backgroundColor: '#4cd97b' } ]} >
							<Text style={ styles.label } >Recuperados</Text>
							<Text style={ styles.number } >{ formatNumber(countryTotal.Recovered) }</Text>
						</TouchableOpacity>
						<TouchableOpacity style={[ styles.square, { backgroundColor: '#4cb5ff' } ]} >
							<Text style={ styles.label } >Ativos</Text>
							<Text style={ styles.number } >{ formatNumber(countryTotal.Active) }</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</ScrollView>
	); 
};

export default Statistics;