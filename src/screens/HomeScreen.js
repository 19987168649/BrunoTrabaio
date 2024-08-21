// src/screens/HomeScreen.js 
import React, { useState } from 'react'; 
import { View, FlatList, StyleSheet, Text } from 'react-native'; 
import TaskInput from '../components/TaskInput'; 
import TaskItem from '../components/TaskItem'; 
const HomeScreen = () => {
    const [tasks, setTasks] = useState([]);   
 
    const handleAddTask = (task) => {     
        setTasks((prevTasks) => [...prevTasks, { id: Date.now().toString(), text: task, confirmed: false }]);  
    };   
 
    const handleConfirmTask = (taskToConfirm) => {
        setTasks((prevTasks) =>
          prevTasks.map((task) =>
            task.id === taskToConfirm.id ? { ...task, confirmed: true } : task
          )
        );
      };
      const handleDeleteTask = (taskToDelete) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskToDelete.id));
      };
    return (     
<View style={styles.container}>       
<TaskInput onAddTask={handleAddTask} />       
<FlatList         
    data={tasks}         
    renderItem={({ item }) => (
<TaskItem
          task={item.text}
          onConfirm={() => handleConfirmTask(item)}
          onDelete={() => handleDeleteTask(item)}
        />
      )}      
    keyExtractor={(item) => item.id}       
    />     
</View>   
    ); 
};
 
const styles = StyleSheet.create({   
    container: {     
        backgroundColor: '#575757',
        flex: 1,     
        paddingTop: 50,   
    }, 
});
 
export default HomeScreen;