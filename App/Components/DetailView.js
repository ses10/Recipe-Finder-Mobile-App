
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
  Linking,
  AlertIOS,
  AsyncStorage,
} from 'react-native';

class DetailView extends Component {

  constructor(props) {
    super(props);
    var dataSource = new ListView.DataSource(
      {rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: dataSource.cloneWithRows({recipe: this.props.recipe})
    };
    
    //bind functions
    this.renderRecipe = this.renderRecipe.bind(this);
    this.onSavePress = this.onSavePress.bind(this);
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

  onSavePress(){

      //save current recipe to storage, use uri as key
      AsyncStorage.setItem(this.props.recipe.uri, JSON.stringify(this.props.recipe));
      AlertIOS.alert('Recipe Saved');
  }

  renderRecipe(recipe){

    var ingredients = [];
    for(i = 0; i < recipe.ingredientLines.length; i++)
    {
      ingredients.push(
          <Text key={i} style={styles.ingredient}>
            {recipe.ingredientLines[i]}
          </Text>
        );
    }

    //we only want certain nutritional info
    var nutrientKeys = ['FAT', 'CHOCDF', 'FIBTG', 'PROCNT', 'NA', 'CA', 'MG', 'K', 'FE', 'ZN', 'P', 'VITA_RAE', 'VITC', 'VITB6A', 'TOCPHA', 'VITK1'];
    var nutrients= [];

    for(nutrient of nutrientKeys){
      nutrients.push(
        <View key={nutrient} style={styles.nutrientContainer}>
          <Text style={styles.leftText}>{recipe.totalNutrients[nutrient].label}</Text>
          <Text style={styles.rightText}>{parseInt(recipe.totalNutrients[nutrient].quantity / recipe.yield)}{recipe.totalNutrients[nutrient].unit}</Text>
        </View>);
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

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Nutrients per Serving</Text>
            { nutrients }
          </View>

          <TouchableHighlight style={styles.button} onPress={()=> {Linking.openURL(recipe.url)}} underlayColor='#E62E00'>
            <Text style={styles.buttonText}>Go to Recipe</Text>
          </TouchableHighlight>

          <TouchableHighlight style={styles.button}  onPress={ ()=>this.onSavePress() } underlayColor='#E62E00'>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableHighlight>

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
    paddingLeft: 5,
  },
  sectionTitle:{
    fontSize: 16,
    fontWeight: 'bold',
  },

  ingredient:{
    marginTop: 4,
    paddingLeft: 5,
  },

  nutrientContainer:{
    flex:1,
    flexDirection: 'row',
  },
  leftText:{
    flex: 1,
    paddingLeft: 5,
  },
  rightText:{
    flex: 2,
    textAlign: 'right',
    paddingRight: 10,
  },

  button: {
    flexDirection: 'row',
    flex: 1,
    height: 40,
    backgroundColor: '#FF3300',
    margin: 15,
    marginTop: 12,
    marginBottom: 5,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOpacity: .5,
    shadowOffset:{height:2}
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
  },
});

module.exports = DetailView;