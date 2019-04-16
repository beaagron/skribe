import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const TaskInput = ({ inputValue, onChangeText, onDoneAddItem }) => (
    <TextInput
      style={styles.input}
      value={inputValue}
      onChangeText={onChangeText}
      placeholder="Type here to add a task."
      placeholderTextColor='grey'
      multiline={true}
      autoCapitalize="sentences"
      selectionColor={'white'}
      maxLength={30}
      returnKeyType="done"
      autoCorrect={false}
      blurOnSubmit={true}
      onSubmitEditing={onDoneAddItem}
    />
  );
  const styles = StyleSheet.create({
    input: {
      paddingTop: 10,
      paddingRight: 15,
      paddingLeft: 15,
      fontSize: 20,
      color: 'black',
      fontWeight: '600',
      fontFamily: 'Avenir Next',
    }
  });
  export default TaskInput;