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
} from 'react-native';

class SavedRecipes extends Component {

  constructor(props) {
    super(props);
    var dataSource = new ListView.DataSource(
      {rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: dataSource.cloneWithRows([{name: 'Chicken Dish 2', url: 'http://images.media-allrecipes.com/images/50819.jpg'},{name: 'Nachos', url: 'http://cms.cb.asmsrv.co/cnvyr/cpprimary/590x393/2013-12-19_Falk-chicken-nachos-recipe-super-bowl.jpg'}, {name: 'Chicken Wings', url: 'http://s345780157.onlinehome.us/wp-content/uploads/2011/03/chicken-wings2.jpg'}, {name: 'Chicken Fingers', url: 'http://foodnetwork.sndimg.com/content/dam/images/food/fullset/2008/3/28/0/NY0108_Chicken-Tenders-with-Honey-Mustard-Sauce.jpg.rend.sni12col.landscape.jpeg'}, {name: 'Chicken Nuggets', url: 'http://www.ourbestbites.com/wp-content/uploads/2013/07/chickennuggets6.jpg'}, {name: 'Insert Name Here', url: 'https://dedemed.com/wp-content/uploads/2014/03/img_0040.jpg'}]),
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
            source={{uri: rowDats.url}}
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