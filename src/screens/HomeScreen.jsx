import React, { useState } from 'react';
import { Button } from 'react-native';
import MainLayout from '../layouts/MainLayout';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';

const HomeScreen = ({ navigation }) => {
    const [tasks, setTasks] = useState([
        'Do laundry',
        'Go to gym',
        'Walk dog'
      ]);

      const addTask = (taskText) => {
        if (!taskText) {
          console.error("Error: Task is empty");
          return;
        }
        setTasks([...tasks, taskText]);
      };

    return (
        <MainLayout>
            <ToDoForm addTask={addTask} />
            <ToDoList tasks={tasks} />
            <Button title="Go to About" onPress={() => navigation.navigate('About')} />
        </MainLayout>
    );
};

export default HomeScreen;
