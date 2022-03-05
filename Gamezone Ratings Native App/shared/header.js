import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

export default function Header({ navigator, title }) {
    return(
        <ImageBackground source = { require('../assets/game_bg.png') } style = { styles.header }>
          <MaterialIcons name = "menu" size = {28} onPress = { () => navigator.openDrawer() } style = { styles.icon } />  
          <View style = { styles.banner }>
            <Image source = { require('../assets/heart_logo.png') } style = { styles.logo } />  
            <Text style = { styles.text }>{ title }</Text>
          </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1
    },
    icon: {
        position: 'absolute',
        left: 16
    },
    banner: {
        flexDirection: 'row'
    },
    logo: {
        width: 26,
        height: 26,
        marginHorizontal: 10 
    }
})