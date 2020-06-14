import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#473f97',
	},
	headerCard: {
		width: '100%',
		padding: 25,
		borderBottomLeftRadius: 50,
		borderBottomRightRadius: 50,
	},
	line: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	title: {
		color: '#fefefe',
		fontSize: 22,
		fontWeight: 'bold',
	},
	switch: {
		width: '100%',
		padding: 5,
		marginTop: 25,
		marginBottom: 25,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
		borderRadius: 30,
		backgroundColor: '#6c65ac',
	},
	switchTxt: {
		width: '50%',
		paddingTop: 8,
		paddingBottom: 8,
		textAlign: 'center',
		color: '#fefefe',
		fontSize: 18,
		fontWeight: 'bold',
		borderRadius: 30,
	},
	days: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'center',
	},
	day: {
		marginLeft: 15,
		marginRight: 15,
		fontWeight: 'bold',
		fontSize: 16,
	},
	ative: {
		color: '#fefefe',		
	},
	inative: {
		color: '#aaa',		
	},
	squares: {
		width: '100%',
		marginTop: 25,
		marginBottom: 35,
		alignItems: 'center',
	},
	squareLine: {
		flexDirection: 'row',
	},
	square: {
		width: '50%',
		margin: 8,
		padding: 10,
		justifyContent: 'space-evenly',
		borderRadius: 10,
		backgroundColor: '#fff',
	},
	label: {
		marginBottom: 30,
		color: '#fefefe',
		fontSize: 16,
	},
	number: {
		color: '#fefefe',
		fontSize: 22,
		fontWeight: 'bold',
	},
});

export default styles;