import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: { flex: 1, padding: 20 },
    title: { fontSize: 20, marginBottom: 10 },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 12,
        borderRadius: 8,
        marginBottom: 10,
        textAlignVertical: "top",
        minHeight: 100,
    },
    image: {
        width: "100%",
        height: 200,
        marginVertical: 10,
        borderRadius: 10,
    },
});