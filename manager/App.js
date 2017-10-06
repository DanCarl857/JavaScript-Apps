import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { View, Text } from 'react-native';
import firebase from 'firebase';

import reducers from './src/reducers';
import LoginForm from './src/components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyDiXZFFyD3WtUmRyhtDEF3stsDQ6jkm5ww",
      authDomain: "manager-7e059.firebaseapp.com",
      databaseURL: "https://manager-7e059.firebaseio.com",
      projectId: "manager-7e059",
      storageBucket: "manager-7e059.appspot.com",
      messagingSenderId: "813703843852"
    };
    firebase.initializeApp(config);
  }


  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <LoginForm />
        </View>
      </Provider>
    )
  }
}

export default App;
