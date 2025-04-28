import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const[contador, setContador] = useState();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>¡Presiona el botón!</Text>
      <input onClick={()=>setContador(contador+1)} type="button" value="Hola"></input>
      <p>Apretaste el botón {contador} veces</p>
      <StatusBar style="auto" />
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
    color:"brown"
  }
});
