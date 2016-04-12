/*
Displays search results of query from Main View
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
} from 'react-native';

class SearchResults extends Component {

  constructor(props) {
    super(props);
    var dataSource = new ListView.DataSource(
      {rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      //recipes retrived from search
      dataSource: dataSource.cloneWithRows(this.props.recipes)
    };

    //bind functions
    this.renderRow = this.renderRow.bind(this);
    this.rowPressed = this.rowPressed.bind(this);

    console.log(this.props.recipes);
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

  //Go to DetailView and 
  //pass clicked recipe to DetailView
  rowPressed(recipeData){
    this.props.navigator.push({
      title : 'DetailView',
      component : DetailView,
      passProps: {recipe: recipeData.recipe,
                  recipeData: recipeData
                },
    });
  }

  //for single row
  renderRow(rowDats){

    var charLimit = 25;
    return(
      <TouchableHighlight onPress={ () => this.rowPressed(rowDats)} underlayColor='transparent'>
        <View style={GlobalStyles.recipeRowContainer}>
          <Image
            style={GlobalStyles.recipeThumbnail}
            source={{uri: rowDats.recipe.image}}
          />
        <View style={GlobalStyles.recipeRightContainer}>
          <Text> {
                  //truncate recipe name if too long
                  ((rowDats.recipe.label).length > charLimit) ? 
                  (((rowDats.recipe.label).substring(0, charLimit - 3)) + '...') :
                  rowDats.recipe.label
                 } 
          </Text>
        </View>
        </View>
      </TouchableHighlight>
    );
  }


}

module.exports = SearchResults;