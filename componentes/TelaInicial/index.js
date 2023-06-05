import { StatusBar } from 'expo-status-bar';
import { StyleSheet,ImageBackground, Text, View } from 'react-native';

import imgCapa from '../../assets/capa.jpg';
import estilos from './estilos';

export default function TelaInicial() {
  return (
    <ImageBackground
      blurRadius= { 4 }
      style={estilos.container}
      source={imgCapa}>
        <Text style= {estilos.titulo} >Adega Preferida</Text>
        <Text style= {estilos.subtitulo}>Aqui você encontra os melhores e mais saborosos vinhos.</Text>
      </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
