import { StatusBar } from 'expo-status-bar';
import { ImgBackground, StyleSheet, useState, Text, View } from 'react-native';

export default function App() {
  // const[contador, setContador] = useState(0);
  const link = {uri: 'https://i.pinimg.com/736x/b0/73/e9/b073e9150cc603e3a5b757be38fc771b.jpg'}
  return (
    <View style={styles.container}>
      {/* <ImgBackground source={link} resizeMode="cover"> */}
        <Text style={styles.text}>¡Presiona el botón!</Text>
        <input style={styles.button} onClick={()=>setContador(contador+1)} type="button" value="Hola"></input>
        <p>Apretaste el botón veces</p>
        <StatusBar style="auto" />
      {/* </ImgBackground> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'light-red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color:"brown",
    marginBottom:'2%',
    fontSize:'120%'
  },
  button:{
    width:'30%',
    borderRadius:'5px',
    backgroundColor:'lightblue'
  }
});
