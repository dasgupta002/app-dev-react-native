import { StyleSheet, View } from 'react-native';

import { RootTabScreenProps } from '../types';

export default function Premium({ navigation }: RootTabScreenProps<'Premium'>) {
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