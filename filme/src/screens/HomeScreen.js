import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

// se colocar a chave estaremos especificando qual propriedade estamos usando dentro de props // ({navigation})
const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>HomePage</Text>

      <View style = {styles.flexBotoes}>
        <TouchableOpacity style={styles.botaoFilme}>
          <Text style={styles.textoBotaoFilme}
            onPress={() => navigation.navigate('List')}
          >Ir para página de Lista de Filmes</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoFilme}>
          <Text style={styles.textoBotaoFilme}
            onPress={() => navigation.navigate('ImageTela')}
          >Ir para página de Imagem dos Filmes</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.botaoFilme}>
          <Text style={styles.textoBotaoFilme}
            onPress={() => navigation.navigate('CurrentCount')}
          >Ir para página de Current Count</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoFilme}>
          <Text style={styles.textoBotaoFilme}
            onPress={() => navigation.navigate('ColorTela')}
          >Ir para página de Cores</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoFilme}>
          <Text style={styles.textoBotaoFilme}
            onPress={() => navigation.navigate('TextTela')}
          >Ir para página de Inputs</Text>
        </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  flexBotoes : {
    display: 'flex',
    flexDirection : 'row',
    justifyContent: "space-between",
    alignItems: 'center',
    

  },

  botaoFilme: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin:5,
    marginTop: 10,

    backgroundColor: '#F6511D',
  },

  textoBotaoFilme: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',

    padding: 10,
  }
});

export default HomeScreen;
