import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import theme from "../constants/theme";
import Feed from "../screens/Feed";
import {Text} from "react-native";
import CreatePost from "../screens/CreatePost";
import Profile from "../screens/Profile";

const Tab = createBottomTabNavigator();

export default function MainTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: theme.colors.background,
                    borderTopColor: theme.colors.border,
                    height: 60,
                },
                tabBarActiveTintColor: theme.colors.primary,
                tabBarInactiveTintColor: theme.colors.textLight,
                headerStyle: {
                    backgroundColor: theme.colors.background,
                },
                headerTitleStyle: {
                    color: theme.colors.textDark,
                    fontWeight: "700",
                },
            }}
        >
            <Tab.Screen name="Feed" component={Feed} options={{tabBarIcon: () => <Text style={{fontSize: 18}}>📰</Text>}}/>
            <Tab.Screen name="Post" component={CreatePost} options={{tabBarIcon: () => <Text style={{fontSize: 18}}>✍️</Text>}}/>
            <Tab.Screen name="Profile" component={Profile} options={{tabBarIcon: () => <Text style={{fontSize: 18}}>👤</Text>}}/>
        </Tab.Navigator>
    );
}