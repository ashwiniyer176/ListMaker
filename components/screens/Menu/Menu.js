import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useState} from 'react';

//Comps
import Card from '../../common/Card';
import Item from './MenuItem';
import MenuItem from './MenuItem';

export default function Menu({navigation}) {
  const [myLists, setMyLists] = useState([
    {name: 'Medicines', key: 5},
    {name: 'Grocery', key: 7},
  ]);

  const navigateToList = (id) => {
    console.log(id.name);
    navigation.navigate('List', {
      listName: id.name,
    });
  };
  return (
    <View style={styles.body}>
      <View style={styles.sectionHeader} backgroundColor="#142f8f">
        <Text style={styles.sectionTitle}>Cognify</Text>
      </View>
      <Card />
      <View style={{flex: 2, backgroundColor: 'white'}}>
        <ScrollView>
          {myLists.map((item) => {
            return (
              <MenuItem
                item={item}
                navigateToList={(value) => navigateToList(value)}
              />
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'space-evenly',
    position: 'relative',
    backgroundColor: 'white',
  },
  sectionHeader: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    zIndex: 1,
    backgroundColor: 'red',
  },
  sectionContainer: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    flexDirection: 'row',
    zIndex: 1,
  },
  row: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'flex-start',
    flexDirection: 'row',
    marginHorizontal: 10,
    marginTop: 10,
  },

  sectionTitle: {
    fontSize: 30,
    color: 'white',
    padding: 20,
  },
  footer: {
    color: 'gray',
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'right',
  },
  footerContainer: {
    padding: 4,
    paddingRight: 12,
  },
  icons: {
    justifyContent: 'center',
    alignSelf: 'flex-start',
    backgroundColor: 'white',
    height: 50,
    width: 50,
    borderRadius: 50,
    // padding: 50
  },
  img: {
    height: 100,
    width: 100,
    borderRadius: 50,
    alignSelf: 'center',
  },
});
