import { StyleSheet, FlatList } from 'react-native';

import { Feather } from '@expo/vector-icons';

import { RootTabScreenProps } from '../types';
import Categories from '../components/categories';

import { data } from '../data/categories';

export default function Home({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <FlatList data = { data } 
              style = { styles.container }
              ListHeaderComponent = { <Feather name = "settings" size = { 25 } style = {{ marginVertical: 11, alignSelf: 'flex-end' }} color = "grey" /> }
              keyExtractor = { (item, index) => item.id }
              renderItem = { ({ item }) => <Categories data = { item } /> }
              showsVerticalScrollIndicator = { false } />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 14,
    marginVertical: 7
  }
});