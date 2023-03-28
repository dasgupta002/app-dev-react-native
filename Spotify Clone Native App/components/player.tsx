import { useEffect, useState } from 'react';

import { StyleSheet, View, Image, Text, TouchableWithoutFeedback } from "react-native";

import { Audio } from 'expo-av';
import { Sound } from 'expo-av/build/Audio';
import { AntDesign, Entypo } from "@expo/vector-icons";

import { data } from "../data/album";

export default function Player() {
    const [track, setTrack] = useState<Sound | null>(null);
    const [playing, setPlaying] = useState<boolean | undefined>(true);
    const [duration, setDuration] = useState<number | null>(null);
    const [position, setPosition] = useState<number | null>(null);

    const onPlaybackStatusUpdate = (status) => {
        setPlaying(status.isPlaying);
        setDuration(status.durationMillis);
        setPosition(status.positionMillis);
    }

    const loadSong = async () => {
        const { sound } = await Audio.Sound.createAsync(require('../assets/audio/track.mp3'), { shouldPlay: playing }, onPlaybackStatusUpdate);
        setTrack(sound);
    }

    const playSong = async () => track ? (playing ? await track.pauseAsync() : await track.playAsync()) : null;
    
    const progress = () => track === null || duration === null || position === null ? 0 : ((position / duration) * 100);

    useEffect(() => loadSong(), []);

    return (
        <View style = { styles.container }>
            <View style = {[ styles.progress, { width: `${progress()}%` } ]} />
            <View style = { styles.modal }>
                <Image source = {{ uri: data.songs[0].imageURL }} style = { styles.thumbnail } />
                <View style = { styles.data }>
                    <Text style = {{ color: 'white', fontFamily: 'comic', fontWeight: 'bold', fontSize: 15 }}>{ data.songs[0].title }</Text>                
                    <Text style = {{ color: 'grey', fontSize: 11, marginLeft: 11 }}>{ data.songs[0].artist }</Text>
                </View>
                <AntDesign name = "hearto" size = { 20 } style = {{ marginRight: 5 }} color = "white" />
                <TouchableWithoutFeedback onPress = { playSong }>
                    { playing ? <AntDesign name = "pause" size = { 30 } color = "white" /> : <Entypo name = "controller-play" size = { 30 } color = "white" /> }
                </TouchableWithoutFeedback>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 38,
        width: '100%',
        backgroundColor: '#131313',
        marginVertical: 11
    },
    modal: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    progress: {
        height: 2,
        backgroundColor: '#bcbcbc'
    },
    thumbnail: {
        width: 60,
        height: 60
    },
    data: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 18
    }
});