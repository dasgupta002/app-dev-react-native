import { StyleSheet, View, Image, Text, Pressable } from 'react-native';

export default function Info() {
    return (
        <View style = { styles.container }>
            <View style = {{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 25, marginTop: 25 }}>
                <Image source = { require('../assets/photo.jpg') } style = { styles.photo } />
                <View style = { styles.count }>
                    <View style = {{ flexDirection: 'column', alignItems: 'center' }}>
                        <Text style = { styles.text }>112</Text>
                        <Text style = { styles.text }>Posts</Text>
                    </View>
                    <View style = {{ flexDirection: 'column', alignItems: 'center' }}>
                        <Text style = { styles.text }>2247</Text>
                        <Text style = { styles.text }>Followers</Text>
                    </View>
                    <View style = {{ flexDirection: 'column', alignItems: 'center' }}>
                        <Text style = { styles.text }>18</Text>
                        <Text style = { styles.text }>Following</Text>
                    </View>
                </View>
            </View>
            <View style = {{ paddingHorizontal: 25, marginTop: 25 }}>
                <Text style = { styles.text }>- Explorer</Text>
                <Text style = { styles.text }>- Artist</Text>
                <Text style = { styles.text }>- Coffee holic</Text>
                <Text style = { styles.text }>- Loves puppies</Text>
            </View>
            <Pressable style = { styles.button }>
                <Text style = {{ color: 'white', fontWeight: 'bold', textTransform: 'uppercase' }}>Edit Profile</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 25
    },
    photo: {
        height: 60,
        width: 60,
        borderRadius: 30
    },
    count: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 36
    },
    text: {
        fontFamily: 'ZackAndSarah'
    },
    button: {
        marginTop: 25,
        marginHorizontal: 25,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 7,
        paddingHorizontal: 33,
        borderRadius: 4,
        elevation: 5,
        backgroundColor: '#1ca9c9'
    }
});