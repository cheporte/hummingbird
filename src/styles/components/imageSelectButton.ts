import { StyleSheet } from "react-native";
import theme from "../../constants/theme";

export default StyleSheet.create({
    button: {
        backgroundColor: theme.colors.secondary,
        paddingVertical: theme.spacing.sm,
        paddingHorizontal: theme.spacing.lg,
        borderRadius: theme.radius.sm,
        alignItems: "center",
        marginBottom: theme.spacing.sm,
    },
    text: {
        color: theme.colors.white,
        fontWeight: "500",
        fontSize: theme.fontSizes.md,
    },
});
