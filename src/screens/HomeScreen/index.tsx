import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
const image = require('../../../assets/images/Saly-1.png');

const HomeScreen = () => {
	return (
		<View style={styles.container}>
			<Image style={styles.image} source={image} />
			<Text style={styles.header1}>RozCrypto - Find, Track, Invest!</Text>
			<Text style={styles.header2}>Invest in the future without fear!</Text>
		</View>
	);
};

export default HomeScreen;
