import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {useRoute} from '@react-navigation/native';

//Comps
import Item from './CheckListItem';
import FloatingActionButton from '../../common/FloatingActionButton';

export default function List(props) {
  const route = useRoute();
  const [data, setData] = useState([
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      isChecked: true,
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      isChecked: false,
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      isChecked: false,
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d71',
      title: 'Fourth Item',
      isChecked: false,
    },
  ]);
  const setIsChecked = (item) => {
    console.log(item);
    for (i in data) {
      if (i.id === item.id) {
        i.isChecked = !itemm.isChecked;
      }
    }

    console.log(data);
  };
  const {listName} = route.params;
  const renderItem = ({item}) => {
    return <Item item={item} setIsChecked={() => setIsChecked(item)} />;
  };
  return (
    <View style={styles.container}>
      <Text style={styles.listTitle}>{listName}</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <FloatingActionButton />
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
});
