import React from "react";
import {View, Image, Text} from "react-native";

import Icon from 'react-native-vector-icons/FontAwesome';
import styles from "./Styles/RecipeRowStyle";

class RecipeRow extends React.Component{
    renderImage = () =>{
        const {data} = this.props;

        let imageUrl = "https://baconmockup.com/640/360";
        if(data && data.photo){
            imageUrl = data.photo;
        }
        return <Image source={{uri: imageUrl}} style={styles.recipeImage} />;
    }
    render(){
        
        const {data} = this.props;

        return(
            <View style={styles.container}>
                <View style={styles.imageConteiner}>
                    {this.renderImage()}
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.category} >{data.categoryName}</Text>
                    <Text style={styles.title} >{data.name}</Text>
                    <View style={styles.properties} >
                        <View style={styles.cell} >
                            <Icon style={styles.cellIcon} name="home" size={20} color="#000" />
                            <Text style={styles.cellText} >{data.duration} Minutos</Text>
                        </View>
                        <View style={styles.cell} >
                            <Icon style={styles.cellIcon} name="american-sign-language-interpreting" size={20} color="#000" />
                            <Text style={styles.cellText} >{data.complexity}</Text>
                        </View>
                        <View style={styles.cell} >
                            <Icon style={styles.cellIcon} name="group" size={20} color="#000" />
                            <Text style={styles.cellText} >{data.people} Personas</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

export default RecipeRow;