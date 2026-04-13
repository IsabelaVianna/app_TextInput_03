import React from 'react';
import { View, Text } from 'react-native';
import estilos from '../estilos';

export default function Cabecalho() {
  return (
    <View style={estilos.cabecalhoContainer}>
      <Text style={estilos.cabecalhoTitulo}>🌸 Capítulo 06 - Componentes UI</Text>
      <Text style={estilos.cabecalhoSubtitulo}>TouchableHighlight || TextInput</Text>
    </View>
  );
}
