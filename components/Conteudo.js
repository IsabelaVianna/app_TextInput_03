import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableHighlight } from 'react-native';
import estilos from '../estilos';

const princesas = [
  {nome: 'Cinderela', imagem: {uri: 'https://static.wikia.nocookie.net/disney/images/1/1f/Cinderella_2015_poster.png'}},
  {nome: 'Ariel', imagem: {uri: 'https://static.wikia.nocookie.net/disney/images/1/18/Ariel_-_The_Little_Mermaid.png'}},
  {nome: 'Bela', imagem: {uri: 'https://static.wikia.nocookie.net/disney/images/2/2e/Belle-beauty-and-the-beast.png'}},
  {nome: 'Rapunzel', imagem: {uri: 'https://static.wikia.nocookie.net/disney/images/7/7b/Rapunzel_disney_princess.png'}},
  {nome: 'Branca de Neve', imagem: {uri: 'https://static.wikia.nocookie.net/disney/images/f/f2/Snow_White_disney_princess.png'}},
];

function sorteiaIndice() {
  return Math.floor(Math.random() * princesas.length);
}

export default function Conteudo() {
  const [indice, setIndice] = useState(sorteiaIndice());
  const [resposta, setResposta] = useState('');
  const [mensagem, setMensagem] = useState('');

  function verificar() {
    if (resposta.trim().toLowerCase() === princesas[indice].nome.toLowerCase()) {
      setMensagem('acertou');
    } else {
      setMensagem('errou');
    }
  }

  function proximo() {
    setIndice(sorteiaIndice());
    setResposta('');
    setMensagem('');
  }

  return (
    <View style={estilos.conteudoContainer}>
      <Text style={estilos.conteudoTitulo}>Acerte a Princesa da Disney!</Text>
      <Image source={princesas[indice].imagem} style={estilos.imagem} resizeMode="contain" />
      <TextInput
        style={estilos.input}
        placeholder="Digite o nome da princesa..."
        onChangeText={(texto) => setResposta(texto)}
        value={resposta}
      />
      <TouchableHighlight style={estilos.botaoVerificar} onPress={verificar} underlayColor="#388e3c">
        <Text style={estilos.textoBotao}>Verificar</Text>
      </TouchableHighlight>
      {mensagem === 'acertou' && <Text style={estilos.mensagemAcerto}>Acertou!</Text>}
      {mensagem === 'errou' && <Text style={estilos.mensagemErro}> Errou! Tente novamente.</Text>}
      <TouchableHighlight style={estilos.botaoProximo} onPress={proximo} underlayColor="#1565c0">
        <Text style={estilos.textoBotao}>Próximo</Text>
      </TouchableHighlight>
    </View>
  );
}
