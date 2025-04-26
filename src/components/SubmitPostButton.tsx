import { Pressable, Text } from "react-native";
import styles from "../styles/components/submitPostButton";

type Props = {
    onPress: () => void;
    text?: string;
};

export default function SubmitPostButton({ onPress, text="✨ Post Chirp" }: Props) {
    return (
        <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{ text }</Text>
        </Pressable>
    );
}
