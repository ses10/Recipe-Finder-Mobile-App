/*
First view the user will see and begins the recipe
search by prompting user for ingredients. 
*/

var GLOBAL = require('../credentials.js');
var SearchResults = require('./SearchResults');
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
} from 'react-native';

//Creates url query string for Edamam API and returns it
function generateQuery(ingredients){

    var params = {
      q: ingredients,
      app_id: GLOBAL.API_ID,
      app_key: GLOBAL.API_KEY,
    };

    var paramString = [];
    for(var key in params)
      paramString.push(encodeURIComponent(key) + '=' + encodeURIComponent(params[key]));

    return 'https://api.edamam.com/search?' + paramString.join('&');
}

class Main extends Component {

  constructor(props){
    super(props);
    this.state = {searchString: ''};
  }

  onTextChanged(event){
    this.setState({searchString: event.nativeEvent.text});
  }

  //handles API reponse
  hdlResponse(response){
    //go to Search Results view with 
    //newly found recipes
    this.props.navigator.push({
      title : 'Results',
      component : SearchResults,
      passProps: {recipes: response.hits},
    });
  }

  //intializes API request
  executeQuery(query){
    fetch(query)
        .then(response => response.json())
        .then(responseData => this.hdlResponse(responseData))
        /*TODO  **/
        .catch( function(){ 


         } );
  }

  onSearchPressed(event){
    query = generateQuery(this.state.searchString);
    this.executeQuery(query);
  }

  render() {
    return (
      <View style={GlobalStyles.container}>

        <Text style={styles.welcome}>
          Welcome to Recipe Finder!
        </Text>
        <Text style={styles.instructions}>
          To get started, enter in ingredients below
        </Text>

        <TextInput style={styles.input} onChange={this.onTextChanged.bind(this)} placeholder='Enter Ingredients...'/>
        
        <View style={styles.flowRight}>
          <TouchableHighlight style={styles.button}  onPress={this.onSearchPressed.bind(this)} underlayColor='#E62E00'>
            <Text style={styles.buttonText}>Search</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  welcome: {
    fontSize: 20,
    marginTop: 100,
  },
  instructions: {
    color: '#333333',
    marginTop: 5,
  },
  input: {
    marginTop: 50,
    height: 40,
    padding: 10,
    borderRadius: 4,
    backgroundColor: '#FFF',
  },
  flowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  button: {
    flexDirection: 'row',
    flex: 1,
    height: 40,
    backgroundColor: '#FF3300',
    marginTop: 30,
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

module.exports = Main;