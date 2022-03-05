import React, { useState } from 'react'
import { StyleSheet, View, TextInput, Button } from 'react-native'

export default function AddTodo({ handler }) {
  const [todo, setTodo] = useState('')
  
  return (
    <View>
        <TextInput placeholder = "Add a new todo . ."
                   onChangeText = { (value) => setTodo(value) }
                   style = { styles.input }
        />    
        <Button title = "ADD" color = "coral" onPress = { () => handler(todo) } />  
    </View>
  )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
})