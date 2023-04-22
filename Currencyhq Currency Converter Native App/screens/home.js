import React, { useState, useContext } from 'react'
import { Dimensions, View, ScrollView, Image, ActivityIndicator, Text, StyleSheet } from 'react-native'
import { format } from 'date-fns'
import { CurContext } from '../context/store'
import { Input } from '../components/input'
import { Button } from '../components/button'
import { Spacer } from '../components/spacer'
import colors from '../constants/colors'

const screen = Dimensions.get('window')

export default ({ navigation }) => {
    const [scroll, setScroll] = useState(false)
    const [value, setValue] = useState('10')

    const { baseCur, quotedCur, rates, loading, swap } = useContext(CurContext)

    const rate = rates[quotedCur] || 'NaN'
    const date = format(Date.now(), 'MMMM do, yyyy')

    return <View style = { styles.container }>
        <ScrollView showsVerticalScrollIndicator = { false } scrollEnabled = { scroll }>
            <View style = { styles.content }>
                <Image source = { require('../assets/logo.png') }
                       style = {{ width: 200, height: 200, alignSelf: 'center' }}
                       resizeMode = 'cover' />
                {
                    !loading ? <React.Fragment>
                        <Input text = { baseCur }
                               value = { value }
                               onChangeText = { (input) => setValue(input) } 
                               keyboardType = 'numeric'  
                               press = { () => navigation.push('List', { title: 'Base Currency' }) } />
                        <Input text = { quotedCur }
                               value = { value && (parseFloat(value) * rate).toFixed(2) } 
                               keyboardType = 'numeric'
                               editable = { false }
                               press = { () => navigation.push('List', { title: 'Quote Currency' }) } />
                        <Text style = { styles.text }>
                            1 { baseCur } = { rate } { quotedCur } as of { date }.
                        </Text>
                        <Button text = 'Revert' press = { swap } />
                    </React.Fragment> : <ActivityIndicator size = 'large' color = { colors.brown } />
                }
                <Spacer toggle = { (visible) => setScroll(visible) } />
            </View>
        </ScrollView>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.yellow,
        textAlign: 'center'
    },
    content: {
        paddingTop: screen.height * 0.15
    },
    text: {
        color: colors.brown,
        fontSize: 14
    }
})