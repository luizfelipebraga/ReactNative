import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const name = 'My name is Head Read!'
    return (

        <View>
            <Text style={styles.title}>Getting started with React Native</Text>
            <Text style={styles.subtitle}>{name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    title : {
        fontSize : 45,
    },

    subtitle : {
        fontSize: 16,
        display : 'flex',
        justifyContent : 'center',
        alignItems: 'center'
    },
});

export default ComponentsScreen;