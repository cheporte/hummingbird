import { useState, useEffect } from "react";
import { Text, FlatList } from "react-native";

import styles from '../styles/feed';
import Chirrp from "../components/Chirrp";
import { getPosts } from "../services/firestore";

type ChirrpType = {
    id: string;
    user: string;
    text: string;
    avatarUrl?: string;
};

export default function Feed() {
    const [chirrps, setChirrps] = useState<ChirrpType[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            const loadedPosts = await getPosts();
            setChirrps(loadedPosts);
            setLoading(false);
        };
        fetchPosts();
    }, []);

    if (loading) {
        return <Text style={styles.loadingText}>Loading chirrps... 🐣✨</Text>;
    }

    return (
        <FlatList
            style={styles.list}
            data={chirrps}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <Chirrp text={item.text} user={item.user} avatar={item.avatarUrl}/>
            )}
        />
    );
}
