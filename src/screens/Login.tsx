import { useState } from "react";
import {Text, View, TextInput, Alert, TouchableOpacity} from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";
import SubmitPostButton from "../components/SubmitPostButton";
import AppNavigator from "../navigation/AppNavigator";

import styles from "../styles/authScreens";
import MainTabs from "../navigation/MainTabs";

// @ts-ignore
export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            Alert.alert("Hummingbird recognized you! 🐦");
        } catch (err) {
            console.error(err);
            Alert.alert("Login failed!");
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome Back 🐦</Text>

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

            <SubmitPostButton onPress={handleLogin} text="Log In" />

            <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                <Text style={styles.linkText}>Don't have an account? Sign up here.</Text>
            </TouchableOpacity>
        </View>
    );
}