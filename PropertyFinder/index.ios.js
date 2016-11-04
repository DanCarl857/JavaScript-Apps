'use strict';

var React = require('react');
var ReactNative = require('react-native');

var styles = ReactNative.StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  }, 
  container: {
    flex: 1
  }
});

class HelloWorld extends React.Component {
  render() {
    return <ReactNative.Text style={styles.text}>Hello World (Again)</ReactNative.Text>;
  }
}


class PropertyFinderApp extends React.Component {
  render() {
    return (
      <ReactNative.NavigatorIOS
        style={styles.container}
        initialRoute = {{ title: 'Property Finder', component: HelloWorld, }} 
      />
    );
  }
}

// entry point to the application and provides the root component
ReactNative.AppRegistry.registerComponent('PropertyFinder', function() { return PropertyFinderApp });