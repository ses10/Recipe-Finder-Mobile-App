/*
Displays user's saved recipes
*/

var DetailView = require('./DetailView');
var GlobalStyles = require('../Styles/styles')

'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  ListView,
  Image,
  AsyncStorage,
} from 'react-native';

class SavedRecipes extends Component {

  constructor(props) {
    super(props);
    var dataSource = new ListView.DataSource(
      {rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: dataSource.cloneWithRows(this.props.recipes)
    };
    //bind functions
    this.renderRow = this.renderRow.bind(this);
    this.rowPressed = this.rowPressed.bind(this);
  }

  render() {
    return (
      <View style={GlobalStyles.container}>        
        <ListView
          style={GlobalStyles.recipeListView}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
        />

      </View>        
    );
  }

  rowPressed(){
    this.props.navigator.push({
      title : 'DetailView',
      component : DetailView
    });  
  }

  //for single row
  renderRow(rowDats){
    return(
      <TouchableHighlight onPress={this.rowPressed} underlayColor='transparent'>
        <View style={GlobalStyles.recipeRowContainer}>
          <Image
            style={GlobalStyles.recipeThumbnail}
            source={{uri: rowDats.recipe.image}}
          />
        <View style={GlobalStyles.recipeRightContainer}>
          <Text> {rowDats.name} </Text>
        </View>
        </View>
      </TouchableHighlight>
    );
  }


}

module.exports = SavedRecipes;