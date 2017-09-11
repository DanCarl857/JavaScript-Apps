import React, { Component } from 'react';
import {
    StyleSheet,
    TextInput,
    View
} from 'react-native';

export default class NoteScreen extends Component {
    render () {
        return (
            <View style={styles.container}>
                <TextInput 
                    ref="title"
                    autoFocus={true}
                    placeholder="Untitled"
                    style={styles.title}
                    onEndEditing={(text) => {this.refs.body.focus()}}
                />
                <TextInput 
                    ref="body"
                    multiline={true}
                    placeholder="Start typing" 
                    style={styles.body}
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
        marginTop: 64
    },
    title: {
        height: 40
    },
    body: {
        flex: 1
    }
});