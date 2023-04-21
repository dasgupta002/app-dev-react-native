import { View, Image, StyleSheet } from 'react-native'
import CustomText from './text'
import { Colors, Sizes, Shadows } from '../constants/theme'

const Outline = ({ people, date }) => {
    return (
        <View style = { styles.subinfo }>
            <View style = {{ flexDirection: 'row' }}>
                {
                    people.map((item, index) => (
                        <Image source = { item.image } 
                               key = { item.id }
                               style = {{ width: 48, height: 48, marginLeft: index === 0 ? 0 : -Sizes.font }} 
                               resizeMode = 'contain' />
                    ))
                }
            </View>
            <View style = { styles.date }>
                <CustomText font = { 10 }>
                    Ending in
                </CustomText>
                <CustomText font = { 14 }>
                    { date }
                </CustomText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    subinfo: { 
        width: '100%', 
        flexDirection: 'row',
        justifyContent: 'space-between', 
        paddingHorizontal: Sizes.font, 
        marginTop: -Sizes.extraLarge,
    },
    date: { 
        paddingHorizontal: Sizes.font, 
        paddingVertical: Sizes.base, 
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 1,
        maxWidth: '50%', 
        backgroundColor: Colors.white,
        ...Shadows.light 
    }
})

export default Outline