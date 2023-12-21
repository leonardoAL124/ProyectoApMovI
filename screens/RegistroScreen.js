import { View, Text, StyleSheet, TouchableOpacity, TextInput, ImageBackground, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase-config";

const RegistroScreen = () => {

    const navigation = useNavigation();
    const [txtUsr, onChangeTextUsr] = useState('');
    const [txtPsw, onChangeTextPsw] = useState('');
    const [txtNom, onChangeTextNom] = useState('');
    const [txtApe, onChangeTextApe] = useState('');

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    const handleCreateAccount = () => {
        createUserWithEmailAndPassword(auth, txtUsr, txtPsw).then((userCredential) => {
            console.log("Cuenta creada")
            const user = userCredential.user;
            console.log(user)
            navigation.navigate("Login")
        })
        .catch(error => {
            console.log(error)
            Alert.alert(error.message)
        })
    }

    return (
        <ImageBackground source={require('../assets/images/LogoBg.jpg')} style={styles.imageBg}>
        <View>
            <Text style={styles.titulo}>Ingrese su información</Text>
            <View style={styles.formulario}>
                <Text style={styles.subtitulo}>Nombre</Text>
                <TextInput style={styles.contUser} onChangeText={onChangeTextNom} value={txtNom} placeholder="Ingrese su nombre"></TextInput>
                <Text style={styles.subtitulo}>Apellido</Text>
                <TextInput style={styles.contUser} onChangeText={onChangeTextApe} value={txtApe} placeholder="Ingrese su apellido"></TextInput>
                <Text style={styles.subtitulo}>E-mail</Text>
                <TextInput style={styles.contUser} onChangeText={onChangeTextUsr} value={txtUsr} placeholder="Ingrese su correo"></TextInput>
                <Text style={styles.subtitulo}>Contraseña</Text>
                <TextInput style={styles.contUser} onChangeText={onChangeTextPsw} value={txtPsw} placeholder="Ingrese su contraseña"></TextInput>
            </View>
            <TouchableOpacity style={styles.btn} onPress={handleCreateAccount}>
                <Text style={styles.btnTxt}>Enviar</Text>
            </TouchableOpacity>
        </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    btn: {
        marginTop: 30,
        marginLeft: 160,
        justifyContent: 'center',
        backgroundColor: '#3498db',
        borderRadius: 5,
        width: 70,
        height: 35
    },
    btnTxt: {
        marginLeft: 13,
        color: 'white',
        fontSize: 16
    },
    formulario: {
        margin: 15
    },
    titulo: {
        fontSize: 30,
        textAlign: "center",
        marginTop: "10%",
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
        fontSize: 16
    },
    imageBg: {
        flex: 1,
        margin: 0,
        resizeMode: 'cover'
    },
});

export default RegistroScreen;