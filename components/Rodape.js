import React from 'react';
import { View, Text } from 'react-native';
import estilos from '../estilos';

export default function Rodape() {
  return (
    <View style={estilos.rodapeContainer}>
      <Text style={estilos.rodapeTexto}>Seu Nome — dd/mm/aaaa</Text>
    </View>
  );
}
