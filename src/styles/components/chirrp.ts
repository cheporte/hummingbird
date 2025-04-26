import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    card: {
        padding: 12,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    user: { fontWeight: "bold", marginBottom: 4 },
    text: { fontSize: 16, marginBottom: 8 },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    content: {
        flex: 1,
        flexDirection: "column",
    },
});

export default styles;