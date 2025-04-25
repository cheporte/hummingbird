import { StyleSheet } from "react-native";
import theme from "../../constants/theme";

export default StyleSheet.create({
    button: {
        backgroundColor: theme.colors.primary,
        paddingVertical: theme.spacing.sm,
        paddingHorizontal: theme.spacing.lg,
        borderRadius: theme.radius.sm,
        alignItems: "center",
        marginTop: theme.spacing.md,
    },
    text: {
        color: theme.colors.white,
        fontWeight: "600",
        fontSize: theme.fontSizes.md,
    },
});
