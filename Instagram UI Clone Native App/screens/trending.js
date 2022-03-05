import { Platform, StatusBar, SafeAreaView, StyleSheet, Dimensions, TextInput, FlatList, Image } from 'react-native';

const images = [
    'https://i.picsum.photos/id/81/536/354.jpg?hmac=CUJGGFfz-V4Oy_q1h896sGwmhTRA1CxKCkhre3ippJo',
    'https://i.picsum.photos/id/427/536/354.jpg?hmac=L9xt4dPYu1OBmkl4Md1KF51PpeBgp_mqgmsi4TxU0Mw',
    'https://i.picsum.photos/id/658/536/354.jpg?hmac=lJsBY1i-cotZRX7y_Gs4NWkIaCtyhT3HhAeLnRpra8k',
    'https://i.picsum.photos/id/85/536/354.jpg?hmac=i0OfmV3qIJ71K8ysJ3WxLvc-S0iJIZR6W89Y6UEypDk',
    'https://i.picsum.photos/id/914/536/354.jpg?hmac=aoR-zL2w3XEwaKX7eOFvc_EukXN1hAJO_5JL-Cu8RTk',
    'https://i.picsum.photos/id/288/536/354.jpg?hmac=0_DALLGv6guhuEVpDdbFjlA-yvbIhMjnl1YhHtfhW10',
    'https://i.picsum.photos/id/975/536/354.jpg?hmac=0ajhoK5LfmzOkny2PdBz_QcZ4SxtBgb6a8fVyJP9woE',
    'https://i.picsum.photos/id/570/536/354.jpg?hmac=H3qOXniuMD7qN4Bg7wqzHYvgroygVxYNQ1xX6lyKGc8',
    'https://i.picsum.photos/id/155/536/354.jpg?hmac=35DNtncWvRpe1nad3SHy7sC3kJc7D4duRxYyOYuaxmQ',
    'https://i.picsum.photos/id/169/536/354.jpg?hmac=-vap-MTzZXK5TXnzfbdbt1FmCKYWyTeUc4bWfGNYL0k',
    'https://i.picsum.photos/id/15/536/354.jpg?hmac=sy-6C0goNqN670rwBjWc9gJb4R2CES2MtJ44mx9hbJI',
    'https://i.picsum.photos/id/721/536/354.jpg?hmac=MYuTzrazqnMxnXLOrrzkp26AkNzRVcy383e291NHNjk'
];

const { width } = Dimensions.get('window');
const size = width / 3;

export default function Trending() {
    return (
        <SafeAreaView style = { styles.container }>
          <FlatList data = { images }
                    ListHeaderComponent = { () => <TextInput placeholder = "Seach anything!" placeholderTextColor = "black" style = { styles.search } /> }
                    keyExtractor = { (item, index) => index }
                    renderItem = { ({ item }) => <Image style = { styles.image } source = {{ uri: item }} /> }
                    numColumns = { 3 }               
                    showsVerticalScrollIndicator = { false } />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({  
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        backgroundColor: 'white'
    },
    search: {
        border: '1px solid black',
        borderRadius: 10,
        padding: 10,
        marginHorizontal: 10,
        marginVertical: 10
    },
    image: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 150,
        width: size
    }
});