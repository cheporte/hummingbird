import { View, Text, Image } from "react-native";

import styles from "../styles/profile";

export default function Profile() {
    const user = {
        name: "Code Canary",
        username: "code_canary",
        bio: "Tweeting poetry and TypeScript ✍️💻",
        avatar: "https://placekitten.com/100/100",
    }
    return (
        <View style={styles.container}>
            <Image source={{uri: user.avatar}} style={styles.avatar} />
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.username}>@{user.username}</Text>
            <Text style={styles.bio}>{user.bio}</Text>
        </View>
    );
}
