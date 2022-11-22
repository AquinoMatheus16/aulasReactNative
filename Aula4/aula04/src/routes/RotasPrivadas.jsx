import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Detalhes } from '../screens/Detalhes';
import { Home } from '../screens/Home'

const Tab = createBottomTabNavigator();

export const RotasPrivadas = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Detalhes" component={Detalhes} />
        </Tab.Navigator>
    );
};
