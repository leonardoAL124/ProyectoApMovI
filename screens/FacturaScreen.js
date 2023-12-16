import { View, Text, StyleSheet } from "react-native";
import { Table, Row, Rows } from "react-native-reanimated-table";

const FacturaScreen = () => {
    return (
        <View style={styles.container}>
            <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
                <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
                <Rows data={state.tableData} textStyle={styles.text}/>
            </Table>
            <View style={styles.contPrec}>
                <View>
                    <Text>Precio Total:</Text>
                    <Text>IVA:</Text>
                    <Text>Precio Total + IVA:</Text>
                </View>
                <View>
                    <Text>$1700</Text>
                    <Text>$204</Text>
                    <Text>$1904</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 15,
        marginTop: 20
    },
    head: { 
        height: 40, 
        backgroundColor: '#f1f8ff' 
    },
    text: { 
        margin: 6 
    },
    contPrec: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontSize: 20,
        marginTop: 15
    }
});

const state = {
    tableHead: ["Nombre", "Cantidad", "Precio"],
    tableData: [
        ["IPhone Pro 11", "1", "800"],
        ["AirPods", "1", "450"],
        ["Poco X3", "1", "400"],
        ["RedmiBuds", "2", "50"]
    ]
}

export default FacturaScreen;