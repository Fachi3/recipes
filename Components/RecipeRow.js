import React from "react";
import {View} from "react-native";

import styles from "./Styles/RecipeRowStyle";

class RecipeRow extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.imageConteiner}></View>
                <View style={styles.infoContainer}></View>
            </View>
        );
    }
}

export default RecipeRow;