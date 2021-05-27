import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, TouchableOpacity, Keyboard } from 'react-native';
import Task from './components/Task';

export default function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([])

  const addTask = (newTask) => {
    if (!newTask == "" && taskList.indexOf(newTask) == -1) {
      setTaskList([...taskList, newTask])
      setTask("")
      Keyboard.dismiss()
    }
  }

  const removeTask = (deleteTask) => {
    setTaskList(taskList.filter((task) => {
      return task !== deleteTask
    }))
  }

  const onPress = (e) => {
    addTask(task)
  }

  const onChangeText = (text) => {
    setTask(text);
  }

  const tasks = taskList.map((task, i) => {
    return <Task key={i} text={task} removeTask={removeTask} />
  })

  return (
    <View style={styles.container}>
      <View style={styles.tasksSection}>
        <Text style={styles.todoTodayText}>Todo today</Text>
        {tasks}
      </View>
      <KeyboardAvoidingView style={styles.controls}>
        <TextInput placeholder="Add task" value={task} onChangeText={onChangeText} style={styles.taskInput} />
        <TouchableOpacity onPress={onPress} style={styles.addTaskButton}>
          <Text style={styles.plusText}>+</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8C82FF',
    flexDirection: "column",
    justifyContent: "space-between",
  },
  tasksSection: {
    marginTop: 20,
    paddingTop: 40,
    paddingHorizontal: 20,
    flexDirection: 'column',
    justifyContent: "flex-start",
    height: 500,
    overflow: 'scroll',
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 335,
    height: 60,
    paddingBottom: 80,
    paddingHorizontal: 20,
  },
  taskInput: {
    width: 246,
    height: 45,
    backgroundColor: '#ffffff',
    borderRadius: 60,
    paddingLeft: 10,
  },
  addTaskButton: {
    width: 60,
    height: 60,
    backgroundColor: '#ffffff',
    borderRadius: 52,
    marginLeft: 29,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusText: {
    color: '#55BCF6',
    fontSize: 36,
  },
  todoTodayText: {
    color: '#ffffff',
    fontSize: 36,
  }
});
