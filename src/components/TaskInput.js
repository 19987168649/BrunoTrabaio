// src/components/TaskInput.js
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
 
const TaskInput = ({ onAddTask }) => {
    const [task, setTask] = useState('');
    const handleAddTask = () => {
        if (task.trim()) {
            onAddTask(task);
            setTask('');
        }   
    };   
    return (
<View style={styles.inputContainer}>
<TextInput
            style={styles.input}
            placeholder="Nova Tarefa"
            placeholderTextColor="#fffacd"
            value={task}
            onChangeText={setTask}/>
<View style={styles.bottao}>
<Button title="Adicionar" onPress={handleAddTask} />
</View>
</View>
    ); 
};
 
const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 50,
        color: '#fffacd',
   },   
   bottao: {
    backgroundColor: '#32248a',
    marginLeft: 10,

   },
 
   input: {
    width: '80%',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    padding: 10,
    },
});
 
export default TaskInput;