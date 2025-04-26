import { useState } from "react";
import {Text, View, TextInput, Alert, TouchableOpacity} from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";
import SubmitPostButton from "../components/SubmitPostButton";
import { createUserProfile} from "../services/firestore";
import styles from "../styles/authScreens";

// @ts-ignore
export default function SignupScreen({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = async () => {
        try {
            const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredentials.user

            await createUserProfile(user.uid, "flutterbird", "flutterbird123", "Dreaming on the wind 🌬️")
        } catch (err) {
            console.error(err);
            Alert.alert("Signup failed!");
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hey, new chirrp! 🐦</Text>

            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                style={styles.input}
                placeholderTextColor="#999"
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={styles.input}
                placeholderTextColor="#999"
            />

            <SubmitPostButton onPress={handleSignup} text="Sign Up" />

            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={styles.linkText}>Already have an account? Login here.</Text>
            </TouchableOpacity>
        </View>
    );
}