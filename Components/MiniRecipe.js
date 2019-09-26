import React from "react";
import {View, Image, TouchableOpacity} from "react-native";
import styles from "./Styles/RecipeRowStyle";

import {withNavigation, withNavigationFocus} from "react-navigation";

class MiniRecipe extends React.Component {
    onPress = () => {
        const {navigation, data} = this.props;
        navigation.navigate("Details", {data});
    }

    renderImage = () =>{
        const {data} = this.props;

        let imageUrl = "https://baconmockup.com/640/360";
        if(data && data.photo){
            imageUrl = data.photo;
        }
        return <Image source={{uri: imageUrl}} style={styles.recipeImage} />;
    }

    render(){
        return(
            <TouchableOpacity onPress={this.onPress}>
                <View style={styles.container}>{this.renderImage()}</View>
            </TouchableOpacity>
        );
    }
}

export default withNavigation(MiniRecipe);