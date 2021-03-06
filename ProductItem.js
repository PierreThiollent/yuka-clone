import React from "react";
import {Dimensions, StyleSheet, Text, TouchableOpacity} from "react-native";

export default class ProductItem extends React.Component {
	render() {
		return (
			<TouchableOpacity onPress={() => {}}
												style={styles.products}>
				<Text style={styles.productsTitle}>{this.props.detail.name}</Text>
				<Text style={styles.productsTitle}>{this.props.detail.id}</Text>
				<Text style={styles.productsTitle}>{this.props.detail.date.toLocaleDateString()}</Text>
			</TouchableOpacity>
		)
	}
}
const styles = StyleSheet.create({
	products: {
		padding: 20,
		width: 100 + '%',
		borderBottomWidth: 1
	},
	productsTitle: {
		width: Dimensions.get('window').width,
		fontSize: 18,
	}
});