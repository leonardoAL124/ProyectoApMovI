import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import CarritoScreen from "../screens/CarritoScreen";
import ProductosScreen from "../screens/ProductosScreen";

const Tab = createBottomTabNavigator();

const Navegacion = () => {
    return(
        <Tab.Navigator
            initialRouteName="Producto"
            screenOptions={{
                tabBarActiveTintColor: 'blue'
            }}
        >
            <Tab.Screen name="Producto" component={ProductosScreen}></Tab.Screen>
            <Tab.Screen name="Carrito" component={CarritoScreen} options={{headerShown: false,}}></Tab.Screen>
        </Tab.Navigator>
    )
};

export default Navegacion;