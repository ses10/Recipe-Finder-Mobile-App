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

class SearchResults extends Component {

  constructor(props) {
    super(props);
    var dataSource = new ListView.DataSource(
      {rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: dataSource.cloneWithRows([{name: 'Bob'},{name: 'Rob'}]),
    };
  }

  render() {
    return (
      <View style={styles.container}>        
        <ListView
          style={styles.listView}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
        />

      </View>        
    );
  }

  //for single row
  renderRow(rowDats){
    return(
      <View style={styles.rowContainer}>
        <Text style={styles.recipeName}> {rowDats.name} </Text>
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
  },
  listView: {
    alignSelf: 'stretch',
    padding: 5
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'stretch',
    backgroundColor: '#FFF',
    marginTop: 2,
    marginBottom: 2,
    borderRadius: 4,
    shadowOpacity: .5,
    shadowOffset:{height:2},
    alignItems: 'center',
    justifyContent: 'center',
  },
  recipeName: {
    alignSelf: 'center',

  }
});

module.exports = SearchResults;