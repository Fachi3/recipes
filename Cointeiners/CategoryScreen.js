import React, {Component} from 'react';
import {View, FlatList} from 'react-native';
import styles from './Styles/CategoryScreenStyle';

import NavBar from '../Components/NavBar';
import CategoryRow from '../Components/CategoryRow';

const CategoryList = [
  {
    id: "1111",
    name: "Mixtos",
    icon: "mortar-pestle",
  },
  {
    id: "2222",
    name: "Pescado",
    icon: "fish"
  },
  {
    id: "3333",
    name: "Entradas",
    icon: "egg",
  },
  {
    id: "4444",
    name: "Carne",
    icon: "hotdog"
  }
];

export default class ExploreScreen extends Component{
  static navigationOptions = {
    title: "Categories"
  };

  constructor(props){
    super(props);

    console.log("Constructor in category");
  }

  keyExtractor = (item, index) => item.id;
  renderList = () => {
    return(
      <FlatList
        contentContainerStyle={styles.listContent}
        keyExtractor={this.keyExtractor}
        data={CategoryList}
        renderItem={({item}) => <CategoryRow data={item} />}
      /> 
    );
  }

  render(){
    return(
      <View style={[styles.mainScreen]} >
        <NavBar leftButton={false} rightButton={false} title="Categories" />
        <View style={styles.container}>
          {this.renderList()}
        </View>
      </View>
    );
  }
}