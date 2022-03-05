import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

export default function TodoItem({ data, handler }) {
  return (
    <TouchableOpacity onPress = { () => handler(data.key) }>
      <View style = { styles.item }>
        <MaterialIcons name = "delete" size = {18} color = "#333" />
        <Text style = { styles.text }>{ data.text }</Text>
      </View>
    </TouchableOpacity>      
  )
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        backgroundColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        flexDirection: 'row'
    },
    text: {
      marginLeft: 10
    }  
})