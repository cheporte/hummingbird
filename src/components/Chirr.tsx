import styles from "../styles/components/chirr";
import {Image, Text, View} from "react-native";

type Props = {
    user: string;
    text: string;
    image?: string;
}

export default function Chirr({ user, text, image }: Props) {
    return (
        <View style={styles.card}>
            <Text style={styles.user}>@{user}</Text>
            <Text style={styles.text}>{text}</Text>
            <Image source={{uri: image }} style={styles.image}/>
        </View>
    );
}