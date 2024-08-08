import React, {useState} from 'react';
import {TextInput, Button, View, StyleSheet} from 'react-native';

const TodoInput = ({addTodo}) => {
  const [text, setText] = useState('');

  const handleAddTodo = () => {
    if (text) {
      addTodo(text);
      setText('');
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Enter a new todo"
        value={text}
        onChangeText={setText}
      />
      <Button title="Add" onPress={handleAddTodo} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 20,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    flex: 1,
    marginRight: 10,
  },
});

export default TodoInput;
