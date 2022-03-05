import { StyleSheet, View, Image } from 'react-native';

export default function ProfileImage({ image, size = 70 }) {
    return (
        <View style = { [ styles.container, { width: size + 6, height: size + 6 } ] }>
            <Image source = {{ uri: image }} style = { [ styles.image, { width: size, height: size } ] } />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 6,
        borderRadius: 40,
        borderWidth: 3,
        borderColor: '#ae22e0'
    },
    image: {
        borderRadius: 40,
        borderWidth: 1,
        borderColor: '#ffffff'
    }
});