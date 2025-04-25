import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import styles from "../styles/splashScreen";
import theme from "../constants/theme";

export default function SplashScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.logo}>🐦 Hummingbird</Text>
            <ActivityIndicator size="large" color={theme.colors.primary} />
        </View>
    );
}


