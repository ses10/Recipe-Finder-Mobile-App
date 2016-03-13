var Main = require('./App/Components/Main');
var SavedRecipes = require('./App/Components/SavedRecipes');


'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TextInput,
  NavigatorIOS,
} from 'react-native';

class recipeFinder extends Component {
  
  render() {
    return (
      <NavigatorIOS
        ref="nav"
        barTintColor='#9DBE67'
        titleTextColor='#FFF'
        backButtonTitle= 'Back'
        rightButtonTitle= 'My Recipes'
        tintColor= '#FFF'
        style={styles.container}
        onRightButtonPress = {() => {
              this.refs.nav.navigator.push({
                title : 'My Recipes',
                component : SavedRecipes,
                rightButtonTitle: ''
              });}}

        initialRoute={{
          title: 'Recipe Finder',
          component: Main
        }} 
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

AppRegistry.registerComponent('recipeFinder', () => recipeFinder);
