import { useState } from 'react'
import { StatusBar, View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'
import CustomText from './text'
import Outline from './outline'
import { Colors, Sizes, Shadows } from '../constants/theme'

const Biography = ({ data, navigation }) => {
    const [text, setText] = useState(data.description.slice(0, 250))
    const [show, setShow] = useState(false)

    return (
        <View>
            <View style = {{ width: '100%', height: 375 }}>
                <Image source = { data.image } style = {{ width: '100%', height: '100%' }} resizeMode = 'cover' />
                <TouchableOpacity style = { styles.icon } onPress = { () => navigation.goBack() }>
                    <Icon name = 'chevron-left' size = { 25 } color = 'white' />
                </TouchableOpacity>
                <View style = { styles.button }>
                    <Icon name = 'heart' size = { 25 } color = 'red' />
                </View>
            </View>
            <Outline people = { data.bids } date = { data.time } />
            <View style = {{ padding: Sizes.font }}>
                <CustomText font = { 20 }>{ data.title }</CustomText>
                <CustomText font = { 16 }>By { data.creator }</CustomText>
                <View style = {{ marginTop: Sizes.extraLarge, marginBottom: Sizes.base, alignItems: 'flex-end' }}>
                    <CustomText font = { 16 }>Description</CustomText>
                </View>
                <CustomText font = { 12 }>
                    { text }
                    { !show && ' ...' }
                    <Text onPress = { () => {
                        if(!show) {
                            setText(data.description)
                            setShow(true)
                        } else {
                            setText(data.description.slice(0, 250))
                            setShow(false)
                        }
                    }}>
                        { show ? ' Show Less' : ' Read More' }
                    </Text>
                </CustomText>
                <View style = {{ marginTop: Sizes.extraLarge, marginBottom: Sizes.base, alignItems: 'flex-end' }}>
                    <CustomText font = { 16 }>Bids</CustomText>
                </View>
            </View>
        </View>  
    )
}

const styles = StyleSheet.create({
    icon: {
        width: 40, 
        height: 40,
        position: 'absolute',
        top: StatusBar.currentHeight + 12,
        left: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: { 
        width: 40, 
        height: 40, 
        backgroundColor: Colors.white, 
        borderRadius: Sizes.extraLarge, 
        position: 'absolute',
        top: StatusBar.currentHeight + 12,
        right: 15,
        alignItems: 'center',
        justifyContent: 'center',
        ...Shadows.light
    }
})

export default Biography