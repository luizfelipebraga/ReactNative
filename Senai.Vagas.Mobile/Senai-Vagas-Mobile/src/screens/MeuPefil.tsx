
import React, { useState, useEffect, useContext } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { View, StyleSheet, Image, TouchableOpacity, TextInput, Text, Alert } from 'react-native';

import 'react-native-gesture-handler';
//Api
import api from '../services/api';
// Token Decoder
import jwt from '../services/tokenDecoder';
// Interfaces
import token from '../interfaces/token';
//Page
import AuthContext from '../context/auth';

const MeuPerfil = () => {

    const { GetTokenUser, Logout } = useContext(AuthContext)

    let tokenDecoded: token;

    GetTokenUser().then(token => {
        tokenDecoded = token !== null ? jwt(token) : null;
    })

    // Dados estáticos
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [curso, setCurso] = useState('');
    const [sexo, setSexo] = useState(true);
    const [termo, setTermo] = useState('');
    const [rma, setRma] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [dataMatricula, setDataMatricula] = useState('');

    // Dados alteráveis
    const [sobre, setSobre] = useState('');
    const [sobreOld, setSobreOld] = useState('');
    const [linkExterno, setLinkExterno] = useState('');
    const [linkExternoOld, setLinkExternoOld] = useState('');


    useEffect(() => {
        Listar();
    }, [])

    // Requisições GET
    const Listar = async () => {
        if (tokenDecoded == null) {
            return Alert.alert('Não foi possível carregar as informações do candidato')

        }

        const initListar = {
            headers: {
                'Content-Type': 'application/json'
            },
        }

        await api
            .get(`UsuariosCandidatos/perfil/usuario/${tokenDecoded.jti}`, initListar)
            .then(resp => {
                setNome(resp.data.nomeCompleto);
                setEmail(resp.data.email);
                setCurso(resp.data.tipoCurso.descricao);
                setRma(resp.data.rma);
                setSexo(resp.data.sexo);
                setTermo(resp.data.termoOuEgressoAluno.descricao)
                setSobre(resp.data.perfilCandidato.sobreOCandidato)
                setSobreOld(resp.data.perfilCandidato.sobreOCandidato)
                setLinkExterno(resp.data.perfilCandidato.linkExterno)
                setLinkExternoOld(resp.data.perfilCandidato.linkExterno)

                // Converte data para horário local (sem horas)
                setDataNascimento(new Date(resp.data.dataNascimento).toLocaleDateString('pt-BR', { timeZone: 'UTC' }));
                setDataMatricula(new Date(resp.data.dataMatricula).toLocaleDateString('pt-BR', { timeZone: 'UTC' }));
                //console.log(resp.data)
            })
            .catch(error => {
                if (error.response) {
                    return Alert.alert(error.response.data)

                }
            })
    }

    const salvarPerfil = async () => {
        if (tokenDecoded == null) {
            return Alert.alert('Não foi possível salvar o perfil do usuário')

        }

        const form = {
            linkExterno: linkExterno,
            sobreOCandidato: sobre
        }

        if (form.linkExterno === linkExternoOld && form.sobreOCandidato === sobreOld) {
            return Alert.alert('Não há nenhuma alteração para salvar :)')

        }

        const init = {
            headers: {
                'Content-Type': 'application/json'
            },
        }

        await api
            .put(`UsuariosCandidatos/alterar/descricao/link/${tokenDecoded.jti}`, form, init)
            .then(resp => {
                if (resp.status === 200) {
                    Alert.alert(resp.data);
                    setLinkExterno(linkExterno)
                    setLinkExternoOld(linkExterno)
                    setSobre(sobre)
                    setSobreOld(sobre)

                }
            })
            .catch(error => {
                if (error.response) {
                    return Alert.alert(error.response.data);

                }
            })
    }
    return (
        <View style={styles.container}>
            <View style={styles.boxMeuPerfil}>
                <Image style={styles.imagePerfil} source={require('../assets/images/IconUsuario.png')} />
                <Text>Meu perfil</Text>

                <View style={styles.listInfoCandidato}>
                    
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    boxMeuPerfil: {

    },

    imagePerfil: {

    },

    listInfoCandidato: {

    }
})

export default MeuPerfil;