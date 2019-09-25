import React from 'react';
import {
    View, 
    Text, 
    TouchableOpacity, 
    TouchableWithoutFeedback
} from 'react-native';
import {withNavigation} from "react-navigation";

import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './Styles/NavBarStyle';

class NavBar extends React.Component{
    goBack = () => {
        const { navigation } = this.props;
        navigation.goBack();
    };
    pressFavorite = () =>{
        const {onPressFavorite} = this.props;
        if(typeof onPressFavorite === "function"){
            onPressFavorite();
        }
    }
    
    backButton = () => {
        const {leftButton} = this.props;
        if(leftButton){
            return (
                <TouchableOpacity onPress={this.goBack}>
                    <Icon name="chevron-left" size={20} color="#000" />
                </TouchableOpacity>
            )
        }
    }

    rightButton = () => {
        const {rightButton, favorite} = this.props;
        if(rightButton){
            if(favorite){
                return(
                    <TouchableWithoutFeedback onPress={this.pressFavorite}>
                        <Icon name="heart" size={20} style={styles.favorite}/>
                    </TouchableWithoutFeedback>
                )
            }else{
                return(
                    <TouchableWithoutFeedback onPress={this.pressFavorite}>
                        <Icon name="heart" size={20} color="#000" />
                    </TouchableWithoutFeedback>
                )
            }
        }
    }
    render(){
        const {title} = this.props;
        return(
            <View 
                {...this.props} 
                style={styles.navBar}>
                <View style={styles.leftContainer}>
                   {this.backButton()} 
                </View>
                <View style={styles.titleWrapper}>
                    <Text style={styles.title}>{title}</Text>
                </View>
                <View style={styles.rightContainer}>
                    {this.rightButton()}
                </View>
            </View>    
        );
    }
}

export default withNavigation(NavBar);