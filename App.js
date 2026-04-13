import React from 'react';
import { View } from 'react-native';
import Cabecalho from './components/Cabecalho';
import Conteudo from './components/Conteudo';
import Rodape from './components/Rodape';
import estilos from './estilos';

export default function App() {
  return (
    <View style={estilos.appContainer}>
      <Cabecalho />
      <Conteudo />
      <Rodape />
    </View>
  );
}
