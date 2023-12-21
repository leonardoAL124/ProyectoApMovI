import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons'; 

import CarritoScreen from "../screens/CarritoScreen";
import ProductosScreen from "../screens/ProductosScreen";
import { DataProvider } from "../screens/DataContext";

const Tab = createBottomTabNavigator();

const Navegacion = () => {
    return(
        <Tab.Navigator
            initialRouteName="Producto"
            screenOptions={{
                tabBarActiveTintColor: 'blue'
            }}
        >
            <Tab.Screen name="Productos" component={ProductosScreen} options={{headerShown: false, tabBarIcon: ({color, size}) => (<Feather name="shopping-bag" size={24} color="black" />)}}></Tab.Screen>
            <Tab.Screen name="Carrito" component={CarritoScreen} options={{headerShown: false,  tabBarIcon: ({color, size}) => (<AntDesign name="shoppingcart" size={24} color="black" />)}}></Tab.Screen>
        </Tab.Navigator>
    )
};

export default Navegacion;