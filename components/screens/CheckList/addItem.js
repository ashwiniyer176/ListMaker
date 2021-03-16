import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';
// import Button from '../../common/FloatingActionButton';

export default function addItem(props) {
  const {makeNewListItem} = props;
  const [text, setText] = useState('');
  const changeHandler = (changedText) => {
    setText(changedText);
  };
  const addItem = (changedText) => {
    setText('');
    makeNewListItem(text);
  };
  return (
    <View>
      <TextInput
        placeholder="New Item..."
        onChangeText={changeHandler}
        style={styles.input}
      />
      <Button
        title="+"
        style={styles.submitButton}
        color="coral"
        onPress={() => addItem(text)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    height: 50,
    width: 300,
  },
  submitButton: {
    height: 20,
    width: 20,
    position: 'absolute',
    backgroundColor: 'coral',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginBottom: 100,
  },
});
