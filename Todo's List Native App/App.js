import React, { useState } from 'react'
import Header from './components/header'
import TodoItem from './components/todo'
import AddTodo from './components/add'
import { StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native'

export default function App() {
  const [todos, setTodos] = useState([
    { key: '1', text: 'buy coffee' },
    { key: '2', text: 'create an app' },
    { key: '3', text: 'play on the switch' }
  ])

  const deletionHandler = (key) => {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.key != key)
    })
  }

  const addtionHandler = (todo) => {
    if(todo.length > 3) {
      setTodos((currentTodos) => {
        return [ { key: Math.random().toString(), text: todo }, ...currentTodos ]
      })
    } else {
      Alert.alert('OOPS!', 'Too short in length.' , [
        { text: 'Understood', onPress: () => {} }
      ])
    }
  }

  return (
    <TouchableWithoutFeedback onPress = { () => Keyboard.dismiss() }>
      <View style = { styles.container }>
        <Header />
        <View style = { styles.content }>
          <View style = { styles.list }>
            <AddTodo handler = { addtionHandler } />
            <FlatList data = { todos }
                      renderItem = {({item}) => (
                        <TodoItem data = { item } handler = { deletionHandler } />
                      )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    flex: 1,
    padding: 40
  },
  list: {
    flex: 1,
    marginTop: 20
  }
})