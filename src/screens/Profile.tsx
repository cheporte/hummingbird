import { useState } from "react";
import { View, Text, TextInput, Image } from "react-native";
import styles from "../styles/profile";

import ProfileButton from "../components/ProfileButton";
import ImageSelectButton from "../components/ImageSelectButton";

import * as ImagePicker from "expo-image-picker";

export default function Profile() {
    const [isEditing, setIsEditing] = useState(false);

    const [name, setName] = useState("Hummy B.");
    const [username, setUsername] = useState("flutterbird");
    const [bio, setBio] = useState("Flutters by, coding high in the sky~ 🐦✨");
    const [image, setImage] = useState<string | null>(null);

    const toggleEdit = () => {
        if (isEditing) {
            // Saving logic would go here (e.g., Firebase update)
            console.log("Saved:", { name, username, bio });
        }
        setIsEditing(!isEditing);
    };

    const handleImageChange = async () => {
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
            {image && <Image source={{uri: image}} style={styles.avatar}/>}

            {isEditing ? (
                <>
                    <TextInput
                        style={styles.input}
                        value={name}
                        onChangeText={setName}
                        placeholder="Display name"
                    />
                    <TextInput
                        style={styles.input}
                        value={username}
                        onChangeText={setUsername}
                        placeholder="Username"
                    />
                    <TextInput
                        style={[styles.input, styles.textArea]}
                        value={bio}
                        onChangeText={setBio}
                        placeholder="Bio"
                        multiline
                    />

                    <ImageSelectButton onPress={handleImageChange}/>
                </>
            ) : (
                <>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.username}>@{username}</Text>
                    <Text style={styles.bio}>{bio}</Text>
                </>
            )}

            <ProfileButton
                title={isEditing ? "Save ✨" : "Edit Profile 💫"}
                onPress={toggleEdit}
            />
        </View>
    );
}
