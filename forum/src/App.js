import React, { Component } from 'react';
import ThreadDisplay from './ThreadDisplay/component/ThreadDisplay';
import firebase from 'firebase/app'
import 'firebase/database';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    const config = {
     // put your own config here
    };

    this.app = firebase.initializeApp(config);
    this.database = this.app.database;
  }

  render() {
    return (
      <ThreadDisplay database={this.app.database} />
    );
  }
}

export default App;
