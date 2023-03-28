import { StyleSheet, View, FlatList, Text } from "react-native";

import { album } from '../types';
import Album from "./album";

export default function Categories(props: { data: { title: string; albums: Array<album>; } }) {
    return (
        <View style = { styles.container }>
            <Text style = { styles.tag }>{ props.data.title }</Text>
            <FlatList data = { props.data.albums } 
                      keyExtractor = { (item, index) => item.id }
                      renderItem = { ({ item }) => <Album data = { item } /> } 
                      showsHorizontalScrollIndicator = { false }
                      horizontal />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 14
    },
    tag: {
        marginBottom: 11,
        color: 'white',
        fontFamily: 'yew',
        fontSize: 20,
        fontWeight: 'bold'
    }
});