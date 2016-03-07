//http://api.nestoria.co.uk/api?county=uk&pretty=1&encoding=json&listing_type=buy&action=search_listing&page=1&place_name=london

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
  ScrollView,
  Image,
} from 'react-native';

class DetailView extends Component {

  constructor(props) {
    super(props);
    var dataSource = new ListView.DataSource(
      {rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: dataSource.cloneWithRows([{name: 'Chicken Fingers', url: 'http://foodnetwork.sndimg.com/content/dam/images/food/fullset/2008/3/28/0/NY0108_Chicken-Tenders-with-Honey-Mustard-Sauce.jpg.rend.sni12col.landscape.jpeg'}]),
    };
 
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          style = {styles.listView}
          dataSource={this.state.dataSource}
          renderRow={this.renderRecipe}
        />
      </View> 
    );
  }


  renderRecipe(recipeData){
    return(
        <View style={styles.recipeView}>
          <Text style={styles.recipeTitle}>
            {recipeData.name}
          </Text>
          <Image
            style={styles.image}
            source={{uri: recipeData.url}}
          />
          <Text>
            Ingredients
          </Text>
          <Text>
            -Ingredient
          </Text>
          <Text>
            -Ingredient
          </Text>
          <Text>
            -Ingredient
          </Text>
          <Text>
            -Ingredient
          </Text>
          <Text>
            -Ingredient
          </Text>
          <Text>
            -Ingredient
          </Text>
          <Text>
            -Ingredient
          </Text>
          <Text>
            Recipe
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed lectus metus. Aliquam finibus maximus elit vitae sodales. Phasellus vulputate scelerisque dui ut laoreet. Integer ac nisi vel mi tincidunt pretium. Sed libero tortor, maximus eu diam nec, lobortis pellentesque libero. Donec viverra a libero a rhoncus. Sed sodales gravida dolor in blandit. Cras at ante maximus, vestibulum nisi vitae, volutpat quam. Suspendisse lacinia venenatis ante vitae facilisis. Suspendisse leo purus, tincidunt id ipsum at, porta laoreet lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis ex purus, porta sit amet maximus eu, consectetur at magna. Pellentesque non condimentum tellus, commodo placerat nisl. Ut magna nisl, dictum in feugiat sed, congue quis velit.

Aenean viverra laoreet cursus. Integer laoreet fermentum arcu, sed dictum tellus lobortis id. Vestibulum libero orci, sagittis non fringilla in, dictum eu tortor. Ut commodo mi ut ipsum semper feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet tortor nisi. Proin sit amet egestas dui. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas facilisis dolor ultricies porta laoreet.
          </Text>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 0,
    backgroundColor: '#F8F8F8',
    alignItems: 'center',
  },
  listView: {
    //backgroundColor: 'black',
    alignSelf: 'stretch',
    padding: 5,
  },
  recipeView:{
    backgroundColor: '#FFF',
    marginTop: 2,
    borderRadius: 4,
    shadowOpacity: .5,
    shadowOffset:{height:2},
    alignItems: 'center',
    paddingBottom: 5,
  },
  recipeTitle:{
    fontSize: 18,
    margin: 5,
  },
  image:{
    width: 290,
    height: 180,
  }
});

module.exports = DetailView;