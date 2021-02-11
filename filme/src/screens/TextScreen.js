import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native';

const TextScreen = () => {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    return (

        <View style={styles.container}>

            <View style={styles.Emailcontainer}>
                <Text>Coloque seu Email: </Text>
                <TextInput style={styles.input}
                    autoCapitalize="none"
                    placeholder="Coloque seu Email"
                    value={email}
                    onChangeText={newValue => setEmail(newValue)} />

                <Text> Seu email é: {email}</Text>

                {
                    (email.length < 5 ? <Text>O email precisa ter mais de 5 caracteres</Text> : null)
                }
            </View>

            <View style={styles.Senhacontainer}>
                <Text>Coloque seu Senha: </Text>
                <TextInput style={styles.input}
                    autoCapitalize="none"
                    placeholder="Coloque sua senha"
                    value={senha}
                    onChangeText={newValue => setSenha(newValue)} />

                {
                    (senha.length < 5 ? <Text>A senha é fraca</Text> : null)
                }
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    Emailcontainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    Senhacontainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    },
    input: {
       
        margin: 5,
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: 1,
        width: 200,

    },

})

export default TextScreen;