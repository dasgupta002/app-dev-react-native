import { View, TouchableOpacity, Text, TextInput, StyleSheet } from 'react-native'
import colors from '../constants/colors'

export const Input = ({ text, press, ...props }) => {
    const containerStyles = [ styles.container ]
    
    if(props.editable === false) {
        containerStyles.push(styles.disabled)
    }

    return <View style = { containerStyles }>
        <TouchableOpacity onPress = { press } style = { styles.button }>
            <Text style = { styles.text }>{ text }</Text>
        </TouchableOpacity>
        <TextInput style = { styles.field } { ...props } />
    </View>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        marginVertical: 10,
        marginHorizontal: 20,
        flexDirection: 'row',
        borderRadius: 5
    },
    disabled: {
        backgroundColor: colors.offWhite
    },
    button: {
        backgroundColor: colors.white,
        padding: 15,
        borderRightColor: colors.border,
        borderRightWidth: 1,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5
    },
    text: {
        fontSize: 18,
        color: colors.text,
        fontWeight: 'bold'
    },
    field: {
        flex: 1,
        padding: 10,
        color: colors.brown
    }
})