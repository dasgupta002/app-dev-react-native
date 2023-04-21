import { SafeAreaView, View, TouchableOpacity, FlatList, StyleSheet } from 'react-native'
import TopBar from '../components/status'
import Tile from '../components/tile'
import Biography from '../components/biography'
import CustomText from '../components/text'
import { Colors, Sizes } from '../constants/theme'

const Summary = ({ route, navigation }) => {
    const { data } = route.params
    
    return (
        <SafeAreaView style = {{ flex: 1 }}>
            <TopBar barStyle = 'dark-content' background = 'transparent' translucent = { true } />
            <FlatList data = { data.bids }
                      renderItem = { ({ item }) => <Tile bid = { item } /> }
                      keyExtractor = { (item) => item.id }
                      showsVerticalScrollIndicator = { false }
                      ListHeaderComponent = { () => <Biography data = { data } navigation = { navigation } /> }
                      contentContainerStyle = {{ paddingBottom: Sizes.extraLarge * 3 }} />
            <View style = { styles.footer }>
                <TouchableOpacity style = { styles.block } onPress = { () => {} }>
                    <CustomText font = { 18 } color = { Colors.white }>Open Bid</CustomText>
                </TouchableOpacity>
            </View>
        </SafeAreaView>   
    )
}

const styles = StyleSheet.create({
    footer: { 
        width: '100%', 
        position: 'absolute', 
        bottom: 0, 
        paddingVertical: Sizes.font,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        zIndex: 1
    },
    block: { 
        backgroundColor: Colors.primary, 
        borderRadius: Sizes.extraLarge, 
        alignItems: 'center', 
        padding: Sizes.small, 
        minWidth: 120 
    }
})

export default Summary