import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { DataContext } from "../screens/DataContext";

const CarritoScreen = () => {

  const { cart } = useContext(DataContext);
  const navigation = useNavigation();

  return (
    <ImageBackground source={require('../assets/images/background.png')} style={styles.imageBg}>
      <View style={styles.container}>
        <View style={styles.lisCont}>
          <FlatList data={cart} renderItem={({item}) => (
            <View style={styles.productoCont}>
              <Image source={{uri: item.imagen}} style={styles.prodImg}></Image>
              <Text style={styles.prodTxt}>{item.nombre}</Text>
              <Text style={styles.prodTxt}>{item.precio}$</Text>
            </View>
          )}>
          </FlatList>
        </View>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Factura")}>
          <Text style={styles.btnTxt}>Pagar</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'sans-serif',
    margin: 15,
    borderRadius: 8,
  },
  tituloCont: {
    padding: 5,
    backgroundColor: 'rgba(10, 10, 10, 0.2)',
    flexDirection: 'row'
  },
  titulo: {
    paddingLeft: 5,
    fontSize: 25,
    color: '#fff',
    marginLeft: 4
  },
  imageBg: {
    flex: 1,
    margin: 0,
    resizeMode: 'cover'
  },
  image: {
    height: 40,
    width: 40
  },
  productoCont: {
    flexDirection: 'column',
    margin: 16,
    height: 150,
    width: 150,
    fontSize: 30,
    backgroundColor: 'rgba(10, 10, 10, 0.2)',
    borderRadius: 5
  },
  prodImg:{
    backgroundColor: '#fff',
    alignContent: 'center',
    height: 95,
    width: 150,
    marginBottom: 5
  },
  prodTxt:{
    color: '#fff',
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center'
  },
  lisCont:{
    flexDirection: 'row',
    marginLeft: 90
  },
  btn:{
    marginTop: 30,
    marginLeft: 140,
    justifyContent: 'center',
    backgroundColor: '#3498db',
    borderRadius: 5,
    width: 80,
    height: 35
  },
  btnTxt:{
    marginLeft: 18,
    color: 'white',
    fontSize: 16,
  }
});

export default CarritoScreen;