import { View, Image, TextInput, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import CustomText from './text'
import { Colors, Sizes } from '../constants/theme'

const Header = ({ search }) => {
    return (
        <View style = {{ backgroundColor: Colors.primary, padding: Sizes.font }}>
            <View style = {{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Image source = { require('../assets/images/logo.png') } style = {{ width: 60, height: 60 }} resizeMode = 'contain' />
                <View>
                    <Image source = { require('../assets/images/user.png') } style = {{ width: 60, height: 60 }} resizeMode = 'contain' />
                    <Icon name = 'verified' style = {{ position: 'absolute', bottom: 0, right: 0 }} size = { 20 } color = 'blue' />
                </View>
            </View>
            <View style = {{ marginVertical: Sizes.font }}>
                <CustomText font = { 15 } color = { Colors.white }>Hola, Tim 🍺.</CustomText>
                <CustomText font = { 20 } color = { Colors.white }>Find some magic to kick your day.</CustomText>
            </View>
            <View style = { styles.search }>
                <Icon name = 'search' size = { 25 } color = 'white' />
                <TextInput placeholder = 'Dig your gold.' 
                           style = {{ flex: 1, fontFamily: 'TrashHand', paddingHorizontal: 5, color: Colors.white }} 
                           onChangeText = { search } />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    search: { 
        flexDirection: 'row', 
        alignItems: 'center',
        backgroundColor: Colors.gray,
        padding: Sizes.font, 
        width: '100%', 
        borderRadius: Sizes.font, 
        marginTop: Sizes.font 
    }
})

export default Header