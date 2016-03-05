/*
Displays search results of query from Main View
*/

var DetailView = require('./DetailView');

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
      dataSource: dataSource.cloneWithRows([{name: 'Chicken Dish', url: 'data:image/jpeg;base64,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'},{name: 'Chicken Dish 2', url: 'http://images.media-allrecipes.com/images/50819.jpg'},{name: 'Nachos', url: 'http://cms.cb.asmsrv.co/cnvyr/cpprimary/590x393/2013-12-19_Falk-chicken-nachos-recipe-super-bowl.jpg'}, {name: 'Chicken Wings', url: 'http://s345780157.onlinehome.us/wp-content/uploads/2011/03/chicken-wings2.jpg'}, {name: 'Chicken Fingers', url: 'http://foodnetwork.sndimg.com/content/dam/images/food/fullset/2008/3/28/0/NY0108_Chicken-Tenders-with-Honey-Mustard-Sauce.jpg.rend.sni12col.landscape.jpeg'}, {name: 'Chicken Nuggets', url: 'http://www.ourbestbites.com/wp-content/uploads/2013/07/chickennuggets6.jpg'}, {name: 'Insert Name Here', url: 'https://dedemed.com/wp-content/uploads/2014/03/img_0040.jpg'}, {name: 'Chicken Teriyaki', url: 'https://cdn.cpnscdn.com/static.coupons.com/ext/kitchme/images/recipes/600x400/easy-grilled-chicken-teriyaki_18081.jpg'}, {name: 'Chicken Fingers', url: 'http://foodnetwork.sndimg.com/content/dam/images/food/fullset/2008/3/28/0/NY0108_Chicken-Tenders-with-Honey-Mustard-Sauce.jpg.rend.sni12col.landscape.jpeg'}, {name: 'Chicken Fingers', url: 'http://foodnetwork.sndimg.com/content/dam/images/food/fullset/2008/3/28/0/NY0108_Chicken-Tenders-with-Honey-Mustard-Sauce.jpg.rend.sni12col.landscape.jpeg'}, {name: 'Chicken Fingers', url: 'http://foodnetwork.sndimg.com/content/dam/images/food/fullset/2008/3/28/0/NY0108_Chicken-Tenders-with-Honey-Mustard-Sauce.jpg.rend.sni12col.landscape.jpeg'}, {name: 'Chicken Fingers', url: 'http://foodnetwork.sndimg.com/content/dam/images/food/fullset/2008/3/28/0/NY0108_Chicken-Tenders-with-Honey-Mustard-Sauce.jpg.rend.sni12col.landscape.jpeg'}, {name: 'Chicken Fingers', url: 'http://foodnetwork.sndimg.com/content/dam/images/food/fullset/2008/3/28/0/NY0108_Chicken-Tenders-with-Honey-Mustard-Sauce.jpg.rend.sni12col.landscape.jpeg'}]),
    };

    //bind functions
    this.renderRow = this.renderRow.bind(this);
    this.rowPressed = this.rowPressed.bind(this);
  }

  render() {
    return (
      <View style={styles.container}>        
        <ListView
          style={styles.listView}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
        />

      </View>        
    );
  }

  rowPressed(){
    console.log('test\n');
    this.props.navigator.push({
      title : 'DetailView',
      component : DetailView
    });    
  }

  //for single row
  renderRow(rowDats){
    return(
      <TouchableHighlight onPress={this.rowPressed} underlayColor='transparent'>
        <View style={styles.rowContainer}>
          <Image
            style={styles.thumbnail}
            source={{uri: rowDats.url}}
          />
        <View style={styles.rightContainer}>
          <Text style={styles.recipeName}> {rowDats.name} </Text>
        </View>
        </View>
      </TouchableHighlight>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    paddingLeft: 30,
    paddingRight: 30,
  },
  rightContainer:{
    flex: 1,
    alignItems: 'center',
  },

  listView: {
    alignSelf: 'stretch',
    padding: 5,
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'stretch',
    backgroundColor: '#FFF',
    marginTop: 2,
    marginBottom: 2,
    borderRadius: 4,
    shadowOpacity: .5,
    shadowOffset:{height:2},
    alignItems: 'center',
    //justifyContent: 'center',
    padding: 5
  },
  recipeName: {

  },
  thumbnail: {
    width: 80,
    height: 55,
  },
});

module.exports = SearchResults;