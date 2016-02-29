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

class SearchResults extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.resultText}>
          Results
        </Text>
      </View>        
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
  resultText:{
    fontSize: 20,
    marginTop: 100,
  }
});

module.exports = SearchResults;