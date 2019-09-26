import React, {Component} from 'react';
import {View, Text, Image, ScrollView, StatusBar} from 'react-native';
import styles from './Styles/RecipeDetailsScreenStyle';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';

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
        
        return(
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
        );
    }

    renderIngredients = () => {
        const {navigation} = this.props;
        const data = navigation.getParam("data", {});

        if(data.ingredients){
            return(
                <View style={styles.infoBox}>
                    <Text style={styles.header}>Ingredientes</Text>
                    <Text style={styles.description}>{data.ingredients}</Text>
                </View>
            );
        }
    }
    
    renderInstructions = () => {
        const {navigation} = this.props;
        const data = navigation.getParam("data", {});
        
        if(data.description){
            return(
                <View style={styles.infoBox}>
                    <Text style={styles.header}>Preparación</Text>
                    <Text style={styles.description}>{data.description}</Text>
                </View>
            );
        }
    }

    pressFavorite = () => {
        const {favorite} = this.state;
        this.setState({
            favorite: !favorite
        });
    }

    renderContent = () => {
        return(
            <View style={styles.container}>
                <View style={styles.imageConteiner}>
                    {this.renderImage()}
                    <View style={styles.darkener} />
                </View>
                {this.renderInfo()}
                {this.renderIngredients()}
                {this.renderInstructions()}
            </View>
        );
    }

    render(){
        const {navigation} = this.props;
        const data = navigation.getParam("data", {});
        //const {favorite} = this.state;
        return(
            <View>
                <StatusBar barStyle="light-content"/>
                <NavBar 
                leftButton={true}
                rightButton={true}
                transparent={true}
                onPressFavorite={this.pressFavorite}
                favorite={this.state.favorite}
                style={styles.navBar} />
                <ScrollView>
                    {this.renderContent()}
                </ScrollView>
            </View>
        );
    }
}
