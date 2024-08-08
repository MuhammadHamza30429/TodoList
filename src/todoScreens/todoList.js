import React from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
import TodoItem from '../todoScreens/todoItems';

const TodoList = ({todos, deleteTodo, editTodo}) => {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={todos}
        renderItem={({item}) => (
          <TodoItem item={item} deleteTodo={deleteTodo} editTodo={editTodo} />
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    margin: 20,
  },
});

export default TodoList;
