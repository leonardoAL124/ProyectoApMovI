import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <ImageBackground source={require('./assets/images/background.png')} style={styles.imageBg}>
      <View style={styles.container}>
        <View style={styles.tituloCont}>
          <Image source={require('./assets/images/FleIzq.png')} style={styles.image}></Image>
          <Text style={styles.titulo}>Productos seleccionados</Text>
        </View>
        <View style={styles.lisCont}>
          <View style={styles.productoCont}>
            <Image source={require('./assets/images/Iphone11.jpg')} style={styles.prodImg}></Image>
            <Text style={styles.prodTxt}>Nombre: IPhone Pro 11</Text>
            <Text style={styles.prodTxt}>Cantidad: 1</Text>
          </View>
          <View style={styles.productoCont}>
            <Image source={require('./assets/images/airpods.jpg')} style={styles.prodImg}></Image>
            <Text style={styles.prodTxt}>Nombre: AirPods</Text>
            <Text style={styles.prodTxt}>Cantidad: 1</Text>
          </View>
        </View>
        <View style={styles.lisCont}>
          <View style={styles.productoCont}>
            <Image source={require('./assets/images/pocox3.jpg')} style={styles.prodImg}></Image>
            <Text style={styles.prodTxt}>Nombre: Poco X3</Text>
            <Text style={styles.prodTxt}>Cantidad: 1</Text>
          </View>
          <View style={styles.productoCont}>
            <Image source={require('./assets/images/redmibuds.jpg')} style={styles.prodImg}></Image>
            <Text style={styles.prodTxt}>Nombre: RedmiBuds</Text>
            <Text style={styles.prodTxt}>Cantidad: 2</Text>
          </View>
        </View>
        <View style={styles.lisCont}>
          <View style={styles.productoCont}>
            <Image source={require('./assets/images/cargadorsamsung.webp')} style={styles.prodImg}></Image>
            <Text style={styles.prodTxt}>Nombre: Cargador Samsung</Text>
            <Text style={styles.prodTxt}>Cantidad: 1</Text>
          </View>
          <View style={styles.productoCont}>
            <Image source={require('./assets/images/cargadorIphone.jpg')} style={styles.prodImg}></Image>
            <Text style={styles.prodTxt}>Nombre: Cargador IPhone</Text>
            <Text style={styles.prodTxt}>Cantidad: 1</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.btn}>
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
    backgroundColor: 'rgba(10, 10, 10, 0.4)',
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
  },
  lisCont:{
    flexDirection: 'row'
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
