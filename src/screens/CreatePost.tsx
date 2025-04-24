import { useState} from "react";
import { View, TextInput, Button, Image, Text } from 'react-native';

import styles from "../styles/createPost";

export default function CreatePost() {
    const [text, setText] = useState<string>("");
    const [image, setImage] = useState<string>("");

    // TODO: replace with expo image picker
    const fakeImage = 'https://placekitten.com/302/200'

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Write your chirrp 🐤</Text>
            <TextInput
                placeholder="Your poetic thought..."
                value={text}
                onChangeText={setText}
                style={styles.input}
                multiline
            />
            <Button title="Pick Image" onPress={() => setImage(fakeImage)}/>
            {image && (<Image source={{uri: image }} style={styles.image}/>)}
            <Button title="Chirr It" onPress={() => alert("Not yet functional 😅")}/>
        </View>
    );
}