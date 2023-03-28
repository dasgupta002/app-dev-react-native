import { StyleSheet, View, Image, Text } from "react-native";

import { Entypo } from "@expo/vector-icons";

import { song } from '../types';

export default function Song(props: { data: song }) {
    return (
        <View style = { styles.container }>
            <Image source = {{ uri: props.data.imageURL }} style = { styles.thumbnail } />
            <View style = { styles.data }>
                <Text style = {{ color: 'white', fontFamily: 'comic', fontWeight: 'bold', fontSize: 15 }}>{ props.data.title }</Text>
                <Text style = {{ color: 'grey', fontSize: 14 }}>{ props.data.artist }</Text>
            </View>
            <Entypo name = "dots-three-vertical" size = { 15 } color = "white" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 18,
        marginVertical: 11
    },
    thumbnail: {
        width: 60,
        height: 60
    },
    data: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        marginLeft: 18
    }
});