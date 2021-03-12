import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

export default function CheckListItem(props) {
  const {item, setIsChecked} = props;

  const checkItemStatusForColor = () => {
    if (item.isChecked) {
      return [styles.row, {backgroundColor: 'gray'}];
    } else {
      return [styles.row, {backgroundColor: 'blue'}];
    }
  };

  const checkItemStatusForText = () => {
    if (item.isChecked) {
      return [styles.itemTitle, styles.strikeThroughText];
    }
    return [styles.itemTitle];
  };
  return (
    <TouchableOpacity>
      <View style={checkItemStatusForColor()}>
        <CheckBox
          value={item.isChecked}
          onValueChange={(newValue) => setIsChecked(newValue)}
          tintColors={{true: 'lightgreen', false: 'lightgreen'}}
        />
        <Text style={checkItemStatusForText()}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  row: {
    height: 70,
    width: 350,
    borderRadius: 25,

    paddingLeft: 20,
    margin: 10,
    alignItems: 'center',
    flexDirection: 'row',
    padding: 30,
  },
  itemTitle: {
    fontSize: 30,
    color: 'white',
  },
  strikeThroughText: {
    textDecorationLine: 'line-through',
  },
});
