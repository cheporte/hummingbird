import { View, Text, FlatList, Image } from "react-native";

import styles from '../styles/feed';

const mockChirrps = [
    {
        id: "1",
        user: "poet_pelican",
        text: "Wings fluttering like code compiling 🐦✨",
        image: "https://placekitten.com/300/200",
    },
    {
        id: "2",
        user: "bug_hunter42",
        text: "Fixed a bug today and felt like a hero 🛠️🔥",
        image: "https://placekitten.com/301/200",
    },
];

export default function Feed() {
    return (
        <FlatList
            style={styles.list}
            data={mockChirrps}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <View style={styles.card}>
                    <Text style={styles.user}>@{item.user}</Text>
                    <Text style={styles.text}>@{item.text}</Text>
                    <Image source={{uri: item.image }} style={styles.image}/>
                </View>
            )}
        />
    );
}


