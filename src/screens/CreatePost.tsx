import { useState} from "react";
import { View, TextInput, Image, Text } from 'react-native';

import ImageSelectButton from "../components/ImageSelectButton";
import SubmitPostButton from "../components/SubmitPostButton";

import styles from "../styles/createPost";
import theme from "../constants/theme";

import * as ImagePicker from 'expo-image-picker';

export default function CreatePost() {
    const [text, setText] = useState<string>("");
    const [image, setImage] = useState<string | null>(null);

    const submitPost = () => {
        alert("Submitted <3");
    }

    const handleImageSelect = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: "images",
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Compose your chirp 🎶</Text>
                <TextInput
                    style={styles.input}
                    multiline
                    placeholder="Say something beautiful..."
                    placeholderTextColor={theme.colors.textLight}
                    value={text}
                    onChangeText={setText}
                />
                {image && <Image source={{uri: image}} style={styles.image}/>}
                <ImageSelectButton onPress={handleImageSelect} />
            </View>
            <SubmitPostButton onPress={submitPost} />
        </View>
    );
}