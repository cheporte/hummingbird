import { useState } from "react";
import {Text, View, TextInput, Alert, TouchableOpacity} from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";
import SubmitPostButton from "../components/SubmitPostButton";
import AppNavigator from "../navigation/AppNavigator";

import styles from "../styles/authScreens";

// @ts-ignore
export default function SignupScreen({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            Alert.alert("Welcome to Hummingbird! 🐦");
            navigation.replace(AppNavigator);
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