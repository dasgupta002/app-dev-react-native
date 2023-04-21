import { View, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import CustomText from './text'
import { Colors, Sizes } from '../constants/theme'

const Footer = ({ data, press }) => {
    return (
        <View style = {{ width: '100%', padding: Sizes.font }}>
            <CustomText font = { 20 }>{ data.title }</CustomText>
            <CustomText font = { 14 }>{ data.subtitle }</CustomText>
            <View style = {{ marginTop: Sizes.font, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style = {{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon name = 'money' size = { 20 } />
                    <CustomText font = { 18 }>{ data.price }</CustomText>
                </View>
                <TouchableOpacity style = { styles.block } onPress = { press }>
                    <CustomText font = { 18 } color = { Colors.white }>Open Bid</CustomText>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    block: { 
        backgroundColor: Colors.primary, 
        borderRadius: Sizes.extraLarge, 
        alignItems: 'center', 
        padding: Sizes.small, 
        minWidth: 120 
    }
})

export default Footer