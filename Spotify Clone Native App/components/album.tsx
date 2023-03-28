import { StyleSheet, TouchableWithoutFeedback, View, Image, Text } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { album } from '../types';

export default function Album(props: { data: album }) {
    const navigation = useNavigation();
    
    const openAlbum = () => {
        navigation.navigate('Details', { id: props.data.id });
    }
     
    return (
        <TouchableWithoutFeedback onPress = { openAlbum }>
            <View style = { styles.container }>
                <Image source = {{ uri: props.data.imageURL }} style = { styles.poster } />
                <Text style = { styles.headline }>{ props.data.artists }</Text>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        marginRight: 14,
        width: 140
    },
    poster: {
        width: '100%',
        height: 140
    },
    headline: {
        marginTop: 11,
        fontFamily: 'comic',
        fontWeight: 'bold',
        fontSize: 14,
        color: 'grey'
    }
});