import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import colors from '../constants/colors'

export const Tile = ({ title, selected, tap }) => {
    return <TouchableOpacity style = { styles.tab } onPress = { tap }>
        <Text style = {{ fontWeight: '500' }}>{ title }</Text>
        { selected === title && <Icon name = 'check-circle' size = { 20 } color = { colors.brown } /> }
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    tab: { 
        flexDirection: 'row', 
        padding: 20,
        alignItems: 'center', 
        justifyContent: 'space-between' 
    }
})    