import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, 
} from 'react-native';

// TODO: port to new Navigator component
import { Navigator } from 'react-native-deprecated-custom-components';

// Components
import SimpleButton from './App/Components/SimpleButton';
import NoteScreen from './App/Components/NoteScreen';
import HomeScreen from './App/Components/HomeScreen';

var NavigationBarRouteMapper = {
  LeftButton: function(route, navigator, index, navState) {
    switch (route.name) {
      case 'createNote': 
        return (
          <SimpleButton
            onPress={() => navigator.pop()}
            customText='Back'
            style={styles.navBarLeftButton}
            textStyle={styles.navBarButtonText}
          />
        );
      default: 
        return null;
    }
  },

  RightButton: function(route, navigator, index, navState) {
    switch(route.name) {
      case 'home':
        return (
          <SimpleButton
            onPress={() => {
              navigator.push({
                name: 'createNote'
              });
            }}
            customText='Create Note'
            style={styles.navBarRightButton}
            textStyle={styles.navBarButtonText}
          />
        );
      default: 
        return null;
    }
  },

  Title: function(route, navigator, index, navState) {
    switch (route.name) {
      case 'home': 
        return (
          <Text style={styles.navBarTitleText}>Notes App</Text>
        );
      case 'createNote': 
        return (
          <Text style={styles.navBarTitleText}>Create Note</Text>
        );
    }
  }
};

export default class NotesApp extends Component {

  constructor(props) {
    super(props);
    // StatusBarIOS.setStyle('light-content');
  }

  renderScene (route, navigator) {
    switch (route.name) {
      case 'home':
        return (
          <HomeScreen navigator={navigator}/>
        );
      case 'createNote':
        return (
          <NoteScreen />
        );
    }
  }

  render() {
    return (
      <Navigator
         initialRoute={{name: 'home'}}
         renderScene={this.renderScene}
         navigationBar={
           <Navigator.NavigationBar
              routeMapper={NavigationBarRouteMapper}
              style={styles.navBar}
           />
         }
      />   
    );
  }
}

const styles = StyleSheet.create({
  navContainer: {
    flex: 1
  },
  navBar: {
    backgroundColor: '#5B29C1',
    borderBottomColor: '#48209A',
    borderBottomWidth: 1
  },
  navbarTitleText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
    marginVertical: 16,
    paddingTop: 10
  },
  navBarLeftButton: {
    paddingLeft: 10
  },
  navBarRightButton: {
    paddingRight: 10
  },
  navBarButtonText: {
    color: '#EEE',
    fontSize: 16,
    marginVertical: 10
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

AppRegistry.registerComponent('NotesApp', () => NotesApp);
