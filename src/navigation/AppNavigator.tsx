import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feed from '../screens/Feed';
import CreatePost from '../screens/CreatePost';
import Profile from '../screens/Profile';

import { Text } from "react-native";

import theme from "../constants/theme";

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
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
