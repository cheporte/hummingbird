import { Pressable, Text } from "react-native";
import styles from "../styles/components/submitPostButton";

type Props = {
    onPress: () => void;
};

export default function SubmitPostButton({ onPress }: Props) {
    return (
        <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.text}>✨ Post Chirp</Text>
        </Pressable>
    );
}
