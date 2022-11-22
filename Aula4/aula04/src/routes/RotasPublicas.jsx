import { createNativeStackNavigator } from '@react-navigation/bottom-tabs';
import { Login } from '../screens/Login';
import { RotasPrivadas } from './RotasPrivadas';

const Stack = createNativeStackNavigator();

export const RotasPublicas = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Privado" component={RotasPrivadas} />
        </Stack.Navigator>
    );
};