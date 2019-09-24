import React from "react";
import {View, Text} from "react-native";
import styles from "./Styles/CategoryRowStyle";

import Icon from 'react-native-vector-icons/FontAwesome5';

class CategoryRow extends React.Component{
    render(){
        const {data} = this.props;
        return(
            <View style={styles.container}>
                <View style={styles.properties} >
                    <View style={styles.cell}>
                        <Icon style={styles.cellIcon} name={data.icon} size={20} color="#000" />
                        <Text style={styles.cellText} >{data.name}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

export default CategoryRow;