import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity,
    ScrollView
} from 'react-native';

module.exports = React.createClass({

    getInitialState() {
        return ({
            tasks: ['Take out the trash', 'Get groceries', 'Practice Piano'],
            task: '',
            completedTasks: []
        })
    },

    renderList(tasks) {
        // return individual views or rows based on the argued tasks
        return (
            tasks.map((task, index) => {
                return (
                    <View key={task} style={styles.task}>
                        <Text>
                            {task}
                        </Text>
                        <TouchableOpacity
                            onPress={() => this.completeTask(index)}>
                            <Text>
                                &#10003;
                            </Text>
                        </TouchableOpacity>
                    </View>
                )
            })
        )
    },

    renderCompleted(tasks) {
        return (
            tasks.map((task, index) => {
                return (
                    <View key={task} style={styles.task}> 
                        <Text style={styles.completed}>
                            {task}
                        </Text>
                        <TouchableOpacity
                            onPress={() => this.deleteTask(index)}>
                            <Text>
                                &#10005;
                            </Text>
                        </TouchableOpacity>
                    </View>
                )
            })
        )
    },

    deleteTask(index) {
        let completedTasks = this.state.completedTasks;
        completedTasks = completedTasks.slice(0, index).concat(completedTasks.slice(index+1));
        this.setState({
            completedTasks
        });
    },

    completeTask(index) {
        let tasks = this.state.tasks;
        tasks = tasks.slice(0, index).concat(tasks.slice(index+1));
        
        let completedTasks = this.state.completedTasks;
        completedTasks = completedTasks.concat([this.state.tasks[index]]);
        
        this.setState({
            tasks,
            completedTasks
        });
    },

    addTask() {
        let tasks = this.state.tasks.concat([this.state.task]);
        this.setState({tasks: tasks});
    },

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>
                    To-Do Master
                </Text>
                <TextInput 
                    placeholder='Add a task...'
                    style={styles.input}
                    onChangeText={(text) => {
                        this.setState({task: text});
                    }}
                    onEndEditing={() => this.addTask()}
                />
                <ScrollView>
                    {this.renderList(this.state.tasks)}
                    {this.renderCompleted(this.state.completedTasks)}
                </ScrollView>
            </View>
        )
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        margin: 30,
        marginTop: 40,
        fontSize: 18,
        textAlign: 'center'
    },
    task: {
        flexDirection: 'row',
        height: 60,
        borderBottomWidth: 1, 
        borderColor: 'black',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20
    },
    input: {
        height: 60,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'black',
        textAlign: 'center',
        margin: 10
    }, 
    completed: {
        color: '#555',
        textDecorationLine: 'line-through'
    }
});