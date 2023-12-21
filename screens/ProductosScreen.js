import { View, Text, StyleSheet, ImageBackground, FlatList, Image, TouchableOpacity } from "react-native";
import productos from "../assets/data/dataProductos";
import { DataContext } from "../screens/DataContext";
import { useContext } from "react";

const ProductosScreen = () => {

    const { buyProducts } = useContext(DataContext);

    const handleBuyPress = (product) => {
        buyProducts(product);
    }

    return (
        <ImageBackground source={require('../assets/images/background.png')} style={styles.imageBg}>
            <View style={styles.containerTit}>
                <Text style={styles.colTitulo}>Nombre</Text>
                <Text style={styles.colTitulo}>Precio</Text>
                <Text style={styles.colTitulo}>Imagen</Text>
            </View>
            <FlatList data={productos} renderItem={({ item: repositorio }) => (
                <View style={styles.container}>
                    <View style={styles.colCont}>
                        <Text style={styles.txtInfo}>{repositorio.nombre}</Text>
                        <TouchableOpacity style={styles.btn} onPress={() => handleBuyPress(repositorio)}>
                            <Text style={styles.btnTxt}>Agregar al carrito</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.colCont}>
                        <Text style={styles.txtInfo}>{repositorio.precio}</Text>
                    </View>
                    <View style={styles.colCont}>
                        <Image style={styles.img} source={{uri: repositorio.imagen}}></Image>
                    </View>
                </View>
            )}>
            </FlatList>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 10,
        flexDirection: "row"
    },
    containerTit: {
        margin: 10,
        flexDirection: "row",
        marginBottom: 0
    },
    imageBg: {
        flex: 1,
        margin: 0,
        resizeMode: 'cover'
    },
    colCont: {
        margin: 18,
        marginBottom: 0,
    },
    colTitulo: {
        fontSize: 20,
        textAlign: "center",
        margin: 18,
        marginTop: 15,
        marginBottom: 0,
        marginRight: 30
    },
    img: {
        width: 130,
        height: 80,
        marginLeft: 10
    },
    btn: {
        marginTop: 7,
        justifyContent: 'center',
        backgroundColor: '#3498db',
        borderRadius: 5,
        width: 83,
        height: 45
    },
    btnTxt: {
        marginLeft: 5,
        color: 'white',
        fontSize: 15
    },
    txtInfo: {
        fontSize: 15,
        color: '#fff'
    }
});

export default ProductosScreen;