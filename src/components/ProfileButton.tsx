import { Pressable, Text } from 'react-native';

import styles from '../styles/components/profileButton';

type Props = {
    title: string;
    onPress: () => void;
};

export default function ProfileButton({ title, onPress }: Props) {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [
                styles.button,
                pressed && styles.buttonPressed
            ]}
        >
            <Text style={styles.text}>{ title }</Text>
        </Pressable>
    );
}