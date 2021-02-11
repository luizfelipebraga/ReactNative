import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {

  const [tela, setTela] = useState('menu');
  const [jogadorAtual, setJogadorAtual] = useState('');
  const [tabuleiro, setTabuleiro] = useState([] as any);
  const [jogadasRestantes, setJogadasRestantes] = useState(0);
  const [ganhador, setGanhador] = useState('');

  function iniciarJogo(jogador: string) {

    setJogadorAtual(jogador);
    setJogadasRestantes(9);

    setTabuleiro([
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ]);

    setTela('jogo');

  }

  function jogar(linha: any , coluna: any ){
    tabuleiro [linha] [coluna] = jogadorAtual;
    setTabuleiro([...tabuleiro]);

    setJogadorAtual(jogadorAtual === 'X' ? 'O' : 'X');

    verificarGanhador(tabuleiro,linha,coluna);
  }

  //Linhas
  function verificarGanhador(tabuleiro:any, linha:any, coluna:any) {
    if(tabuleiro[linha][0] !== '' && tabuleiro[linha][0] === tabuleiro[linha][1] && tabuleiro[linha][1] === tabuleiro[linha][2]){
      return finalizarJogo(tabuleiro[linha][0])
    }
    
    //Colunas
    if(tabuleiro[0][coluna] !=='' && tabuleiro[0][coluna] === tabuleiro[1][coluna] && tabuleiro[1][coluna] === tabuleiro[2][coluna]){
      return finalizarJogo(tabuleiro[0][coluna])
    }

    //Diagonai 1
    if(tabuleiro[0][0] !=='' && tabuleiro[0][0] === tabuleiro[1][1] && tabuleiro[1][1] === tabuleiro[2][2]){
      return finalizarJogo(tabuleiro[0][0])
    }

    //Diagonai 2
    if(tabuleiro[0][2] !=='' && tabuleiro[0][2] === tabuleiro[1][1] && tabuleiro[1][1] === tabuleiro[2][0]){
      return finalizarJogo(tabuleiro[0][2])
    }

    //NENHUM GANHADOR
    if((jogadasRestantes - 1) === 0){
      return finalizarJogo('')
    }

    //Jogo nao finalizado;
    setJogadasRestantes(jogadasRestantes -1);
  }

  function finalizarJogo(jogador : string){
    setGanhador(jogador);
    setTela('ganhador');
  }


  const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor: "#fff",
      alignItems: 'center',
      justifyContent: 'center',
    },

    title: {
      fontSize: 30,
      fontWeight: 'bold',
    },

    subtitle: {
      fontSize: 20,
      marginTop: 15,
    },

    boxJogador: {
      width: 80,
      height: 80,
      alignItems: 'center',
      justifyContent: 'center',
      margin: 5,
    },

    JogadorX: {
      fontSize: 40,
      color: "#553fda",
    },

    JogadorO: {
      fontSize: 40,
      color: "#553fda"
    },

    inlineItems: {
      flexDirection: 'row',
    },

    botaoMenu:{
      marginTop:20,
    },

    textoBotaoMenu: {
      color:'#ddddd',
    },

    ganhador: {
      fontSize:20,
      fontWeight:'bold',
      color:'#333',
    },

  })

  switch (tela) {
    case 'menu':
      return getTelaMenu();

    case 'jogo':
      return getTelaJogo();

    case 'ganhador':
      return getTelaGanhador();

    default:
      console.log("Está página não existe");
  }

  function getTelaMenu() {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Text style={styles.title}>Jogo da Velha</Text>
        <Text style={styles.subtitle}>Selecione o primeiro jogador</Text>

        <View style={styles.inlineItems}>
          <TouchableOpacity
            style={styles.boxJogador}
            onPress={() => { iniciarJogo('X') }}>
            <Text style={styles.JogadorX}>X</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.boxJogador}
            onPress={() => { iniciarJogo('O') }}>
            <Text style={styles.JogadorO}>O</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function getTelaJogo() {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Text style={styles.title}>Jogo da Velha</Text>

        {
          tabuleiro.map((linha:any , numeroLinha : any) => {
            return(
              <View key={numeroLinha} style={styles.inlineItems}>
                {
                  linha.map((coluna: any, numeroColuna:any) => {
                    return(
                      <TouchableOpacity
                      key={numeroColuna}
                      disabled={coluna !== ''}
                      style={styles.boxJogador}
                      onPress={() => jogar(numeroLinha, numeroColuna  )}>
                        <Text style={coluna === 'X' ? styles.JogadorX : styles.JogadorO}>{coluna}</Text>
                    </TouchableOpacity>
                    )
                  })
                }
              </View>
            )
          })};

          <TouchableOpacity 
          style={styles.botaoMenu}
          onPress={() => setTela('menu')}>
            <Text style={styles.textoBotaoMenu}>Voltar ao Menu</Text>
          </TouchableOpacity>


      </View>
    );
  }

  function getTelaGanhador() {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Text style={styles.title}>Jogo da Velha</Text>
        <Text style={styles.subtitle}>Resultado Final</Text>

        {
          ganhador === '' && 
          <Text style={styles.ganhador}>Ninguem ganhou</Text>
        }

        {
          ganhador !== '' && 
          <>
          <Text style={styles.ganhador}>Ganhador</Text>

            <View
              style={styles.boxJogador}>
                  <Text style={ganhador === 'X' ? styles.JogadorX : styles.JogadorO}>{ganhador}</Text>
              </View>

          </>
        }

          <TouchableOpacity 
          style={styles.botaoMenu}
          onPress={() => setTela('menu')}>
            <Text style={styles.textoBotaoMenu}>Voltar ao Menu</Text>
          </TouchableOpacity>

      </View>
    );
  }

  
};
