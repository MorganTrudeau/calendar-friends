import React from "react";
import { StyleSheet, View } from "react-native";
// Components
import Calendar from "../components/Calendar";

export default class Home extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Calendar />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: { flex: 1, backgroundColor: "#f2f2f2" }
});
