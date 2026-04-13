import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
  appContainer: {flex: 1, backgroundColor: '#fff0f5'},
  cabecalhoContainer: {backgroundColor: '#f48fb1', padding: 16, alignItems: 'center'},
  cabecalhoTitulo: {fontSize: 20, fontWeight: 'bold', color: '#fff', textAlign: 'center'},
  cabecalhoSubtitulo: {fontSize: 13, color: '#fff', textAlign: 'center', marginTop: 4},
  conteudoContainer: {flex: 1, alignItems: 'center', padding: 20},
  conteudoTitulo: {fontSize: 22, fontWeight: 'bold', color: '#c2185b', marginBottom: 14},
  imagem: {width: 200, height: 200, borderWidth: 3, borderColor: '#f48fb1', borderRadius: 12, marginBottom: 16},
  input: {width: '100%', borderWidth: 1, borderColor: '#f48fb1', borderRadius: 8, padding: 10, fontSize: 15, backgroundColor: '#fff', marginBottom: 12},
  botaoVerificar: {backgroundColor: '#66bb6a', borderRadius: 8, padding: 12, width: '100%', alignItems: 'center', marginBottom: 8},
  botaoProximo: {backgroundColor: '#42a5f5', borderRadius: 8, padding: 12, width: '100%', alignItems: 'center', marginTop: 4},
  textoBotao: {color: '#fff', fontSize: 16, fontWeight: 'bold'},
  mensagemAcerto: {fontSize: 17, color: '#388e3c', fontWeight: 'bold', marginBottom: 8},
  mensagemErro: {fontSize: 17, color: '#d32f2f', fontWeight: 'bold', marginBottom: 8},
  rodapeContainer: {backgroundColor: '#f48fb1', padding: 10, alignItems: 'center'},
  rodapeTexto: {color: '#fff', fontSize: 12},
});

export default estilos;
