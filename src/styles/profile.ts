import { StyleSheet } from "react-native";
import theme from "../constants/theme";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.white,
        padding: theme.spacing.lg,
        alignItems: "center",
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: theme.spacing.md,
        borderWidth: 2,
        borderColor: theme.colors.primary,
    },
    name: {
        fontSize: theme.fontSizes.lg,
        fontWeight: "700",
        color: theme.colors.textDark,
    },
    username: {
        fontSize: theme.fontSizes.md,
        color: theme.colors.textLight,
        marginBottom: theme.spacing.sm,
    },
    bio: {
        fontSize: theme.fontSizes.md,
        color: theme.colors.textDark,
        textAlign: "center",
        marginBottom: theme.spacing.lg,
    },
    input: {
        width: "100%",
        backgroundColor: theme.colors.white,
        padding: theme.spacing.sm,
        borderRadius: theme.radius.sm,
        borderColor: theme.colors.border,
        borderWidth: 1,
        marginBottom: theme.spacing.sm,
    },
    textArea: {
        height: 100,
        textAlignVertical: "top",
    },
});

export default styles;
