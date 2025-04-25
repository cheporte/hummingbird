import { StyleSheet } from "react-native";

import theme from "../constants/theme";

export default StyleSheet.create({
    container: { flex: 1, padding: 20, justifyContent: "space-between" },
    title: { fontSize: 20, marginBottom: 10 },
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
    image: {
        width: "100%",
        height: 200,
        marginVertical: 10,
        borderRadius: 10,
    },
});