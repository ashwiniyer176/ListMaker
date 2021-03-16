import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function FloatingActionButton(props) {
  const {addItem} = props;
  return (
    <TouchableOpacity style={styles.button} onPress={() => addItem}>
      <Text style={styles.buttonText}>+</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 70,
    width: 70,
    position: 'absolute',
    right: 30,
    bottom: 30,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  buttonText: {
    color: 'white',
    fontSize: 30,
  },
});
