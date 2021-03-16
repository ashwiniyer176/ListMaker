import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function CheckListItem(props) {
  const {item, onPress} = props;
  return (
    <TouchableOpacity style={styles.row} onPress={() => onPress(item.key)}>
      <Text style={styles.itemTitle}>Item: {item.name} </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  row: {
    height: 50,
    width: 300,
    borderRadius: 25,
    backgroundColor: 'coral',
    paddingLeft: 20,
    margin: 10,
    alignItems: 'center',
    flexDirection: 'row',
    padding: 30,
  },
  itemTitle: {
    fontSize: 25,
    color: 'white',
  },
});
