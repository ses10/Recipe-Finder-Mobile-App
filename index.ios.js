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
  AsyncStorage,
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

              var recipes = new Array();

              AsyncStorage.getAllKeys()
                .then((keys)=>{ AsyncStorage.multiGet(keys)
                                    .then(results => {
                                      for(data in results)
                                      {
                                        recipes.push(JSON.parse(results[data][1]));
                                      } 
                                      //now pass saved recipes to SavedRecipes view
                                      this.refs.nav.navigator.push({
                                                      title : 'My Recipes',
                                                      component : SavedRecipes,
                                                      rightButtonTitle: '',
                                                      passProps: {recipes: recipes},
                                                    });
                    
                                    }).done(); 
                }).done();
            }}

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
