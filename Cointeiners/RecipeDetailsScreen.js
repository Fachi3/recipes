import React, {Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import styles from './Styles/RecipeDetailsScreenStyle';

import NavBar from '../Components/NavBar';

export default class RecipeDetailsScreen extends Component{
    static navigationOptions = {
        title: "Home"
    };

    constructor(props){
        super(props);
        this.state ={
            favorite: false
        }
    }

    renderContent = () => {
        return(
            <View>
                <View style={styles.imageContainer} ></View>
                <View style={styles.infoContainer} ></View>
                <View style={styles.instructionBox} ></View>
                <View style={styles.ingredientsBox} ></View>
            </View>
        );
    }

    renderImage = () =>{
        const {navigation} = this.props;
        const data = navigation.getParam("data", {});

        let imageUrl = "https://baconmockup.com/640/360";
        if(data && data.photo){
            imageUrl = data.photo;
        }
        return <Image source={{uri: imageUrl}} style={styles.recipeImage} />;
    }

    renderInfo = () => {
        const {navigation} = this.props;
        const data = navigation.getParam("data", {});

        <View style={styles.infoContainer}>
            <Text style={styles.category} >{data.categoryName}</Text>
            <Text style={styles.title} >{data.name}</Text>
            <View style={styles.properties} >
                <View style={styles.cell} >
                    <Icon style={styles.cellIcon} name="clock-o" size={20} color="#000" />
                    <Text style={styles.cellText} >{data.duration} Minutos</Text>
                </View>
                <View style={styles.cell} >
                    <Icon style={styles.cellIcon} name="american-sign-language-interpreting" size={20} color="#000" />
                    <Text style={styles.cellText} >{data.complexity}</Text>
                </View>
                <View style={styles.cell} >
                    <IconMaterial style={styles.cellIcon} name="restaurant" size={20} color="#000" />
                    <Text style={styles.cellText} >{data.people} Personas</Text>
                </View>
            </View>
        </View>
    }

    pressFavorite = () => {
        const {favorite} = this.state;
        this.setState({
            favorite: !favorite
        });
    }

    render(){
        const {navigation} = this.props;
        const data = navigation.getParam("data", {});
        //const {favorite} = this.state;
        return(
            <View>
                <NavBar 
                leftButton={true}
                rightButton={true}
                onPressFavorite={this.pressFavorite}
                favorite={this.state.favorite}
                title={data.name} 
                style={styles.navBar} />
                <View style={styles.container}>
                    {this.renderContent()}
                </View>
            </View>
        );
    }
}
