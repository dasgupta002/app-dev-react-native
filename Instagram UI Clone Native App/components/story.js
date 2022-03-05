import { StyleSheet, FlatList, TouchableWithoutFeedback, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ProfileImage from './picture';

import { users } from '../data/users';

export default function Story() {
    const navigation = useNavigation();

    const showStory = (user) => {
        navigation.navigate('Story', { id: user.id });        
    }

    return (
        <FlatList data = { users }
                  style = { styles.container }
                  keyExtractor = { (item) => item.id }
                  renderItem = { ({ item }) => {
                    return (
                        <TouchableWithoutFeedback onPress = { () => showStory(item) }>
                            <View style = { styles.user }>
                                <ProfileImage image = { item.image } />
                                <Text>{ item.name }</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    ) }
                  }
                  showsHorizontalScrollIndicator = { false }
                  horizontal /> 
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10
    },
    user: {
        flexDirection: 'column',
        alignItems: 'center'
    }
});