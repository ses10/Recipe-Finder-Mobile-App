var Main = require('./App/Components/Main');

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
        barTintColor='#9DBE67'
        titleTextColor='#FFF'
        backButtonTitle= 'Back'
        rightButtonTitle= 'Menu'
        tintColor= '#FFF'
        
        style={styles.container}
        initialRoute={{
          title: 'Recipe Finder',
          component: Main,
        }} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

AppRegistry.registerComponent('recipeFinder', () => recipeFinder);
