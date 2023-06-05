import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import VinhosList from './catalogoJson';

export default function TelaCatalogo(){
  return(
    <VinhosList/>
  );
}