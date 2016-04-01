
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
  ScrollView,
  Image,
} from 'react-native';

class DetailView extends Component {

  constructor(props) {
    super(props);
    var dataSource = new ListView.DataSource(
      {rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: dataSource.cloneWithRows({recipe: this.props.recipe})
    };
 
  }

  render() {
    return (
      <View style={GlobalStyles.container}>
        <ListView
          style = {GlobalStyles.recipeListView}
          dataSource={this.state.dataSource}
          renderRow={this.renderRecipe}
        />
      </View> 
    );
  }


  renderRecipe(recipe){
    console.log(recipe.ingredientLines[0]);
    
    var ingredients = [];
    for(i = 0; i < recipe.ingredientLines.length; i++)
    {
      ingredients.push(
          <Text key={i} style={styles.ingredient}>
            {recipe.ingredientLines[i]}
          </Text>
        );
    }

    return(
        <View style={styles.recipeView}>
          <Text style={styles.recipeTitle}>
            {recipe.label}
          </Text>
          <Image
            style={styles.image}
            source={{uri: recipe.image}}
          />

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Calories per Serving</Text>
            <Text> {parseInt(recipe.calories / recipe.yield )} </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Number of Servings</Text>
            <Text> {parseInt(recipe.yield)} </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              Ingredients
            </Text>

            { ingredients }
          </View>

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
  recipeView:{
    backgroundColor: '#FFF',
    marginTop: 2,
    borderRadius: 4,
    shadowOpacity: .5,
    shadowOffset:{height:2},
    //alignItems: 'center',
    paddingBottom: 5,
  },
  recipeTitle:{
    fontSize: 18,
    margin: 5,
    textAlign: 'center',
  },
  image:{
    width: 290,
    height: 180,
    alignSelf: 'center'
  },

  section:{
    marginTop: 5,
  },
  sectionTitle:{
    fontSize: 16,
    fontWeight: 'bold',
  },

  ingredient:{
    marginTop: 4,
    paddingLeft: 5,
  },
});

module.exports = DetailView;