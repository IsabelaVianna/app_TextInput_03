import React from 'react';
import { View, Text } from 'react-native';
import estilos from '../estilos';

export default function Rodape() {
  return (
    <View style={estilos.rodapeContainer}>
      <Text style={estilos.rodapeTexto}>ISABELA VIANNA — 13/04/2026</Text>
    </View>
  );
}
