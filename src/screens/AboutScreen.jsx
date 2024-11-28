import React from 'react';
import { Text, StyleSheet } from 'react-native';
import MainLayout from '../layouts/MainLayout';

const AboutScreen = () => {
  const currentDate = new Date().toLocaleDateString();

  return (
    <MainLayout>
      <Text style={styles.title}>ToDoList App</Text>
      <Text style={styles.text}>Thu Duong Nguyen</Text>
      <Text style={styles.text}>Current Date: {currentDate}</Text>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    marginVertical: 5,
  },
});

export default AboutScreen;
