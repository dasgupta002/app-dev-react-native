import { useState } from 'react';
import { StyleSheet, Dimensions, View, FlatList, Image } from 'react-native';

import { Tab, TabView } from 'react-native-elements';

import Info from '../components/info';

const images = [
    'https://i.picsum.photos/id/638/536/354.jpg?hmac=naYdQRBAVroMaaw4ZVq1sZZOqCeECMIs68LxZA8oKCY',
    'https://i.picsum.photos/id/158/536/354.jpg?hmac=Fypbuk8X0lxHTeT1DqNhpyF_Ns2cPZ_VVZapiHQ0bd4',
    'https://i.picsum.photos/id/738/536/354.jpg?hmac=JD1xUUMU1w6-Tv6eyLPl-EADiFvYWM80b0ONf6CN5Ls',
    'https://i.picsum.photos/id/596/536/354.jpg?hmac=mrHoLj2x4av0RJ93lg0kNG0s70jSgzr1bR6rX4YnuMQ',
    'https://i.picsum.photos/id/499/536/354.jpg?hmac=8f-M63IkmYvH2AXKVRL_mE-G5R9N1Qbt2rAPNq_rXvs'
];

const { width } = Dimensions.get('window');
const size = width / 3;

export default function Settings() {
    const [index, setIndex] = useState(0);

    return (
        <View style = { styles.container }>
            <Info />

            <Tab value = { index } onChange = { (event) => setIndex(event) }>
                <Tab.Item icon = {{ name: 'grid', type: 'ionicon', color: 'black' }} />
                <Tab.Item icon = {{ name: 'pricetag', type: 'ionicon', color: 'black' }} />
            </Tab>  
            
            <TabView value = { index } onChange = { setIndex } animationType = "spring">
                <TabView.Item style = {{ width: '100%' }}>
                    <FlatList data = { images }
                              keyExtractor = { (item, index) => index }
                              renderItem = { ({ item }) => <Image style = { styles.image } source = {{ uri: item }} /> }
                              numColumns = { 3 }
                              showsVerticalScrollIndicator = { false } />
                </TabView.Item>
           </TabView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    image: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 150,
        width: size
    }
});