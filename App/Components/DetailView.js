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
} from 'react-native';

class DetailView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.resultText}>
          DetailView
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

module.exports = DetailView;