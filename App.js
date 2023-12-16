import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import LoginScreen from "./screens/LoginScreen";
import Navegacion from "./screens/Navegacion";
import FacturaScreen from "./screens/FacturaScreen";

const InicioTabNavigator = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <InicioTabNavigator.Navigator
        initialRouteName="Login"
      >
        <InicioTabNavigator.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        >
        </InicioTabNavigator.Screen>
        <InicioTabNavigator.Screen
          name="Navegar"
          component={Navegacion}
        >
        </InicioTabNavigator.Screen>
        <InicioTabNavigator.Screen
          name="Factura"
          component={FacturaScreen}
        >
        </InicioTabNavigator.Screen>
      </InicioTabNavigator.Navigator>
    </NavigationContainer>
  );
}