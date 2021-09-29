import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import styles from './styles'
import { FlatList } from 'react-native-gesture-handler';
import PortfolioCoin from '../../components/PortfolioCoin';
import styles from './styles';
const image = require('../../../assets/images/Saly-10.png');

const portfolioCoins = [
	{
		id: '1',
		name: 'Virtual USD',
		image: '',
		symbol: 'USD',
		amount: 238.42,
		valueUSD: 238.42,
	},
	{
		id: '2',
		name: 'BlueCoin',
		image: '',
		symbol: 'USD',
		amount: 8.31,
		valueUSD: 38.42,
	},
	{
		id: '3',
		name: 'RedCoin',
		image: '',
		symbol: 'USD',
		amount: 1.6,
		valueUSD: 28.42,
	},
	{
		id: '4',
		name: 'WhiteCoin',
		image: '',
		symbol: 'USD',
		amount: 1.22,
		valueUSD: 1238.42,
	},
];
const PortfolioScreen = () => {
	return (
		<View style={styles.container}>
			<Image style={styles.image} source={image} />
			<View style={styles.balanceContainer}>
				<Text style={styles.label}>Your portfolio balance:</Text>
				<Text style={styles.balance}>$79 400</Text>
			</View>
			<FlatList 
				data={portfolioCoins}
				renderItem={({}) => <PortfolioCoin portfolioCoin={item} />
				
				/>
		</View>	
		</View>
	);
};

export default PortfolioScreen;
