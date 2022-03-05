import { useEffect, useState } from "react";
import { Platform, StatusBar, SafeAreaView, Dimensions, StyleSheet, ActivityIndicator, TouchableWithoutFeedback, ImageBackground, View, Text, TextInput } from "react-native";

import { useRoute, useNavigation } from "@react-navigation/native";

import Icon from "react-native-vector-icons/Entypo";
import Feather from "react-native-vector-icons/Feather";
import ADIcon from "react-native-vector-icons/AntDesign";

import ProfileImage from "../components/picture";

import { users } from '../data/users';

const width = Dimensions.get("window").width;

export default function Story() {
    const [stories, setStories] = useState(null);
    const [user, setUser] = useState(null);
    const [index, setIndex] = useState(null);

    const [like, setLike] = useState(false);
    const likeStory = () => setLike(!like);

    useEffect(() => setLike(false), [index]);

    const route = useRoute();
    const navigation = useNavigation();

    const id = route.params.id;

    useEffect(() => {       
        if(parseInt(id) <= 0 || parseInt(id) > users.length) {
            navigation.navigate('Root');
            return;
        }

        const user = users.find((user) => user.id === parseInt(id));
        setUser(user);

        setStories(user.stories);
        setIndex(0); 
    }, []);

    const pushStory = (event) => {
        if(event.nativeEvent.offsetX > width / 2) {
            if(index >= stories.length - 1) {
                navigation.push('Story', { id: (parseInt(id) + 1).toString() });
                return;
            }

            setIndex(index + 1);
        } else {
            if(index <= 0) {
                navigation.push('Story', { id: (parseInt(id) - 1).toString() });
                return;
            } 

            setIndex(index - 1);    
        }
    }

    if(!stories) {
        return (
            <SafeAreaView style = { styles.android }>
                <ActivityIndicator size = "large" style = { styles.progress } />
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style = { styles.android }>
            <TouchableWithoutFeedback onPress = { (event) => pushStory(event) }>
                <ImageBackground source = {{ uri: stories[index].media }} style = { styles.image }>
                    <View style = { styles.wrapper }>
                        <View style = { styles.info }>
                            <ProfileImage image = { user.image } size = { 40 } />
                            <Text style = { styles.label }>{ user.name }</Text>
                            <Text style = {{ fontSize: 10, color: 'white', marginLeft: 4 }}>{ stories[index].posted }</Text>
                        </View>
                        <Icon name = "dots-three-vertical" size = { 15 } color = "white" style = {{ marginRight: 6 }} />
                    </View>
                    <View style = { styles.prop }>
                        <TextInput placeholder = "Send a message!" placeholderTextColor = "white" style = { styles.message } />
                        <Feather name = "share" size = { 26 } color = "white" style = {{ marginRight: 6 }} />
                        <TouchableWithoutFeedback onPress = { likeStory }>
                            <ADIcon name = { like ? "heart" : "hearto" } size = { 26 } color = { like ? 'red' : 'white' } />
                        </TouchableWithoutFeedback>
                    </View>
                </ImageBackground>
            </TouchableWithoutFeedback>    
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    android: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    progress: {
        flex: 1
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'space-between'
    },
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 11
    },
    info: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    label: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white'
    },
    prop: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 11,
        marginVertical: 11
    },
    message: {
        flex: 1,
        border: '1px solid white',
        borderRadius: 10,
        padding: 10,
        color: 'white',
        marginHorizontal: 10,
        marginVertical: 10
    }
});