import { StyleSheet, ScrollView, View, Text, Image } from 'react-native';

import { users } from '../data/users';

export default function Notifications() {
    return (
        <ScrollView style = { styles.container } showsVerticalScrollIndicator = { false }>
            <Text style = { styles.heading }>Today</Text>
                <View style = { styles.wrapper }>
                    <Image source = {{ uri: users[0].image }} style = { styles.picture } />
                    <View>
                        <Text style = { styles.gist }>{ users[0].name } commented on your photo.</Text>
                        <Text style = { styles.posted }>5 mins ago</Text>
                    </View>
                </View>
                <View style = { styles.wrapper }>
                    <Image source = {{ uri: users[3].image }} style = { styles.picture } />
                    <View>
                        <Text style = { styles.gist }>{ users[3].name } commented on your photo.</Text>
                        <Text style = { styles.posted }>6 hours ago</Text>
                    </View>
                </View>

            <Text style = { styles.heading }>Yesterday</Text>
                <View style = { styles.wrapper }>
                    <Image source = {{ uri: users[1].image }} style = { styles.picture } />
                    <View>
                        <Text style = { styles.gist }>{ users[1].name } mentioned you in a post.</Text>
                        <Text style = { styles.posted }>18 hours ago</Text>
                    </View>
                </View>
                
            <Text style = { styles.heading }>Last Week</Text>
                <View style = { styles.wrapper }>
                    <Image source = {{ uri: users[4].image }} style = { styles.picture } />
                    <View>
                        <Text>{ users[4].name } tagged you in his post.</Text>
                        <Text style = { styles.posted }>4 days ago</Text>
                    </View>
                </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 6,
        paddingLeft: 14,    
        backgroundColor: 'white'
    },
    heading: {
        marginTop: 10,
        marginBottom: 10,
        fontWeight: 'bold',
        fontSize: 14
    },
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    picture: {
        marginRight: 14,
        width: 30,
        height: 30,
        borderRadius: 15
    },
    posted: {
        marginTop: 4,
        fontSize: 11,
        color: 'gray'
    }
});