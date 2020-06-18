import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import styles from './styles';

const Statistics = () => {

	const [ countryActiveNumbers, setCountryActiveNumbers ] = useState({Confirmed: 0, Deaths: 0, Recovered: 0, Active: 0});
	const [ activeMenu, setActiveMenu ] = useState('total');

	useEffect(() => {
    searchCountryNumbers();
  }, []);

  const searchCountryNumbers = (country = 'brazil', fromDay = getDayAgo(1), toDay = getDayAgo()) => {
    fetch(`https://api.covid19api.com/country/${country}?from=${fromDay}T00:00:00Z&to=${toDay}T00:00:00Z`)
      .then(response => response.json())
			.then(response => response.length == 1
        ? setCountryActiveNumbers(response[0])
        : setCountryActiveNumbers(getObjectDifferenceDays(response))
      );
  };

  const getObjectDifferenceDays = response => ({
    Confirmed: response[1].Confirmed - response[0].Confirmed,
    Deaths:    response[1].Deaths    - response[0].Deaths,
    Recovered: response[1].Recovered - response[0].Recovered,
    Active:    response[1].Active    - response[0].Active,
  });

  const getDayAgo = (dayAgo = 0) => {
    const date = new Date();
		const formatedDayAgo = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)) + '-' + (date.getDate() - dayAgo);
    return formatedDayAgo;
  };

  const formatNumber = number => Number(number).toLocaleString().replace(',', '.');

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
            <Text
              style={[ styles.day, activeMenu === 'total' ? styles.ative : styles.inative ]}
							onPress={ () => { setActiveMenu('total'); searchCountryNumbers('brazil', getDayAgo(1), getDayAgo(0)) }}
						>
							Total
						</Text>
					</TouchableOpacity>
					<TouchableOpacity>
						<Text style={[ styles.day, activeMenu === 'hoje' ? styles.ative : styles.inative ]}
							onPress={ () => { setActiveMenu('hoje'); searchCountryNumbers('brazil', getDayAgo(2), getDayAgo(0)) }}
						>
							Hoje
						</Text>
					</TouchableOpacity>
					<TouchableOpacity>
						<Text style={[ styles.day, activeMenu === 'ontem' ? styles.ative : styles.inative ]}
							onPress={ () => { setActiveMenu('ontem'); searchCountryNumbers('brazil', getDayAgo(3), getDayAgo(0)) }}
						>
							Ontem
						</Text>
					</TouchableOpacity>
				</View>

				<View style={ styles.squares } >
					<View style={ styles.squareLine } >
						<TouchableOpacity style={[ styles.square, { backgroundColor: '#ffb259' } ]} >
							<Text style={ styles.label } >Infectados</Text>
							<Text style={ styles.number } >{ formatNumber(countryActiveNumbers.Confirmed) }</Text>
						</TouchableOpacity>
						<TouchableOpacity style={[ styles.square, { backgroundColor: '#ff5959' } ]} >
							<Text style={ styles.label } >Mortes</Text>
							<Text style={ styles.number } >{ countryActiveNumbers.Deaths }</Text>
						</TouchableOpacity>
					</View>
					<View style={ styles.squareLine } >
						<TouchableOpacity style={[ styles.square, { backgroundColor: '#4cd97b' } ]} >
							<Text style={ styles.label } >Recuperados</Text>
							<Text style={ styles.number } >{ countryActiveNumbers.Recovered }</Text>
						</TouchableOpacity>
						<TouchableOpacity style={[ styles.square, { backgroundColor: '#4cb5ff' } ]} >
							<Text style={ styles.label } >Ativos</Text>
							<Text style={ styles.number } >{ countryActiveNumbers.Active }</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</ScrollView>
	);
};

export default Statistics;