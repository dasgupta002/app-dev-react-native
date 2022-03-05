import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export default function FlatButton({ text, handler }) {
    return(
        <TouchableOpacity onPress = { handler }>
            <View style = { styles.button }>
                <Text style = { styles.text }>{ text }</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: '#f01d71'
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign: 'center'
    }
})