import { StyleSheet } from "react-native";

import theme from "../constants/theme";

export default StyleSheet.create({
    input: {
        backgroundColor: theme.colors.white,
        padding: theme.spacing.md,
        borderRadius: theme.radius.md,
        fontSize: theme.fontSizes.md,
        color: theme.colors.textDark,
        height: 120,
        textAlignVertical: "top",
        borderWidth: 1,
        borderColor: theme.colors.border,
        marginBottom: theme.spacing.md,
    },
});