import { View, Image, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Entypo'
import Footer from './footer'
import Outline from './outline'
import { Colors, Sizes, Shadows } from '../constants/theme'

const Card = ({ data }) => {
    const navigation = useNavigation()

    return (
        <View style = { styles.card }>
            <View style = {{ width: '100%', height: 250 }}>
                <Image source = { data.image } style = { styles.hero } resizeMode = 'cover' />
            </View>
            <View style = { styles.button }>
                <Icon name = 'heart' size = { 25 } color = 'red' />
            </View>
            <Outline people = { data.bids } date = { data.time } />
            <Footer data = { data } press = { () => navigation.navigate('Summary', { data }) } />
        </View>
    )
}

const styles = StyleSheet.create({
    card: { 
        backgroundColor: Colors.white, 
        borderRadius: Sizes.font, 
        marginBottom: Sizes.extraLarge, 
        margin: Sizes.base, 
        ...Shadows.dark 
    },
    hero: {
        width: '100%',
        height: '100%',
        borderTopLeftRadius: Sizes.font,
        borderTopRightRadius: Sizes.font
    },
    button: { 
        width: 40, 
        height: 40, 
        backgroundColor: Colors.white, 
        position: 'absolute', 
        top: 10,
        right: 10,
        borderRadius: Sizes.extraLarge, 
        alignItems: 'center',
        justifyContent: 'center',
        ...Shadows.light
    }
})

export default Card