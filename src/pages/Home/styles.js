import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#fefefe',
	},
	headerCard: {
		width: '100%',
		padding: 25,
		borderBottomLeftRadius: 50,
		borderBottomRightRadius: 50,
		backgroundColor: '#473f97',
	},
	firstLine: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	title: {
		color: '#fefefe',
		fontSize: 22,
		fontWeight: 'bold',
	},
	selectCountry: {
		width: 100,
		padding: 5,
		borderRadius: 30,
		fontWeight: 'bold',
		backgroundColor: '#fefefe',
	},
	paragraphView: {
		marginTop: 40,
		marginBottom: 20,
	},
	paragraph: {
		color: '#ccc',
		marginTop: 10,
		fontSize: 14,
	},
	contact: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	button: {
		paddingTop: 12,
		paddingBottom: 12,
		paddingLeft: 20,
		paddingRight: 20,
		borderRadius: 30,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	textBtn: {
		marginLeft: 10,
		color: '#fefefe',
		fontSize: 16,
	},
	prevention: {
		width: '100%',
		alignItems: 'flex-start',
	},
	preventionTitle: {
		marginTop: 30,
		marginLeft: 30,
		fontSize: 20,
		fontWeight: 'bold',
	},
	preventionScroll: {
		width: '100%',
		minHeight: 150,
	},
	preventionItem: {
		margin: 20,
	},
	preventionImg: {
		width: 105,
		height: 105,
	},
	preventionTxt: {
		marginTop: 10,
		textAlign: 'center',
		fontSize: 15,
		fontWeight: 'bold',
	}
});

export default styles;