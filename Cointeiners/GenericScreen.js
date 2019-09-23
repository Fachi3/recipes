import React, {Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import styles from './Styles/GenericScreenStyle';

import NavBar from '../Components/NavBar';

export default class GenericScreen extends Component{
  static navigationOptions = {
    title: "Home"
  };

  constructor(props){
    super(props);

    this.state ={
      favorite: false
    }
  }

  pressFavorite = () => {
    const {favorite} = this.state;
    this.setState({
      favorite: !favorite
    });
  }

  render(){
    const {favorite} = this.state;
    return(
      <View>
        <NavBar 
          leftButton={true}
          rightButton={true}
          onPressFavorite={this.pressFavorite}
          favorite={favorite}
          title="Titulos" 
          style={styles.navBar} />
      </View>
    );
  }
}
