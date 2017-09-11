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
          <Text>Notes App</Text>
        );
      case 'createNote': 
        return (
          <Text>Create Note</Text>
        );
    }
  }
};

export default class NotesApp extends Component {

  renderScene (route, navigator) {
    switch (route.name) {
      case 'home':
        return (
          <HomeScreen />
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
           />
         }
      />   
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

AppRegistry.registerComponent('NotesApp', () => NotesApp);
