import styles from "../styles/components/chirrp";
import {Image, Text, View} from "react-native";

type Props = {
    user: string;
    text: string;
    avatar?: "profile_light" | "profile_dark";
}

export default function Chirrp({ user, text, avatar = "profile_light" }: Props) {
    return (
        <View style={styles.card}>
            <Image
                source={
                    avatar === "profile_dark"
                        ? require("../assets/profile_dark.jpg")
                        : require("../assets/profile_light.jpg")
                }
                style={styles.avatar}
            />
            <View style={styles.content}>
                <Text style={styles.user}>@{user}</Text>
                <Text style={styles.text}>{text}</Text>
            </View>
        </View>
    );
}