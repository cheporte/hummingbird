import { StyleSheet } from "react-native";
import theme from "../../constants/theme";

const styles = StyleSheet.create({
    button: {
        backgroundColor: theme.colors.secondary,
        paddingVertical: theme.spacing.sm,
        paddingHorizontal: theme.spacing.lg,
        borderRadius: theme.radius.md,
        alignItems: "center",
        justifyContent: "center",
        marginTop: theme.spacing.md,
    },
    buttonPressed: {
        opacity: 0.9,
        transform: [{ scale: 0.97 }],
    },
    text: {
        color: theme.colors.white,
        fontWeight: "600",
        fontSize: theme.fontSizes.md,
    },
});

export default styles;
