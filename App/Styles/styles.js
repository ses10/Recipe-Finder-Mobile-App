'use strict';
var React = require('react-native');
var {
  StyleSheet,
} = React;

module.exports = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    paddingLeft: 30,
    paddingRight: 30,
  },

  /** Recipe List Styles **/
  recipeListView: {
    alignSelf: 'stretch',
    padding: 5,
  },
  recipeRowContainer: {
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
    padding: 5
  },
  recipeRightContainer:{
    flex: 1,
    paddingLeft: 5,
  },
  recipeThumbnail: {
    width: 80,
    height: 55,
  },

});





