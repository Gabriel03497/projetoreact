import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View, } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Calculadora de Idade{"\n"}{"\n"}</Text>
      <Text style={styles.text2}>Digite o ano que você nasceu:{"\n"}{"\n"}</Text>
      <input style={styles.input}type="number" id="valor"/>
      <Text>{"\n"}</Text>
      <button style={styles.btn} onClick={() => Mensagem()}>Calcular</button>
      < button style={styles.btn1} onClick={() => Limpar()}>Limpar</button>
      <Text>{"\n"}</Text>
      <Text style={styles.text2}>Você tem:</Text>
      <Text style={styles.text2}><p id="result"/></Text>
      <StatusBar style="auto" />
    </View>
  );
}

function Mensagem(){
  const ano = 2023;
  const idade = document.querySelector("#valor").value;
  const idade2 = ano - idade;
  document.querySelector("#result").innerText = idade2+' anos !';
}

function Limpar()
{
  document.querySelector("#valor").value = '';
  document.querySelector("#result").innerText = '';

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1:{
    color: '#000000',
    fontSize: '40px'
  },
  text2:{
    color: '#000000',
    fontSize: '25px'
  },
  input:{
    textAlign: 'center',
    fontSize: '23px',
    borderRadius: 10
  },
  btn: {
    fontSize: '25px',
    borderRadius: 4,
    backgroundColor: 'green',
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },

  btn1: {
    fontSize: '25px',
    borderRadius: 4,
    backgroundColor: 'Red',
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },

});
