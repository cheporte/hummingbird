import {StyleSheet} from "react-native";
import theme from "../constants/theme";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
        alignItems: "center",
        justifyContent: "center",
    },
    logo: {
        fontSize: 32,
        fontWeight: "600",
        color: theme.colors.primary,
        marginBottom: 20,
    },
});

export default styles;