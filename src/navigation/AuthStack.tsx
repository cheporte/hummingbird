import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignupScreen from "../screens/Signup";
import LoginScreen from "../screens/Login";

const Stack = createNativeStackNavigator();

export default function AuthStack() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="Signup" component={SignupScreen}/>
        </Stack.Navigator>
    );
}