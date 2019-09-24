import React from "react";
import {View, TouchableOpacity} from "react-native";
import styles from "./Styles/TabBarStyle";

import CustomIcon from "../Components/CustomIcon";

class TabBar extends React.Component{
    renderTab = ({ route, icon }) => {
        const { selected } = this.props;
        return (
          <TouchableOpacity style={styles.tab}>
            <CustomIcon
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
            {this.renderTab({ route: "explore", icon: "home-1" })}
            {this.renderTab({ route: "categories", icon: "recipes" })}
            {this.renderTab({ route: "favorites", icon: "favorites" })}
          </View>
        );
    }
}

export default TabBar;