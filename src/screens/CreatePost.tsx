import { useState} from "react";
import { View, TextInput, Button, Image, Text } from 'react-native';

import ProfileButton from "../components/ProfileButton";

import styles from "../styles/createPost";
import theme from "../constants/theme";

export default function CreatePost() {
    const [text, setText] = useState<string>("");
    const [image, setImage] = useState<string>("");

    // TODO: replace with expo image picker
    const fakeImage = 'https://placekitten.com/302/200'

    const submitPost = () => {
        alert("Submitted <3");
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Compose your chirp 🎶</Text>
            <TextInput
                style={styles.input}
                multiline
                placeholder="Say something beautiful..."
                placeholderTextColor={theme.colors.textLight}
                value={text}
                onChangeText={setText}
            />
            <ProfileButton title="Post ✨" onPress={submitPost} />
        </View>
    );
}