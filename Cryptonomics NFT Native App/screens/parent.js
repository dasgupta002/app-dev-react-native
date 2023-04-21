import { useState } from 'react'
import { SafeAreaView, View, FlatList } from 'react-native'
import Header from '../components/header'
import TopBar from '../components/status'
import Card from '../components/card'
import { Colors } from '../constants/theme'
import { NFT } from '../constants/data'

const Parent = () => {
    const [data, setData] = useState(NFT)

    const filterNFT = (term) => {
        if(!term) return setData(NFT)

        const result = NFT.filter((item) => item.title.toLowerCase().includes(term.toLowerCase() || item.subtitle.toLowerCase().includes(term.toLowerCase())))
        result.length ? setData(result) : setData([])
    }

    return (
        <SafeAreaView style = {{ flex: 1 }}>
            <TopBar background = { Colors.primary } />
            <View style = {{ flex: 1 }}>
                <View style = {{ zIndex: 0 }}>
                    <FlatList data = { data }
                              renderItem = { ({ item }) => <Card data = { item } /> }
                              keyExtractor = { (item) => item.id }
                              showsVerticalScrollIndicator = { false }
                              ListHeaderComponent = { <Header search = { filterNFT } /> } />
                </View>
                <View style = {{ position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, zIndex: -1 }}>
                    <View style = {{ height: 300, backgroundColor: Colors.primary }} />
                    <View style = {{ flex: 1, backgroundColor: Colors.white }} />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Parent