import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import colors from '../constants/colors'

export const Button = ({ text, press }) => {
    return <TouchableOpacity onPress = { press } style = { styles.button }>
        <Icon name = 'swap-horizontal-variant' size = { 20 } color = 'white' />
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 40,
        width: 114,
        height: 33,
        padding: 5,
        borderRadius: 5,
        justifyContent: 'center',
        backgroundColor: colors.brown
    }
})