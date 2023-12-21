import { View, Text, StyleSheet, TouchableOpacity, TextInput, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase-config";

const LoginScreen = () => {

    const navigation = useNavigation();
    const [txtUsr, onChangeTextUsr] = useState('');
    const [txtPsw, onChangeTextPsw] = useState('');

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    

    const handleSignIn = () => {
        signInWithEmailAndPassword(auth, txtUsr, txtPsw).then((userCredential) => {
            console.log("Ingreso!")
            const user = userCredential.user;
            console.log(user)
            navigation.navigate("Navegar")
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <ImageBackground source={require('../assets/images/LogoBg.jpg')} style={styles.imageBg}>
            <View>
                <Text style={styles.titulo}>Bienvenido!</Text>
                <View style={styles.formulario}>
                    <Text style={styles.subtitulo}>E-mail</Text>
                    <TextInput style={styles.contUser} onChangeText={onChangeTextUsr} value={txtUsr} placeholder="Ingrese su correo"></TextInput>
                    <Text style={styles.subtitulo}>Contraseña</Text>
                    <TextInput style={styles.contPasw} onChangeText={onChangeTextPsw} value={txtPsw} placeholder="Ingrese su contraseña"></TextInput>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate("Registro")}>
                    <Text style={styles.regisTxt}>No tienes una cuenta? Registrate!</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={handleSignIn}>
                    <Text style={styles.btnTxt}>Iniciar sesión</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    btn: {
        marginTop: 30,
        marginLeft: 140,
        justifyContent: 'center',
        backgroundColor: '#3498db',
        borderRadius: 5,
        width: 120,
        height: 35
    },
    btnTxt: {
        marginLeft: 13,
        color: 'white',
        fontSize: 16
    },
    regisTxt: {
        margin: 15,
        fontSize: 16,
        color: 'blue'
    },
    formulario: {
        margin: 15
    },
    titulo: {
        fontSize: 30,
        textAlign: "center",
        marginTop: "20%",
        color: '#fff'
    },
    subtitulo: {
        fontSize: 16,
        color: '#fff'
    },
    contUser: {
        borderColor: 'black',
        borderRadius: 10,
        borderWidth: 2,
        marginTop: 5,
        marginBottom: 13,
        alignContent: "center",
        padding: 7,
        fontSize: 16,
        color: '#fff'
    },
    contPasw: {
        borderColor: 'black',
        borderRadius: 10,
        borderWidth: 2,
        marginTop: 5,
        alignContent: "center",
        padding: 7,
        fontSize: 16,
        color: '#fff'
    },
    imageBg: {
        flex: 1,
        margin: 0,
        resizeMode: 'cover'
    },
});

export default LoginScreen;