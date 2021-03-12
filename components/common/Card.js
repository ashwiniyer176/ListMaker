import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Card() {
  return (
    <View style={styles.card}>
      <Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 180,
    width: 350,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderColor: 'transparent',
    elevation: 20,
    alignSelf: 'center',
    zIndex: 2,
    bottom: 80,
    flex: 1,
    marginBottom: -70,
  },
});
