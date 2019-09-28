import React from "react";
import {View, Text, TouchableOpacity} from "react-native";
import styles from "./Styles/CategoryRowStyle";
import {withNavigation} from "react-navigation";

import Icon from 'react-native-vector-icons/FontAwesome5';

class CategoryRow extends React.Component{
    onPress = () => {
        const {navigation, data} = this.props;
        navigation.navigate("Category", {category: data});
    }

    render(){
        const {data} = this.props;
        return(
            <TouchableOpacity onPress={this.onPress}>
                <View style={styles.container}>
                    <View style={styles.properties} >
                        <View style={styles.cell}>
                            <Text style={styles.title} >
                                <Icon style={styles.cellIcon} name={data.icon} size={20} color="#000" /> 
                                {data.name}
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

export default withNavigation(CategoryRow);