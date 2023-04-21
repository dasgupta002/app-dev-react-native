import { View, Image, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import CustomText from './text'
import { Sizes } from '../constants/theme'

const Tile = ({ bid }) => {
    return (
        <View style = { styles.plate }>
            <View style = {{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source = { bid.image } style = {{ width: 48, height: 48, marginRight: 11 }} resizeMode = 'contain' />
                <View>
                    <CustomText font = { 12 }>Placed By</CustomText>
                    <CustomText font = { 14 }>{ bid.name }</CustomText>
                </View>
            </View>
            <View style = {{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon name = 'money' size = { 20 } />
                <CustomText font = { 18 }>{ bid.price }</CustomText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    plate: { 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        paddingHorizontal: Sizes.font, 
        paddingBottom: Sizes.medium 
    }
})

export default Tile