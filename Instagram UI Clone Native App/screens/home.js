import { StyleSheet, View, FlatList } from 'react-native';

import Story from '../components/story';
import Post from '../components/post';

import { users } from '../data/users';

let feed = [];
const generatefeed = () => users.forEach((user) => user.posts.forEach((post) => feed.push({ name: user.name, image: user.image, ...post })));

export default function Home() {
    generatefeed();

    return (
        <FlatList data = { feed }
                  style = { styles.container }
                  ListHeaderComponent = { <Story /> }
                  keyExtractor = { (item) => item.reacts.toString() }
                  renderItem = { ({ item }) => <Post data = { item } /> }
                  showsVerticalScrollIndicator = { false } />
       
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    }
});