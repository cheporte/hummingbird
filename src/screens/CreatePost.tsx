import { useState } from "react";
import { View, TextInput, Image, Text } from 'react-native';

import ImageSelectButton from "../components/ImageSelectButton";
import SubmitPostButton from "../components/SubmitPostButton";

import styles from "../styles/createPost";
import theme from "../constants/theme";

import { createPost } from "../services/firestore";

export default function CreatePost() {

    const [text, setText] = useState<string>("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const submitPost = async () => {
        if (!text.trim()) {
            alert("A silent chirp? Add some text! ✨");
            return;
        }

        setIsSubmitting(true); // 🌟 we tell the app "hey, we're busy now!"
        try {

            await createPost({text});

            alert("Posted successfully 🐤🎉");
            setText("");

        } catch (err) {
            console.error("Post failed:", err);
            alert("Couldn't chirp 😭");
        } finally {
            setIsSubmitting(false); // 🌟 and later, "okay boss, we're done!"
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
            </View>
            <SubmitPostButton onPress={submitPost} />
        </View>
    );
}