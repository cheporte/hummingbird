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
    image: { width: "100%", height: 180, borderRadius: 10 },
});

export default styles;