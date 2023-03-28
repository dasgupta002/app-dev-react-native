import { useEffect } from 'react';

import { StyleSheet, View, Text, FlatList, Image } from 'react-native';

import Cover from '../components/cover'; 
import Song from '../components/song';

import { RootStackScreenProps } from '../types';

import { data } from '../data/album';

export default function Details({ navigation }: RootStackScreenProps<'Details'>) {
  const route = navigation.getState().routes[navigation.getState().index];

  useEffect(() => {}, []);

  return (
    <View style = { styles.container }>
      <FlatList data = { data.songs }
                ListHeaderComponent = { <Cover data = { data } /> }
                keyExtractor = { (item, index) => item.id }
                renderItem = { ({ item }) => <Song data = { item }  /> }
                showsVerticalScrollIndicator = { false } />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 17
    }
});