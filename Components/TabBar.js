import React from "react";
import {View, TouchableOpacity} from "react-native";
import styles from "./Styles/TabBarStyle";
import {withNavigation} from "react-navigation";

import Icon from 'react-native-vector-icons/FontAwesome5';

class TabBar extends React.Component{
	navigate = route => {
		const { navigation } = this.props;
		switch (route) {
			case "explore":
			navigation.navigate({
				routeName: "Explore"
			});
			break;
			case "categories":
			navigation.navigate({
				routeName: "Categories"
			});
			break;
			case "favorites":
			navigation.navigate({
				routeName: "Favorites"
			});
			break;
		}
	};
  	renderTab = ({ route, icon }) => {
		const { selected } = this.props;
		return (
			<TouchableOpacity style={styles.tab} onPress={() => this.navigate(route)}>
			<Icon
				name={icon}
				style={[
				styles.tabIcon,
				selected === route ? styles.selectedIcon : null
				]}
			/>
			{selected === route && <View style={styles.tabLine} />}
			</TouchableOpacity>
		);
  	};
  	render() {
		return (
			<View style={styles.container}>
				{this.renderTab({ route: "explore", icon: "home" })}
				{this.renderTab({ route: "categories", icon: "receipt" })}
				{this.renderTab({ route: "favorites", icon: "heart" })}
			</View>
		);
  	}
}

export default withNavigation(TabBar);