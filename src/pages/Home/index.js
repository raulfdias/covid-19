import React, { useState } from 'react';
import { View, Text, Picker, TouchableOpacity, ScrollView, Image } from 'react-native';

import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

import styles from './styles';

const Home = () => {

	const [ selectedValue, setSelectedValue ] = useState("BRA");

	return(
		<ScrollView vertical>
			<View style={ styles.container } >
				<View style={ styles.headerCard } >
					<View style={[ styles.firstLine, { marginBottom: 30 } ]} >
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

					<View style={ styles.firstLine } >
						<Text style={ styles.title } >Covid-19</Text>
			      <Picker
			      	style={ styles.selectCountry }
			        selectedValue={selectedValue}
			        onValueChange={itemValue => setSelectedValue(itemValue)}
			      >
			        <Picker.Item label="BR" value="brazil" />
						</Picker>
					</View>

					<View style={ styles.paragraphView } >
						<Text style={ styles.title } >Como se sente?</Text>
						<Text style={ styles.paragraph } >Se sentir os sintomas da COVID-19, ligue ou mande SMS imediatamente.</Text>
					</View>

					<View style={ styles.contact } >
						<TouchableOpacity
							style={[ styles.button, { backgroundColor: '#ff4c58' } ]}
							onPress={ () => {} }
						>
							<FontAwesome name={'phone'} size={22} color={'#fefefe'} />
							<Text style={ styles.textBtn } >Ligue agora</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={[ styles.button, { backgroundColor: '#4c79ff' } ]}
							onPress={ () => {} }
						>
							<MaterialCommunityIcons name={'message'} size={20} color={'#fefefe'} />
							<Text style={ styles.textBtn } >Envie SMS</Text>
						</TouchableOpacity>
					</View>
				</View>

				<View style={ styles.prevention } >
					<Text style={ styles.preventionTitle } >Prevenção</Text>
					<ScrollView style={ styles.preventionScroll } horizontal showsHorizontalScrollIndicator={false}>
						<TouchableOpacity style={ styles.preventionItem } onPress={ () => {} } >
							<Image style={ styles.preventionImg } source={ require('../../assets/distance.png') } />
							<Text style={ styles.preventionTxt } >Distanciamento</Text>
						</TouchableOpacity>
						<TouchableOpacity style={ styles.preventionItem } onPress={ () => {} } >
							<Image style={ styles.preventionImg } source={ require('../../assets/clear-hands.png') } />
							<Text style={ styles.preventionTxt } >Lave suas mãos</Text>
						</TouchableOpacity>
						<TouchableOpacity style={ styles.preventionItem } onPress={ () => {} } >
							<Image style={ styles.preventionImg } source={ require('../../assets/use-mask.png') } />
							<Text style={ styles.preventionTxt } >Use a máscara</Text>
						</TouchableOpacity>
					</ScrollView>
				</View>
				<TouchableOpacity style={{ width: '90%', height: 120, marginTop: 20, marginBottom: 30, }} >
					<Image
						style={{ width: '100%', height: 120, }}
						source={ require('../../assets/make-test.png') }
						resizeMode='contain'
					/>
				</TouchableOpacity>
			</View>
		</ScrollView>
	);
};

export default Home;