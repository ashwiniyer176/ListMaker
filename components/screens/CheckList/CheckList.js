import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Button,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';

//Comps
import FloatingActionButton from '../../common/FloatingActionButton';
import CheckListItem from './CheckListItem';
import AddItem from './addItem';

export default function CheckList({route}) {
  const {element} = route.params;
  const [data, setData] = useState([
    {name: '1', isChecked: false, key: 1},
    {name: '2', isChecked: false, key: 2},
    {name: '3', isChecked: false, key: 3},
    {name: '4', isChecked: false, key: 4},
  ]);
  const renderItem = ({item}) => {
    return <CheckListItem item={item} onPress={pressHandler} />;
  };

  const pressHandler = (key) => {
    console.log(key);
    setData((previousData) => {
      return previousData.filter((dataElement) => dataElement.key != key);
    });
  };

  const makeNewListItem = (itemTitle) => {
    setData((previousData) => {
      return [...previousData, {name: itemTitle, key: 9}];
    });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.listTitle}>{element.name}</Text>
      <View style={styles.addItemStyle}>
        <AddItem makeNewListItem={makeNewListItem} />
      </View>

      <FlatList data={data} renderItem={renderItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  listTitle: {
    fontSize: 40,
  },

  strikeThroughText: {
    textDecorationLine: 'line-through',
  },
  addItemStyle: {
    margin: 30,
  },
});
