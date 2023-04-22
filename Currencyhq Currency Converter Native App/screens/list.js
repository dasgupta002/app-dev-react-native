import { useContext } from 'react'
import { View, StatusBar, FlatList } from 'react-native'
import { CurContext } from '../context/store'
import { Tile } from '../components/item'
import { Separator } from '../components/divider'
import colors from '../constants/colors'
import currencies from '../data/currency.json'

export default ({ navigation, route }) => {
    const { baseCur, quotedCur, setBaseCur, setQuotedCur } = useContext(CurContext)

    return <View style = {{ flex: 1, backgroundColor: colors.white }}>
        <StatusBar barStyle = 'light-content' backgroundColor = { colors.white } />
        <FlatList data = { currencies }
                  renderItem = { ({ item }) => {
                    return <Tile title = { item } 
                                 selected = { route.params.title === 'Base Currency' ? baseCur : quotedCur } 
                                 tap = { () => {
                                    route.params.title === 'Base Currency' ? setBaseCur(item) : setQuotedCur(item)
                                    navigation.pop() 
                                 }} /> 
                  }}
                  keyExtractor = { (item) => item }
                  showsVerticalScrollIndicator = { false }
                  ItemSeparatorComponent = { () => <Separator /> } />
    </View>
}