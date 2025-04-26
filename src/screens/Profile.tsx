import { useState, useEffect } from "react";
import { View, Text, TextInput, Image } from "react-native";
import { auth } from "../services/firebase";

import styles from "../styles/profile";

import ProfileButton from "../components/ProfileButton";
import { updateUserProfile, getUserProfile } from "../services/firestore";

export default function Profile() {
    const currentUser =  auth.currentUser;

    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState("Hummy B.");
    const [username, setUsername] = useState("flutterbird");
    const [bio, setBio] = useState("Flutters by, coding high in the sky~ 🐦✨");
    const [image, setImage] = useState<"profile_light" | "profile_dark">("profile_light");

    useEffect(() => {
        const fetchProfile = async () => {
            if (currentUser) {
                const data = await getUserProfile(currentUser.uid);
                if (data) {
                    setName(data.name || "Hummy B.");
                    setUsername(data.username || "flutterbird");
                    setBio(data.bio || "Flutters by, coding high in the sky~ 🐦✨");
                    setImage(data.avatarUrl || "profile_light");
                }
            }
        };
        fetchProfile();
    }, [currentUser]);

    const toggleAvatar = () => {
        setImage(prev => (prev === "profile_light" ? "profile_dark" : "profile_light"));
    };

    const toggleEdit = async () => {
        if (isEditing) {
            try {
                const userId = currentUser?.uid
                if (userId) {
                    await updateUserProfile(userId, {
                        name,
                        username,
                        bio,
                        avatarUrl: image
                    });
                    console.log("Profile updated successfully! 🌟");
                } else {
                    console.error("No user logged in! 😔");
                }
            } catch (error) {
                console.error("Failed to update profile:", error);
            }
        }
        setIsEditing(!isEditing);
    };

    return (
        <View style={styles.container}>
            <Image
                source={image === "profile_light" ? require("../assets/profile_light.jpg") : require("../assets/profile_dark.jpg")}
                style={styles.avatar}
            />

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
                    <ProfileButton onPress={toggleAvatar} title="Change PFP"/>
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
