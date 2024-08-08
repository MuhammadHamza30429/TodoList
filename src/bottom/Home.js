import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import TodoInput from '../todoScreens/todoInPuts';
import TodoList from '../todoScreens/todoList';

const Home = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = text => {
    setTodos([...todos, {id: Date.now(), text}]);
  };

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos(
      todos.map(todo => (todo.id === id ? {...todo, text: newText} : todo)),
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});

export default Home;
