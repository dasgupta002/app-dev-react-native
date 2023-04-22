import { useEffect, useState } from 'react'
import { Dimensions, View, Keyboard, StyleSheet } from 'react-native'

const screen = Dimensions.get('window')

export const Spacer = ({ toggle }) => {
    const [keyboardSpace, setKeyboardSpace] = useState(0)

    useEffect(() => {
        const showListner = Keyboard.addListener('keyboardDidShow', (event) => {
            const endY = event.endCoordinates.screenY
            setKeyboardSpace(screen.height - endY + 25)
            
            toggle(true)
        })

        const hideListner = Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardSpace(0)
            toggle(false)
        })

        return () => {
            showListner.remove()
            hideListner.remove()
        }
    }, [])

    return <View style = { [styles.container, { height: keyboardSpace }] } />
}

const styles = StyleSheet.create({
    container: {
        left: 0,
        right: 0,
        bottom: 0
    }
})