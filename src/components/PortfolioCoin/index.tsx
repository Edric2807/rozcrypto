import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../PortfolioCoin/styles';
import formatMoney from '../../utils/formatMoney';

export interface PortfolioCoinProps {
	portfolioCoin: {
		amount: number;
		coin: {
			id: String;
			image: String;
			name: String;
			symbol: String;
			currentPrice: Number;
		};
	};
}

const PortfolioCoin = (props: PortfolioCoinProps) => {
	const {
		portfolioCoin: {
			amount,
			coin: { id, image, name, symbol, currentPrice },
		},
	} = props;

	const navigation = useNavigation();

	return (
		<Pressable
			style={styles.container}
			onPress={() => navigation.navigate('CoinDetails', { id })}>
			<View style={styles.left}>
				<Image style={styles.image} source={{ uri: image }} />
				<View>
					<Text style={styles.name}>{name}</Text>
					<Text style={styles.symbol}>{symbol}</Text>
				</View>
			</View>
			<View>
				<View style={{ alignItems: 'flex-end' }}>
					<Text style={styles.value}>
						${formatMoney(amount * currentPrice)}
					</Text>
					<Text style={styles.symbol}>{formatMoney(amount)}</Text>
				</View>
			</View>
		</Pressable>
	);
};

export default PortfolioCoin;
