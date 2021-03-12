import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function FloatingActionButton() {
  return (
    <TouchableOpacity style={styles.button}>
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
