import { Platform, StatusBar, Dimensions, SafeAreaView, StyleSheet, FlatList } from 'react-native';

import { Video } from 'expo-av';

const reels = [
    {
        id: 1,
        media: require('../assets/videos/dog.mp4')
    },      
    {
        id: 2,
        media: require('../assets/videos/baby.mp4')
    },      
    {
        id: 3,
        media: require('../assets/videos/cat.mp4')
    }      
];

export default function ReelVideo() {
    return (
        <SafeAreaView style = { styles.android }>
            <FlatList data = { reels }
                      keyExtractor = { (item, index) => item.id }
                      renderItem = { ({ item }) => <Video style = { styles.video } source = {{ uri: item.media }} resizeMode = 'stretch' shouldPlay = { true } isLooping /> }                    
                      showsVerticalScrollIndicator = { false } />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    android: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
    video: {
        height: Dimensions.get('window').height * 0.80,
        width: '100%'
    }
});