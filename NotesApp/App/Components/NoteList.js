import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ListView,
    TouchableHighlight
} from 'react-native';

export default class NoteList extends Component {

    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    }

    _onPress (rowData) {
        this.props.navigator.push({
            name: 'createNote',
            note: {
                title: rowData.title,
                body: rowData.body,
                id: rowData.id
            }
        });
    }

    render() {
        return (
            <ListView
                dataSource={
                    this.ds.cloneWithRows([
                        {title: "Note 1", body: "Body 1", id: 1},
                        {title: "Note 2", body: "Body 2", id: 2}
                    ])
                }
                renderRow={(rowData) => {
                    return (
                        <TouchableHighlight 
                            onPress={() => this._onPress(rowData)}
                        >
                            <Text>{rowData.title}</Text>
                        </TouchableHighlight>
                    )
                }}
            />
        )
    }
}