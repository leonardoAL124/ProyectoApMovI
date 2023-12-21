import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { useContext } from "react";
import { DataContext } from "../screens/DataContext";

const FacturaScreen = () => {

    const { cart } = useContext(DataContext);

    const total = cart.reduce((acc, ele) => acc + parseFloat(ele.precio), 0)
    const iva = parseFloat(total) * 0.12;
    const totIva = parseFloat(iva) + parseFloat(total);

    return (
        <View style={styles.containerGen}>
            <View style={styles.containerTit}>
                <Text style={styles.colTitulo}>Nombre</Text>
                <Text style={styles.colTitulo}>Precio</Text>
            </View>
            <FlatList data={cart} renderItem={({item}) => (
                <View style={styles.container}>
                    <View style={styles.colCont}>
                        <Text style={styles.txtInfo}>{item.nombre}</Text>
                    </View>
                    <View style={styles.colCont}>
                        <Text style={styles.txtInfo}>{item.precio}</Text>
                    </View>
                </View>
            )}>
            </FlatList>
            <View style={styles.contPrec}>
                <View>
                    <Text>Precio Total:</Text>
                    <Text>IVA:</Text>
                    <Text>Precio Total + IVA:</Text>
                </View>
                <View>
                    <Text>${total}</Text>
                    <Text>${iva}</Text>
                    <Text>${totIva}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    containerGen: {
        margin: 15,
        marginTop: 20
    },
    container: {
        flexDirection: "row",
    },
    contPrec: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontSize: 20,
        marginTop: 50
    },
    containerTit: {
        margin: 10,
        flexDirection: "row",
        marginBottom: 0,
        marginLeft: 15
    },
    colCont: {
        margin: 18,
        marginBottom: 0,
    },
    colTitulo: {
        fontSize: 20,
        textAlign: "center",
        margin: 0,
        marginTop: 5,
        marginRight: 70
    },
    txtInfo: {
        fontSize: 15,
        marginRight: 40
    }
});

export default FacturaScreen;