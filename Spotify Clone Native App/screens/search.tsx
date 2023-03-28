import { StyleSheet, View } from 'react-native';

import { RootTabScreenProps } from '../types';

export default function Search({ navigation }: RootTabScreenProps<'Search'>) {
  return (
    <View style = { styles.container }>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});