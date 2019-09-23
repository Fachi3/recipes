import React, {Component} from 'react';
import {View} from 'react-native';
import styles from './Styles/ExploreScreenStyle';

import NavBar from '../Components/NavBar';
import RecipeRow from '../Components/RecipeRow';

export default class ExploreScreen extends Component{
  static navigationOptions = {
    title: "Explore"
  };

  constructor(props){
    super(props);

    console.log("Constructor in explorer");
  }

  render(){
    return(
      <View>
        <NavBar leftButton={false} rightButton={false} title="Explore" />
        <RecipeRow />
        <View style={styles.container}></View>
      </View>
    );
  }
}
