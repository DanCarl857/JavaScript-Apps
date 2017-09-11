import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView
} from 'react-native';

// Components
import SimpleButton from './SimpleButton';
import NoteList from './NoteList';

export default class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    }

    render() {
        return (
            <View style={styles.container}>
                <NoteList navigator={this.props.navigator}/>
                <Text style={styles.noNotesText}>You haven't created any notes!</Text>
            
                <SimpleButton
                    onPress={ () => this.props.navigator.push({
                        name: 'createNote'
                    })}
                    customText="Create Note"
                    style={styles.simpleButton}
                    textStyle={styles.simpleButtonText}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 70
  },
  noNotesText: {
      color: '#48209A',
      marginBottom: 10
  },
  simpleButton: {
    backgroundColor: '#5B29C1',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderColor: '#48209A',
    borderWidth: 1,
    borderRadius: 4,
    shadowColor: 'darkgrey',
    shadowOffset: {
      width: 1,
      height: 1
    },
    shadowRadius: 1,
  },
  simpleButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16
  }
});