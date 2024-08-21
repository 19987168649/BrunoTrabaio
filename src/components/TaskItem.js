// src/components/TaskItem.js 
import React, { useState } from 'react'; 
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
 
const TaskItem = ({ task, onConfirm, onDelete }) => {
    const [isConfirmed, setIsConfirmed] = useState(false);
 
  const handleConfirm = () => {
    setIsConfirmed(true);
    if (onConfirm) {
      onConfirm(task);
    }
  };
    return (
<View style={[styles.item, isConfirmed && styles.confirmed]}>
<View style={styles.content}>
<Text style={styles.taskText}>{task}</Text>
<View style={styles.buttons}>
<TouchableOpacity onPress={handleConfirm} style={styles.button}>
<Text style={styles.buttonText}>Confirmar</Text>
</TouchableOpacity>
<TouchableOpacity onPress={() => onDelete(task)} style={styles.button}>
<Text style={styles.buttonText}>Excluir</Text>
</TouchableOpacity>
</View>
</View>
</View>
    ); 
};
 
const styles = StyleSheet.create({
    item: {
        padding: 10,
        marginVertical: 5,
        marginHorizontal: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,   
    },
    confirmed: {
        backgroundColor: '#d4edda',
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
    taskText: {
        color: '#fff',
        fontSize: 16,
        flex: 1,
    },
    buttons: {
        flexDirection: 'row',
      },
      button: {
        padding: 10,
        backgroundColor: '#412eb8',
        borderRadius: 5,
        margin: 10,
      },
      buttonText: {
        color: '#fff',
      },
});
 
export default TaskItem;