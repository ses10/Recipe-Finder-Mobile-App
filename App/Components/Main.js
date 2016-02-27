'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';

class Main extends Component {
  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.welcome}>
          Welcome to Recipe Finder!
        </Text>
        <Text style={styles.instructions}>
          To get started, enter in ingredients below
        </Text>

        <TextInput style={styles.input} value='Enter Ingredients...'>
        </TextInput>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 100,
    //backgroundColor: 'blue',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    margin: 5,
  },
  input: {
    marginTop: 50,
    height: 40,
    borderWidth: 1,
    borderColor: '#FFF',
    backgroundColor: '#FFF',
  },
});

module.exports = Main;