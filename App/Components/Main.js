/*
First view the user will see and begins the recipe
search by prompting user for ingredients. 
*/


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

class Main extends Component {

  constructor(props){
    super(props);
    this.state = {searchString: ''};
  }

  onTextChanged(event){
    this.setState({searchString: event.nativeEvent.text});
  }

  onSearchPressed(){
    this.props.navigator.push({
      title : 'Results',
      component : SearchResults
    });
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