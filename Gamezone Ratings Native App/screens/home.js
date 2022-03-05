import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { globalStyles } from '../styles/global'
import { MaterialIcons } from '@expo/vector-icons'
import Card from '../shared/card'
import Form from './form'

export default function Home({ navigation }) {
  const [open, setOpen] = useState(false)
  
  const [reviews, setReviews] = useState([
    { key: '1', title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'odio euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit' },
    { key: '2', title: 'Gotta Catch Them All (again)', rating: 4, body: 'odio euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit' },
    { key: '3', title: 'Not So "Final" Fantasy', rating: 3, body: 'odio euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit' }
  ])
  
  const addReview = (review) => {
    review.key = Math.random().toString()

    setReviews((currentReviews) => {
      return [review, ...currentReviews]
    })

    setOpen(false)
  }
  
  return (
    <View style = { globalStyles.container }>
      <Modal visible = { open } animationType = "slide">
        <TouchableWithoutFeedback onPress = { () => Keyboard.dismiss() }>
          <View style = { styles.content }>
            <MaterialIcons name = "close" 
                           size = {24} 
                           style = {{ ...styles.toggle, ...styles.close }} 
                           onPress = { () => setOpen(false) } 
            />
            <Form handler = { addReview } />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <MaterialIcons name = "add" 
                     size = {24} 
                     style = { styles.toggle } 
                     onPress = { () => setOpen(true) } 
      />
      <FlatList data = { reviews }
                renderItem = { ({ item }) => (
                  <TouchableOpacity onPress = { () => navigation.push('Review', item) }>
                    <Card>
                      <Text style = { globalStyles.title }>{ item.title }</Text>
                    </Card>
                  </TouchableOpacity>
                ) } 
      />      
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    flex: 1
  },
  toggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center'
  },
  close: {
    marginTop: 20,
    marginBottom: 0
  }
})