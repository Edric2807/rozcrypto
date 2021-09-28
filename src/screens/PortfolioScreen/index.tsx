import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
const image = require('../../../assets/images/Saly-10.png');

const PortfolioScreen = () => {
	return (
		<View style={styles.container}>
			<Image style={styles.image} source={image} />
			<View style={styles.balanceContianer}>
				<Text style={styles.header2}>Your portfolio balance:</Text>
				<Text style={styles.label}>$79 400</Text>
			</View>
		</View>
	);
};

export default PortfolioScreen;
