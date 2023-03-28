import { StyleSheet, View, Image, Text, Pressable } from "react-native";

export default function Cover(props: { data: { name: string; by: string; likes: number; imageURL: string; artists: string; } }) {     
    const playAlbum = () => {}
    
    return (
        <View style = { styles.container }>
            <Image source = {{ uri: props.data.imageURL }} style = { styles.figure } />
            <Text  style = {{ color: 'white', fontWeight: "bold", fontSize: 25, marginTop: 11 }}>{ props.data.name }</Text>
            <View style = { styles.stats }>
                <Text style = {{ color: 'gray', fontSize: 14 }}>by { props.data.by }</Text>
                <Text style = {{ color: 'gray', fontSize: 14 }}>{ props.data.likes } likes</Text>
            </View>
            <Pressable onPress = { playAlbum } style = { styles.button }>
                <Text style = {{ color: 'white', fontWeight: 'bold', textTransform: 'uppercase', fontSize: 17 }}>Play</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        marginVertical: 11
    },
    figure: {
        width: 200,
        height: 200
    },
    stats: { 
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 137,
        marginBottom: 14
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1CD05D',
        width: 140,
        height: 44,
        borderRadius: 40
    }
});