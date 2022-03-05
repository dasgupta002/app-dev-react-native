import { useState } from "react";
import { StyleSheet, Dimensions, View, Text, Image, TouchableWithoutFeedback } from "react-native";

import Icon from "react-native-vector-icons/Entypo";
import ADIcon from "react-native-vector-icons/AntDesign";
import EVIcon from "react-native-vector-icons/EvilIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import Fontisto from "react-native-vector-icons/Fontisto";

import ProfileImage from "./picture";

const factor = Dimensions.get("window").width;

export default function Post({ data }) {
    const [reacts, setReacts] = useState(data.reacts);
    const [like, setLike] = useState(false);

    const likePost = () => {
        setReacts(like ? reacts - 1 : reacts + 1);
        setLike(!like);
    }

    return (
        <View style = { styles.container }>
            <View style = { styles.userinfo }>
                <View style = { styles.userdata }>
                    <ProfileImage image = { data.image } size = { 30 } />
                    <Text style = { styles.username }>{ data.name }</Text>
                </View>
                <Icon name = "dots-three-vertical" size = { 15 } style = {{ marginRight: 6 }} />
            </View>
            <TouchableWithoutFeedback onPress = { likePost }>
                <Image source = {{ uri: data.media }} style = { styles.media } />
            </TouchableWithoutFeedback>
            <View style = { styles.stats }>
                <View style = { styles.icons }>
                    <View style = {{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableWithoutFeedback onPress = { likePost }>
                            <ADIcon name = { like ? "heart" : "hearto" } size = { 26 } color = { like ? 'red' : '#545454' } style = {{ marginRight: 6 }} />
                        </TouchableWithoutFeedback>
                        <EVIcon name = "comment" size = { 36 } color = { '#545454' } style = {{ marginRight: 6 }} />
                        <Ionicons name = "paper-plane-outline" size = { 26 } color = { '#545454' } />
                    </View>
                    <Fontisto name = "bookmark" size = { 25 } color = { '#545454' } style = {{ marginRight: 12 }} />
                </View>
                <Text style = { styles.likes }>{ reacts } likes</Text>
            </View>
            <Text style = { styles.caption }>{ data.body }</Text>
            <Text style = { styles.timestamp }>{ data.posted }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10
    },
    userinfo: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    userdata: {
        flexGrow: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    username: {
        color: '#3c3c3c',
        fontWeight: 'bold',
        fontSize: 14
    },
    media: {
        width: factor,
        height: factor,
        marginBottom: 6
    },
    stats: {
        paddingLeft: 4,
        flexDirection: 'column'
    },
    icons: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    likes: {
        paddingBottom: 4,
        textAlign: 'justify',
        color: '#3c3c3c',
        fontWeight: 'bold',
        fontSize: 14
    },
    caption: {
        paddingLeft: 6,
        paddingBottom: 4,
        textAlign: 'justify',
        color: '#3c3c3c',
        fontSize: 14
    },
    timestamp: {
        paddingLeft: 6,
        textAlign: 'justify',
        color: '#3c3c3c',
        fontWeight: 'bold',
        fontSize: 11
    }
});