import { NavigationContainer } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { User } from "firebase/auth";
import { auth } from "../services/firebase";

import MainTabs from "./MainTabs";
import AuthStack from "./AuthStack";
import SplashScreen from "../screens/SplashScreen";

export default function AppNavigator() {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        return auth.onAuthStateChanged(async (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
    }, []);

    if (loading) return <SplashScreen />;

    return (
        <NavigationContainer>
            {user ? <MainTabs /> : <AuthStack />}
        </NavigationContainer>
    )
}
