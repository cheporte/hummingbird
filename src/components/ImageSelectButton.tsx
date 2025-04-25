import { Pressable, Text } from "react-native";
import styles from "../styles/components/imageSelectButton";

type Props = {
    onPress: () => void;
};

export default function ImageSelectButton({ onPress }: Props) {
    return (
        <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.text}>📸 Select Image</Text>
        </Pressable>
    );
}
