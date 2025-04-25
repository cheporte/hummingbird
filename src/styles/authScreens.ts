import { StyleSheet } from "react-native";
import theme from "../constants/theme";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
        padding: 24,
        justifyContent: "center",
    },
    title: {
        fontSize: 28,
        fontWeight: "600",
        color: theme.colors.primary,
        marginBottom: 32,
        textAlign: "center",
    },
    input: {
        backgroundColor: theme.colors.white,
        padding: 12,
        borderRadius: 12,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: theme.colors.border,
        color: theme.colors.textDark,
    },
    linkText: {
        textAlign: "center",
        color: theme.colors.primary,
        marginTop: 16,
        textDecorationLine: "underline",
    },
});

export default styles;