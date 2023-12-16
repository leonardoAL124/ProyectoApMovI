import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {

    const navigation = useNavigation();

    return (
        <View>
            <Text
                style = {{
                    fontSize: 30,
                    textAlign: "center",
                    marginTop: "20%"
                }}
            >Login Screen</Text>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Navegar")}>
                <Text style={styles.btnTxt}>Iniciar sesión</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    btn:{
        marginTop: 30,
        marginLeft: 140,
        justifyContent: 'center',
        backgroundColor: '#3498db',
        borderRadius: 5,
        width: 120,
        height: 35
    },
    btnTxt:{
        marginLeft: 13,
        color: 'white',
        fontSize: 16
    },
});

export default LoginScreen;