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
                <View style={styles.inputContainer}>
                    <TextInput 
                        ref="title"
                        autoFocus={true}
                        placeholder="Untitled"
                        style={[styles.textInput, styles.title]}
                        onEndEditing={(text) => {this.refs.body.focus()}}
                        textAlignVertical="top"
                        underlineColorAndroid="transparent"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput 
                        ref="body"
                        multiline={true}
                        placeholder="Start typing" 
                        style={[styles.textInput, styles.body]}
                        textAlignVertical="top"
                        underlineColorAndroid="transparent"
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        marginTop: 64,
        flexDirection: 'column'
    },
    title: {
        height: 40
    },
    body: {
        flex: 1
    },
    inputContainer: {
        borderBottomColor: '#9E7CE3',
        borderBottomWidth: 1,
        flexDirection: 'row',
        marginBottom: 25
    },
    textInput: {
        flex: 1,
        fontSize: 16,
        paddingBottom: 10
    }
});