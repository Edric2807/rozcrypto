import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		padding: 20,
		backgroundColor: 'white',
	},
	image: {
		height: 150,
		resizeMode: 'contain',
	},
	balanceContianer: {
		marginVertical: 20,
		width: '100%',
	},
	label: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#777777',
	},
	balance: {
		fontSize: 36,
		fontWeight: 'bold',
	},
});

export default styles;
